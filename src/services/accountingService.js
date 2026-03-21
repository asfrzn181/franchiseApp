import { db, auth } from '../firebase';
import { collection, doc, query, where, getDocs, writeBatch, serverTimestamp, getDoc } from 'firebase/firestore';

export const DEFAULT_ACCOUNTS = [
  { code: '101', name: 'Kas Tunai', type: 'asset', is_system: true },
  { code: '102', name: 'Kas QRIS/Transfer', type: 'asset', is_system: true },
  { code: '103', name: 'Persediaan Bahan Baku', type: 'asset', is_system: true },
  { code: '401', name: 'Pendapatan Penjualan', type: 'revenue', is_system: true },
  { code: '501', name: 'HPP (Harga Pokok Penjualan)', type: 'expense', is_system: true },
  { code: '502', name: 'Biaya Operasional', type: 'expense', is_system: true },
  { code: '503', name: 'Gaji Pegawai', type: 'expense', is_system: true },
  { code: '504', name: 'Biaya Lainnya', type: 'expense', is_system: true },
  { code: '505', name: 'Retur/Pembatalan (Void)', type: 'expense', is_system: true }
];

/**
 * Inisialisasi daftar akun standar jika outlet belum pernah setup akuntansi
 */
export const initializeDefaultAccounts = async (outletId) => {
  if (!outletId) return;
  const q = query(collection(db, 'accounts'), where('outlet_id', '==', outletId));
  const snap = await getDocs(q);
  
  if (snap.empty) {
    const batch = writeBatch(db);
    DEFAULT_ACCOUNTS.forEach(acc => {
      const ref = doc(collection(db, 'accounts'));
      batch.set(ref, {
        ...acc,
        outlet_id: outletId,
        created_at: serverTimestamp()
      });
    });
    await batch.commit();
  }
};

/**
 * Mengambil semua master data akun milik outlet
 */
export const getAccountsByOutlet = async (outletId) => {
  const q = query(collection(db, 'accounts'), where('outlet_id', '==', outletId));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() })).sort((a, b) => a.code.localeCompare(b.code));
};

/**
 * Mengambil mutasi Jurnal Detail (Entries) spesifik untuk 1 akun, beserta data Header Jurnalnya
 */
export const getLedgerByAccount = async (accountId) => {
  const q = query(collection(db, 'journal_entries'), where('account_id', '==', accountId));
  const snap = await getDocs(q);
  
  const entries = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  
  // Ambil data journal headernya
  const ledgerDetails = [];
  for (const entry of entries) {
    const jSnap = await getDoc(doc(db, 'journals', entry.journal_id));
    if (jSnap.exists()) {
      ledgerDetails.push({
        ...entry,
        journal: jSnap.data()
      });
    }
  }

  // Sort berdasarkan tanggal jurnal
  return ledgerDetails.sort((a, b) => {
    const timeA = a.journal.date?.toMillis ? a.journal.date.toMillis() : 0;
    const timeB = b.journal.date?.toMillis ? b.journal.date.toMillis() : 0;
    return timeB - timeA;
  });
};

/**
 * Menghitung Laporan Neraca (Assets = Liabilities + Equity + Net Income)
 */
export const getBalanceSheet = async (outletId) => {
  if (!outletId) return null;

  const accSnap = await getDocs(query(collection(db, 'accounts'), where('outlet_id', '==', outletId)));
  const accounts = accSnap.docs.map(d => ({ id: d.id, ...d.data(), balance: 0 }));

  if (accounts.length === 0) {
    return { error: 'needs_setup' };
  }

  // Hitung saldo masing-masing akun berdasarkan mutasi Jurnal (Double Entry Phase 2/3)
  for (const acc of accounts) {
    const entrySnap = await getDocs(query(collection(db, 'journal_entries'), where('account_id', '==', acc.id)));
    let totalDebit = 0;
    let totalCredit = 0;
    entrySnap.forEach(e => {
      if (e.data().type === 'debit') totalDebit += e.data().amount;
      if (e.data().type === 'credit') totalCredit += e.data().amount;
    });

    if (['asset', 'expense'].includes(acc.type)) {
      acc.balance = totalDebit - totalCredit;
    } else {
      acc.balance = totalCredit - totalDebit;
    }
  }

  // Kompensasi untuk fitur "Expenses" manual dari Phase 1 
  // Karena fitur Expense dibuat sebelum Double-Entry, uangnya tidak memotong Kas Tunai di tabel Jurnal.
  // Oleh karena itu, kita potong saldo Kas Tunai secara dinamis di sini agar Balance Sheet seimbang.
  const expenseQ = query(collection(db, 'expenses'), where('outlet_id', '==', outletId));
  const expenseSnap = await getDocs(expenseQ);
  let manualExpensesTotal = 0;
  expenseSnap.forEach(d => manualExpensesTotal += d.data().amount);

  const cashAcc = accounts.find(a => a.code === '101');
  const opExpAcc = accounts.find(a => a.code === '502');

  if (manualExpensesTotal > 0) {
    if (cashAcc) cashAcc.balance -= manualExpensesTotal;
    if (opExpAcc) opExpAcc.balance += manualExpensesTotal;
  }

  // Pengelompokan Neraca
  const assets = accounts.filter(a => a.type === 'asset');
  const liabilities = accounts.filter(a => a.type === 'liability');
  const equities = accounts.filter(a => a.type === 'equity');
  
  const revenues = accounts.filter(a => a.type === 'revenue');
  const expenses = accounts.filter(a => a.type === 'expense');

  // Laba Bersih = Total Pendapatan - Total Biaya
  const totalRevenue = revenues.reduce((sum, a) => sum + a.balance, 0);
  const totalExpense = expenses.reduce((sum, a) => sum + a.balance, 0);
  const netIncome = totalRevenue - totalExpense;

  return {
    assets,
    liabilities,
    equities,
    netIncome,
    totalAssets: assets.reduce((sum, a) => sum + a.balance, 0),
    totalLiabilitiesAndEquity: 
      liabilities.reduce((sum, a) => sum + a.balance, 0) + 
      equities.reduce((sum, a) => sum + a.balance, 0) + 
      netIncome
  };
};
