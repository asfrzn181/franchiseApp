<template>
  <div class="ledger-container">
    <div class="header">
      <h2>📓 Buku Besar (Ledger)</h2>
      <p>Pantau rincian mutasi setiap akun (Debit/Kredit) secara mendetail.</p>
    </div>

    <!-- Cek Instalasi Akun Dasar -->
    <div v-if="!loading && accounts.length === 0" class="init-card">
      <div class="init-content">
        <h3>⚠️ Setup Akuntansi Belum Selesai</h3>
        <p>Outlet ini belum memiliki Bagan Akun Dasar (Chart of Accounts). Anda harus menginisialisasinya agar sistem bisa mencatat jurnal dari Kasir.</p>
        <button @click="handleInitAccounts" class="btn-primary mt-2" :disabled="isSettingUp">
          {{ isSettingUp ? 'Memproses...' : 'Buat Akun Dasar Sekarang' }}
        </button>
      </div>
    </div>

    <!-- Tampilan Utama Buku Besar -->
    <div v-else class="ledger-card table-card">
      <div class="filter-row">
        <div class="input-group">
          <label>Pilih Akun Keuangan:</label>
          <select v-model="selectedAccountId" @change="loadLedger" :disabled="loading">
            <option value="" disabled>Pilih Akun...</option>
            <option v-for="acc in accounts" :key="acc.id" :value="acc.id">
              {{ acc.code }} - {{ acc.name }} ({{ formatType(acc.type) }})
            </option>
          </select>
        </div>
      </div>

      <div v-if="loadingLedger" class="state-msg">
        Memuat mutasi akun...
      </div>

      <div v-else-if="selectedAccountId && ledgerEntries.length === 0" class="state-msg text-center">
        Belum ada mutasi untuk akun ini.
      </div>

      <div v-else-if="selectedAccountId" class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Deskripsi / Referensi</th>
              <th class="text-right">Debit (Rp)</th>
              <th class="text-right">Kredit (Rp)</th>
              <th class="text-right">Saldo Akhir (Rp)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in ledgerEntries" :key="entry.id">
              <td>{{ formatDate(entry.journal?.date) }}</td>
              <td>
                <div class="font-bold">{{ entry.journal?.description || '-' }}</div>
                <small v-if="entry.journal?.reference_id" class="text-muted">ID: {{ entry.journal.reference_id }}</small>
              </td>
              <td class="text-right d-col">{{ entry.type === 'debit' ? fmt(entry.amount) : '-' }}</td>
              <td class="text-right c-col">{{ entry.type === 'credit' ? fmt(entry.amount) : '-' }}</td>
              <td class="text-right font-bold">{{ fmt(entry.runningBalance) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAccountsByOutlet, initializeDefaultAccounts, getLedgerByAccount } from '../../services/accountingService';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase';

const loading = ref(true);
const isSettingUp = ref(false);
const loadingLedger = ref(false);
const accounts = ref([]);
const selectedAccountId = ref('');
const ledgerEntries = ref([]);
const outletId = ref('');

const formatType = (type) => {
  const map = {
    'asset': 'Aset',
    'liability': 'Kewajiban',
    'equity': 'Modal',
    'revenue': 'Pendapatan',
    'expense': 'Beban/Biaya'
  };
  return map[type] || type;
};

const fmt = (n) => Number(n || 0).toLocaleString('id-ID');

const formatDate = (timestamp) => {
  if (!timestamp) return '-';
  const d = timestamp.toDate();
  return d.toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' });
};

const fetchAccounts = async () => {
  loading.value = true;
  try {
    const user = auth.currentUser;
    if (!user) return;
    const snap = await getDoc(doc(db, 'users', user.uid));
    let oid = snap.data()?.outlet_id || localStorage.getItem('active_outlet_id');
    outletId.value = oid || '';

    if (outletId.value) {
      accounts.value = await getAccountsByOutlet(outletId.value);
    }
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

const handleInitAccounts = async () => {
  if (!outletId.value) return;
  isSettingUp.value = true;
  try {
    await initializeDefaultAccounts(outletId.value);
    await fetchAccounts();
  } catch (e) {
    alert("Gagal menginisialisasi akun: " + e.message);
  } finally {
    isSettingUp.value = false;
  }
};

const loadLedger = async () => {
  if (!selectedAccountId.value) return;
  loadingLedger.value = true;
  try {
    const data = await getLedgerByAccount(selectedAccountId.value);
    const selectedAcc = accounts.value.find(a => a.id === selectedAccountId.value);
    
    // Hitung running balance (harus disort ascending dulu)
    const ascData = [...data].sort((a,b) => {
      const timeA = a.journal?.date?.toMillis() || 0;
      const timeB = b.journal?.date?.toMillis() || 0;
      return timeA - timeB;
    });

    let balance = 0;
    // Asumsi standard: 
    // Asset/Expense bertambah di Debit
    // Liability/Equity/Revenue bertambah di Kredit
    const isDebitNormal = ['asset', 'expense'].includes(selectedAcc.type);

    ascData.forEach(entry => {
      if (isDebitNormal) {
        balance += (entry.type === 'debit' ? entry.amount : -entry.amount);
      } else {
        balance += (entry.type === 'credit' ? entry.amount : -entry.amount);
      }
      entry.runningBalance = balance;
    });

    // Sesudah dapet balance, balik posisinya biar yg terbaru di atas
    ledgerEntries.value = ascData.reverse();
  } catch (e) {
    console.error(e);
  } finally {
    loadingLedger.value = false;
  }
};

onMounted(fetchAccounts);
</script>

<style scoped>
.ledger-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.header h2 { margin: 0; color: #1a73e8; }
.header p { margin: 5px 0 0; color: #666; font-size: 0.95rem; }

.init-card {
  background: white;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.init-content h3 { color: #f57c00; margin-top: 0; }
.init-content p { color: #555; max-width: 600px; margin: 10px auto; }
.mt-2 { margin-top: 1.5rem; }

.ledger-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.filter-row {
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 1.5rem;
}

.input-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 6px;
}

.input-group select {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  font-family: inherit;
  font-size: 1rem;
}
.input-group select:focus { border-color: #1a73e8; outline: none; }

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.data-table th {
  background: #fafbfc;
  color: #555;
  font-size: 0.85rem;
  text-transform: uppercase;
}

.data-table tr:hover { background: #f9fbff; }

.font-bold { font-weight: bold; }
.text-right { text-align: right !important; }
.text-center { text-align: center !important; }
.text-muted { color: #888; }
.d-col { color: #2e7d32; }
.c-col { color: #c62828; }

.btn-primary {
  background: #1a73e8;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn-primary:hover:not(:disabled) {
  background: #1557b0;
}
.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }

.state-msg { color: #888; padding: 2rem; font-style: italic; }
</style>
