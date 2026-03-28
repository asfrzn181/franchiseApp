import { db, auth } from '../firebase';
import {
  collection, query, where, getDocs, addDoc, getDoc,
  doc, updateDoc, deleteDoc, serverTimestamp, orderBy,
  writeBatch, increment, Timestamp
} from 'firebase/firestore';

// ─────────────────────────────────────────────
// INGREDIENTS (BAHAN BAKU)
// ─────────────────────────────────────────────

export const getIngredientsByOutlet = async (outletIdOrArray) => {
  let allDocs = [];
  if (Array.isArray(outletIdOrArray)) {
    if (outletIdOrArray.length === 0) return [];
    for (let i = 0; i < outletIdOrArray.length; i += 30) {
      const chunk = outletIdOrArray.slice(i, i + 30);
      const q = query(collection(db, 'ingredients'), where('outlet_id', 'in', chunk));
      const snap = await getDocs(q);
      allDocs.push(...snap.docs);
    }
  } else {
    const q = query(collection(db, 'ingredients'), where('outlet_id', '==', outletIdOrArray));
    const snap = await getDocs(q);
    allDocs = snap.docs;
  }
  const ingredients = allDocs.map(d => ({ id: d.id, stock: 0, costPerUnit: 0, ...d.data() }));
  return ingredients.sort((a, b) => a.name.localeCompare(b.name));
};

export const addIngredient = async (outletId, data) => {
  return addDoc(collection(db, 'ingredients'), {
    ...data,
    outlet_id: outletId,
    stock: 0,
    created_at: serverTimestamp()
  });
};

export const updateIngredient = async (id, updates) => {
  return updateDoc(doc(db, 'ingredients', id), {
    ...updates,
    updated_at: serverTimestamp()
  });
};

export const updateIngredientStock = async (id, amount, operationType = 'add', mutationType = 'stock_in', outletId = '') => {
  const ref = doc(db, 'ingredients', id);
  const user = auth.currentUser;
  
  const batch = writeBatch(db);

  if (operationType === 'add') {
    batch.update(ref, { stock: increment(amount), updated_at: serverTimestamp() });
  } else if (operationType === 'subtract') {
    batch.update(ref, { stock: increment(-amount), updated_at: serverTimestamp() });
  }

  const logRef = doc(collection(db, 'stock_movements'));
  if (outletId) {
    batch.set(logRef, {
      outlet_id: outletId,
      ingredient_id: id,
      qty_change: operationType === 'subtract' ? -Math.abs(amount) : amount,
      type: mutationType,
      user_uid: user?.uid || '',
      created_at: serverTimestamp()
    });
  }

  return batch.commit();
};

export const deleteIngredient = async (id) => {
  return deleteDoc(doc(db, 'ingredients', id));
};

// ─────────────────────────────────────────────
// PRODUCTS (RESEP / MENU)
// ─────────────────────────────────────────────

export const getProductsByOutlet = async (outletId) => {
  const q = query(
    collection(db, 'products'),
    where('outlet_id', '==', outletId)
  );
  const snap = await getDocs(q);
  const products = snap.docs.map(d => ({ id: d.id, recipe: [], ...d.data() }));
  return products.sort((a, b) =>
    (a.category || '').localeCompare(b.category || '') || a.name.localeCompare(b.name)
  );
};

export const addProduct = async (outletId, data) => {
  return addDoc(collection(db, 'products'), {
    ...data,
    outlet_id: outletId,
    is_active: true,
    created_at: serverTimestamp()
  });
};

export const updateProduct = async (productId, updates) => {
  return updateDoc(doc(db, 'products', productId), {
    ...updates,
    updated_at: serverTimestamp()
  });
};

export const deleteProduct = async (productId) => {
  return deleteDoc(doc(db, 'products', productId));
};

// ─────────────────────────────────────────────
// ORDERS
// ─────────────────────────────────────────────

/**
 * Simpan transaksi ke Firestore dan potong stok bahan baku berdasarkan resep
 */
export const createOrder = async (outletId, cartItems, paymentInfo, discountInfo = null, options = {}) => {
  const user = auth.currentUser;
  const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const discountAmount = discountInfo ? discountInfo.amount : 0;
  const total = subtotal - discountAmount;

  const createdAt = options.customDate ? Timestamp.fromDate(new Date(options.customDate)) : serverTimestamp();

  const batch = writeBatch(db);

  const orderRef = doc(collection(db, 'orders'));
  batch.set(orderRef, {
    outlet_id: outletId,
    cashier_uid: user?.uid || '',
    cashier_email: user?.email || '',
    items: cartItems, // item contains qty and product_id (and optionally the copied recipe)
    subtotal: subtotal,
    discount_amount: discountAmount,
    discount_type: discountInfo ? discountInfo.type : null,
    total: total,
    total_hpp: totalHpp, // SAVE HPP HISTORY TO AVOID RECALCULATION ON VOID LATER
    payment_method: paymentInfo.method,
    cash_received: paymentInfo.method === 'cash' ? paymentInfo.cash_received : null,
    change: paymentInfo.method === 'cash' ? paymentInfo.change : null,
    status: 'completed',
    created_at: createdAt
  });

  // Potong stok bahan baku berdasarkan resep setiap item di keranjang
  const ingredientDeductions = {};

  for (const item of cartItems) {
    if (item.recipe && Array.isArray(item.recipe)) {
      for (const req of item.recipe) {
        if (!ingredientDeductions[req.ingredient_id]) ingredientDeductions[req.ingredient_id] = 0;
        ingredientDeductions[req.ingredient_id] += (req.qty * item.qty);
      }
    }
  }

  // Hitung HPP dengan mengambil harga valid/terbaru dari master bahan baku
  let totalHpp = 0;
  
  if (!options.skipStock) {
    for (const [ingId, qtyDeducted] of Object.entries(ingredientDeductions)) {
      const ingRef = doc(db, 'ingredients', ingId);
      const ingSnap = await getDoc(ingRef);
      if (ingSnap.exists()) {
        const ingData = ingSnap.data();
        const cost = ingData.costPerUnit || 0;
        totalHpp += (cost * qtyDeducted);
      }
    }
  }

  if (!options.skipStock) {
    for (const [ingId, qtyDeducted] of Object.entries(ingredientDeductions)) {
      const ingRef = doc(db, 'ingredients', ingId);
      batch.update(ingRef, { stock: increment(-qtyDeducted) });
      
      // Log movement
      const logRef = doc(collection(db, 'stock_movements'));
      batch.set(logRef, {
        outlet_id: outletId,
        ingredient_id: ingId,
        qty_change: -qtyDeducted,
        type: 'pos_sale',
        reference_id: orderRef.id,
        user_uid: user?.uid || '',
        created_at: createdAt
      });
    }
  }

  // ─────────────────────────────────────────────
  // AKUNTANSI LOKAL (DOUBLE ENTRY)
  // ─────────────────────────────────────────────
  // Ambil data akun terlebih dahulu
  const accSnap = await getDocs(query(collection(db, 'accounts'), where('outlet_id', '==', outletId)));
  const accounts = accSnap.docs.map(d => ({ id: d.id, ...d.data() }));

  const cashAcc = accounts.find(a => a.code === '101');
  const qrisAcc = accounts.find(a => a.code === '102');
  const inventoryAcc = accounts.find(a => a.code === '103');
  const revenueAcc = accounts.find(a => a.code === '401');
  const hppAcc = accounts.find(a => a.code === '501');

  if (revenueAcc && (cashAcc || qrisAcc)) {
    const journalRef = doc(collection(db, 'journals'));
    batch.set(journalRef, {
      outlet_id: outletId,
      date: createdAt,
      description: `Penjualan POS #${orderRef.id.slice(-6).toUpperCase()}`,
      reference_type: 'sale',
      reference_id: orderRef.id,
      created_by: user?.uid || '',
      created_at: createdAt
    });

    const debitAcc = paymentInfo.method === 'cash' ? cashAcc : qrisAcc;
    if (debitAcc && total > 0) {
      // 1. Catat Pemasukan Kas Kasir (Debit) / Bank
      batch.set(doc(collection(db, 'journal_entries')), {
        journal_id: journalRef.id,
        account_id: debitAcc.id,
        type: 'debit',
        amount: total,
        outlet_id: outletId,
        created_at: createdAt
      });
      // 2. Catat Pendapatan (Kredit)
      batch.set(doc(collection(db, 'journal_entries')), {
        journal_id: journalRef.id,
        account_id: revenueAcc.id,
        type: 'credit',
        amount: total,
        outlet_id: outletId,
        created_at: createdAt
      });
    }

    // 3. Jurnal HPP (Jika ada HPP > 0 dan akun tersedia)
    if (totalHpp > 0 && hppAcc && inventoryAcc) {
      // Debit HPP
      batch.set(doc(collection(db, 'journal_entries')), {
        journal_id: journalRef.id,
        account_id: hppAcc.id,
        type: 'debit',
        amount: totalHpp,
        outlet_id: outletId,
        created_at: createdAt
      });
      // Kredit Persediaan
      batch.set(doc(collection(db, 'journal_entries')), {
        journal_id: journalRef.id,
        account_id: inventoryAcc.id,
        type: 'credit',
        amount: totalHpp,
        outlet_id: outletId,
        created_at: createdAt
      });
    }
  }

  await batch.commit();
  return orderRef.id;
};

export const getOrdersByOutlet = async (outletIdOrArray) => {
  let allDocs = [];
  if (Array.isArray(outletIdOrArray)) {
    if (outletIdOrArray.length === 0) return [];
    for (let i = 0; i < outletIdOrArray.length; i += 30) {
      const chunk = outletIdOrArray.slice(i, i + 30);
      const q = query(collection(db, 'orders'), where('outlet_id', 'in', chunk));
      const snap = await getDocs(q);
      allDocs.push(...snap.docs);
    }
  } else {
    const q = query(collection(db, 'orders'), where('outlet_id', '==', outletIdOrArray));
    const snap = await getDocs(q);
    allDocs = snap.docs;
  }
  const orders = allDocs.map(d => ({ id: d.id, ...d.data() }));
  return orders.sort((a,b) => {
    const timeA = a.created_at?.toMillis ? a.created_at.toMillis() : 0;
    const timeB = b.created_at?.toMillis ? b.created_at.toMillis() : 0;
    return timeB - timeA;
  });
};

/** Batalkan (Void) Transaksi dan pulihkan stok bahan baku */
export const voidOrder = async (orderId, items) => {
  const batch = writeBatch(db);
  
  const orderRef = doc(db, 'orders', orderId);
  // Fetch old data to know payment method and total
  const docSnap = await getDoc(orderRef);
  if (!docSnap.exists()) return;

  batch.update(orderRef, {
    status: 'voided',
    voided_at: serverTimestamp()
  });

  const ingredientRestorations = {};
  for (const item of items) {
    if (item.recipe && Array.isArray(item.recipe)) {
      for (const req of item.recipe) {
        if (!ingredientRestorations[req.ingredient_id]) ingredientRestorations[req.ingredient_id] = 0;
        ingredientRestorations[req.ingredient_id] += (req.qty * item.qty);
      }
    }
  }

  for (const [ingId, qtyRestored] of Object.entries(ingredientRestorations)) {
    const ingRef = doc(db, 'ingredients', ingId);
    batch.update(ingRef, { stock: increment(qtyRestored) });
    
    // Log movement
    // Note: We need outletId, assuming the app will pass it later, or we just rely on no outletId for now 
    // but ideally we should pass it. Let's try to get it from items if possible
    const logRef = doc(collection(db, 'stock_movements'));
    batch.set(logRef, {
      outlet_id: '', // can be populated if needed
      ingredient_id: ingId,
      qty_change: qtyRestored,
      type: 'void',
      reference_id: orderId,
      user_uid: auth.currentUser?.uid || '',
      created_at: serverTimestamp()
    });
  }

  // Jurnal Reversal (Pembatalan) jika Akun tersedia
  const outletId = docSnap.data().outlet_id || '';
  if (outletId) {
    const accSnap = await getDocs(query(collection(db, 'accounts'), where('outlet_id', '==', outletId)));
    const accounts = accSnap.docs.map(d => ({ id: d.id, ...d.data() }));
    
    // Ambil totalHpp dari database pesanan, karena kita butuh nilai fix saat order tsb terjadi.
    // Jika tidak tersimpan di Doc orders, kita harus hitung ulang saat Void (atau fallback nol jika tidak komplit trackingnya).
    // Karena kita baru menambah HPP calculation, kita hitung ulang berdasarkan cost bahan baku SAAT INI sebagai pendekatan.
    let historicalHpp = docSnap.data().total_hpp || 0;
    
    if (!historicalHpp) {
      for (const [ingId, qtyRestored] of Object.entries(ingredientRestorations)) {
        const ingSnap = await getDoc(doc(db, 'ingredients', ingId));
        if (ingSnap.exists()) historicalHpp += (ingSnap.data().costPerUnit || 0) * qtyRestored;
      }
    }

    const cashAcc = accounts.find(a => a.code === '101');
    const qrisAcc = accounts.find(a => a.code === '102');
    const inventoryAcc = accounts.find(a => a.code === '103');
    const revenueAcc = accounts.find(a => a.code === '401');
    const hppAcc = accounts.find(a => a.code === '501');
    const returnAcc = accounts.find(a => a.code === '505') || revenueAcc; // Jika retur tak ada, potong pendapatan lgsg
    
    if (returnAcc) {
      const journalRef = doc(collection(db, 'journals'));
      batch.set(journalRef, {
        outlet_id: outletId,
        date: serverTimestamp(),
        description: `Void Penjualan #${orderId.slice(-6).toUpperCase()}`,
        reference_type: 'void',
        reference_id: orderId,
        created_by: auth.currentUser?.uid || '',
        created_at: serverTimestamp()
      });

      const paymentMethod = docSnap.data().payment_method;
      const total = docSnap.data().total || 0;
      const creditAcc = paymentMethod === 'cash' ? cashAcc : qrisAcc;
      
      if (creditAcc && total > 0) {
        // Void membalik jurnal: Pendapatan Debit, Kas Kredit
        batch.set(doc(collection(db, 'journal_entries')), {
          journal_id: journalRef.id,
          account_id: returnAcc.id,
          type: 'debit',
          amount: total,
          outlet_id: outletId,
          created_at: serverTimestamp()
        });
        batch.set(doc(collection(db, 'journal_entries')), {
          journal_id: journalRef.id,
          account_id: creditAcc.id,
          type: 'credit',
          amount: total,
          outlet_id: outletId,
          created_at: serverTimestamp()
        });
      }

      // Reversal HPP
      if (historicalHpp > 0 && hppAcc && inventoryAcc) {
        // Debit Persediaan (bertambah)
        batch.set(doc(collection(db, 'journal_entries')), {
          journal_id: journalRef.id,
          account_id: inventoryAcc.id,
          type: 'debit',
          amount: historicalHpp,
          outlet_id: outletId,
          created_at: serverTimestamp()
        });
        // Kredit HPP (beban berkurang)
        batch.set(doc(collection(db, 'journal_entries')), {
          journal_id: journalRef.id,
          account_id: hppAcc.id,
          type: 'credit',
          amount: historicalHpp,
          outlet_id: outletId,
          created_at: serverTimestamp()
        });
      }
    }
  }

  await batch.commit();
};

// ─────────────────────────────────────────────
// STOCK MOVEMENTS
// ─────────────────────────────────────────────

export const getStockMovementsByOutlet = async (outletId) => {
  const q = query(
    collection(db, 'stock_movements'),
    where('outlet_id', '==', outletId)
  );
  const snap = await getDocs(q);
  const movs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  return movs.sort((a,b) => {
    const timeA = a.created_at?.toMillis ? a.created_at.toMillis() : 0;
    const timeB = b.created_at?.toMillis ? b.created_at.toMillis() : 0;
    return timeB - timeA;
  });
};
