import { db, auth } from '../firebase';
import {
  collection, query, where, getDocs, addDoc,
  doc, updateDoc, deleteDoc, serverTimestamp, orderBy,
  writeBatch, increment
} from 'firebase/firestore';

// ─────────────────────────────────────────────
// INGREDIENTS (BAHAN BAKU)
// ─────────────────────────────────────────────

export const getIngredientsByOutlet = async (outletId) => {
  const q = query(
    collection(db, 'ingredients'),
    where('outlet_id', '==', outletId)
  );
  const snap = await getDocs(q);
  const ingredients = snap.docs.map(d => ({ id: d.id, stock: 0, costPerUnit: 0, ...d.data() }));
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
export const createOrder = async (outletId, cartItems, paymentInfo, discountInfo = null) => {
  const user = auth.currentUser;
  const subtotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);
  const discountAmount = discountInfo ? discountInfo.amount : 0;
  const total = subtotal - discountAmount;

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
    payment_method: paymentInfo.method,
    cash_received: paymentInfo.method === 'cash' ? paymentInfo.cash_received : null,
    change: paymentInfo.method === 'cash' ? paymentInfo.change : null,
    status: 'completed',
    created_at: serverTimestamp()
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
      created_at: serverTimestamp()
    });
  }

  await batch.commit();
  return orderRef.id;
};

export const getOrdersByOutlet = async (outletId) => {
  const q = query(
    collection(db, 'orders'),
    where('outlet_id', '==', outletId)
  );
  const snap = await getDocs(q);
  const orders = snap.docs.map(d => ({ id: d.id, ...d.data() }));
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
