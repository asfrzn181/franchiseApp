<template>
  <div class="pos-root">
    <!-- ─── LEFT: Product Catalog ─── -->
    <div class="catalog-panel">
      <div class="catalog-header">
        <h2>Kasir</h2>
        <div class="search-bar">
          <span class="search-icon">🔍</span>
          <input v-model="search" placeholder="Cari produk..." />
        </div>
      </div>

      <div class="cat-tabs">
        <button
          v-for="cat in ['Semua', ...uniqueCategories]"
          :key="cat"
          :class="['tab-btn', { active: activeTab === cat }]"
          @click="activeTab = cat"
        >{{ cat }}</button>
      </div>

      <div v-if="loadingProducts" class="state-txt">Memuat produk & bahan baku...</div>
      <div v-else-if="filteredProducts.length === 0" class="state-txt">Produk tidak ditemukan.</div>
      <div v-else class="product-grid">
        <button
          v-for="p in filteredProducts"
          :key="p.id"
          class="product-tile"
          :class="{ 'in-cart': isInCart(p.id), 'out-of-stock': !canAddMore(p) }"
          @click="addToCart(p)"
          :disabled="!canAddMore(p)"
        >
          <span class="tile-emoji">{{ categoryEmoji(p.category) }}</span>
          <span class="tile-name">{{ p.name }}</span>
          <span class="tile-price">Rp {{ fmt(p.price) }}</span>
          <span v-if="getMaxPortions(p) > 0" class="stock-badge">Max: {{ getMaxPortions(p) }} Porsi</span>
          <span v-else class="stock-badge empty">Bahan Habis</span>
          <span v-if="isInCart(p.id)" class="cart-badge">{{ getCartQty(p.id) }}</span>
        </button>
      </div>
    </div>

    <!-- ─── MOBILE FAB ─── -->
    <button v-if="isMobile" class="fab-cart" @click="showMobileCart = true">
      🛒 Lihat Keranjang
      <span v-if="cartTotalItems > 0" class="fab-badge">{{ cartTotalItems }}</span>
    </button>

    <!-- ─── RIGHT: Cart Panel (Sidebar / Bottom Sheet) ─── -->
    <div class="cart-wrapper" :class="{ 'bottom-sheet-active': isMobile && showMobileCart }">
      <div v-if="isMobile && showMobileCart" class="bottom-sheet-overlay" @click="showMobileCart = false"></div>
      
      <div class="cart-panel" :class="{ 'bottom-sheet': isMobile }">
        <div class="cart-header">
          <h2 v-if="!isMobile">Pesanan Saat Ini</h2>
          <div v-else class="sheet-drag-handle" @click="showMobileCart = false">
            <div class="drag-bar"></div>
            <h2>Pesanan Saat Ini</h2>
          </div>
          
          <button class="btn-clear" @click="clearCart" v-if="cart.length">Kosongkan</button>
        </div>

        <div class="cart-body">
          <div v-if="cart.length === 0" class="cart-empty">
            <span>🛒</span>
            <p>Klik produk untuk menambahkan ke keranjang</p>
          </div>

          <div v-else class="cart-items">
            <div v-for="item in cart" :key="item.product_id" class="cart-item">
              <div class="item-info">
                <span class="item-name">{{ item.name }}</span>
                <span class="item-price">Rp {{ fmt(item.price) }}</span>
            </div>
            <div class="item-qty-row">
              <button @click="decreaseQty(item)" class="qty-btn">−</button>
              <span class="qty-val">{{ item.qty }}</span>
              <button @click="increaseQty(item)" class="qty-btn">+</button>
              <span class="item-subtotal">Rp {{ fmt(item.subtotal) }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-footer">
        <div class="total-row">
          <span>Total</span>
          <span class="total-amount">Rp {{ fmt(grandTotal) }}</span>
        </div>
        <button :disabled="cart.length === 0" @click="openPayment" class="btn-pay">
          💳 Bayar
        </button>
      </div>
    </div> <!-- .cart-panel -->
    </div> <!-- .cart-wrapper -->
    
    <!-- ─── MODAL: Pembayaran ─── -->
    <div v-if="showPayment" class="modal-overlay" @click.self="showPayment = false">
      <div class="payment-modal">
        <h2>Pembayaran</h2>

        <div class="pm-grid">
          <!-- KOLOM KIRI: Rincian Tagihan & Backdate -->
          <div class="pm-left">
            <div class="pay-total">
              <span>Subtotal</span>
              <strong>Rp {{ fmt(grandTotal) }}</strong>
            </div>

            <div class="pay-promo" v-if="hasPromoEligibleItem" style="margin-top:0.75rem;">
              <label style="display:flex; align-items:center; gap:8px; cursor:pointer; color:#1565c0; font-weight:bold;">
                <input type="checkbox" v-model="usePromoTukarNota" style="transform:scale(1.3)" />
                <span>🎁 Tukar 10 Nota (Gratis 1 Produk)</span>
              </label>
            </div>
            <div class="pay-total" v-if="usePromoTukarNota" style="margin-top:0.5rem; color:#fa5252;">
              <span>Diskon Loyalty</span>
              <strong>- Rp {{ fmt(tukarNotaDiscount) }}</strong>
            </div>
            
            <div class="pay-total" style="margin-top:0.5rem; border-top:1px dashed #ccc; padding-top:0.5rem; color:#1565c0; font-size:1.3rem;">
              <span>Total Akhir</span>
              <strong>Rp {{ fmt(finalTotal) }}</strong>
            </div>

            <div v-if="userRole === 'owner' || userRole === 'superadmin'" class="backdate-options" style="margin-top:1rem; padding:1rem; background:#fff3cd; border-radius:8px; font-size:0.9rem; text-align:left;">
              <strong style="color:#856404; display:block; margin-bottom:8px;">⚙️ Opsi Khusus Owner (Data Lama):</strong>
              <div style="margin-bottom:8px;">
                <label style="font-weight:bold; color:#333;">Tanggal Transaksi:</label>
                <input type="datetime-local" v-model="customDate" style="width:100%; padding:0.5rem; margin-top:4px; border-radius:4px; border:1px solid #ccc;"/>
              </div>
              <div>
                <label style="display:flex; align-items:center; gap:8px; cursor:pointer; font-weight:bold; color:#333; line-height: 1.2;">
                  <input type="checkbox" v-model="skipStock" style="width:20px; height:20px; flex-shrink: 0;" />
                  Abaikan Potong Stok & HPP (Hanya cetak Omset)
                </label>
              </div>
            </div>
          </div>

          <!-- KOLOM KANAN: Metode Pembayaran -->
          <div class="pm-right">
            <div class="pay-method">
              <label>Metode Pembayaran</label>
              <div class="method-btns">
                <button :class="['method-btn', { active: payMethod === 'cash' }]" @click="payMethod = 'cash'">💵 Tunai</button>
                <button :class="['method-btn', { active: payMethod === 'qris' }]" @click="payMethod = 'qris'">📱 QRIS</button>
              </div>
            </div>

            <div v-if="payMethod === 'cash'" class="pay-cash">
              <div class="field">
                <label>Uang Diterima (Rp)</label>
                <input
                  v-model.number="cashReceived"
                  type="number"
                  :placeholder="grandTotal"
                  @input="onCashInput"
                  ref="cashInput"
                />
              </div>
              <div class="quick-amounts">
                <button v-for="amt in quickAmounts" :key="amt" @click="cashReceived = amt; onCashInput()" class="quick-btn">
                  {{ fmt(amt) }}
                </button>
              </div>
              <div class="change-row" :class="{ negative: changeDue < 0 }">
                <span>Kembalian</span>
                <strong>Rp {{ changeDue < 0 ? '-' + fmt(Math.abs(changeDue)) : fmt(changeDue) }}</strong>
              </div>
            </div>

            <div v-if="payMethod === 'qris'" class="qris-info">
              <div class="qris-box">📱 Scan QRIS pelanggan di mesin EDC</div>
            </div>

            <div class="pay-actions">
              <button @click="showPayment = false" class="btn-secondary">Batal</button>
              <button
                @click="confirmPayment"
                :disabled="isProcessing || (payMethod === 'cash' && changeDue < 0)"
                class="btn-primary"
              >
                {{ isProcessing ? 'Memproses...' : '✅ Konfirmasi' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ─── MODAL: Struk ─── -->
    <div v-if="showReceipt" class="modal-overlay">
      <div class="receipt-modal">
        <div class="printable-receipt">
          <div class="receipt-header">
            <h2>STRUK KASIR</h2>
            <p>{{ new Date().toLocaleString('id-ID') }}</p>
            <p>Order #{{ lastOrderId?.slice(-6).toUpperCase() }}</p>
            <div class="receipt-divider"></div>
          </div>

          <div class="receipt-items">
            <div v-for="item in lastCart" :key="item.product_id" class="receipt-item-row">
              <div class="item-name-row">{{ item.name }}</div>
              <div class="item-detail-row">
                <span>{{ item.qty }} x {{ fmt(item.price) }}</span>
                <span>{{ fmt(item.subtotal) }}</span>
              </div>
            </div>
          </div>

          <div class="receipt-divider"></div>

          <div class="receipt-summary">
            <div class="summary-row" style="font-size: 14px;">
              <span>Subtotal</span>
              <span>{{ fmt(lastTotal) }}</span>
            </div>
            <div v-if="lastDiscount?.amount > 0" class="summary-row" style="font-size: 14px; color: #555;">
              <span>Diskon (Tukar Nota)</span>
              <span>-{{ fmt(lastDiscount.amount) }}</span>
            </div>
            <div class="summary-row" style="font-size: 16px; margin-top:4px; border-top: 1px dashed #000; padding-top: 4px;">
              <span><strong>TOTAL AKHIR</strong></span>
              <span><strong>{{ fmt(lastFinalTotal) }}</strong></span>
            </div>
            
            <div v-if="lastPayment.method === 'cash'" class="summary-details">
              <div class="summary-row"><span>Tunai</span><span>{{ fmt(lastPayment.cash_received) }}</span></div>
              <div class="summary-row"><span>Kembali</span><span>{{ fmt(lastPayment.change) }}</span></div>
            </div>
            <div v-else class="summary-row">
              <span>Pembayaran</span><span>QRIS</span>
            </div>
          </div>

          <div class="receipt-divider"></div>
          
          <div class="receipt-footer">
            <p>Terima Kasih</p>
            <p>Atas Kunjungan Anda</p>
          </div>
        </div>

        <div class="receipt-actions">
          <button @click="printReceipt" class="btn-secondary btn-print" style="flex:1;">
            🖨️ Cetak Nota
          </button>
          <button @click="closeReceipt" class="btn-primary" style="flex:1;">
            🆕 Selesai
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getProductsByOutlet, getIngredientsByOutlet, createOrder } from '../../services/posService';

// ── Device Awareness
const isMobile = ref(false);
const showMobileCart = ref(false);

const checkDevice = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) showMobileCart.value = false;
};

// ── State
const allProducts = ref([]);
const ingredients = ref([]);
const loadingProducts = ref(true);
const search = ref('');
const activeTab = ref('Semua');
const outletId = ref('');
const userRole = ref('');
const customDate = ref('');
const skipStock = ref(false);

// Cart
const cart = ref([]);

// Payment
const showPayment = ref(false);
const payMethod = ref('cash');
const cashReceived = ref(0);
const isProcessing = ref(false);
const cashInput = ref(null);

// Receipt
const showReceipt = ref(false);
const lastOrderId = ref('');
const lastCart = ref([]);
const lastTotal = ref(0);
const lastFinalTotal = ref(0);
const lastDiscount = ref(null);
const lastPayment = ref({});

// ── Promo Logic
const usePromoTukarNota = ref(false);

const hasPromoEligibleItem = computed(() => cart.value.length > 0);

const tukarNotaDiscount = computed(() => {
  if (!hasPromoEligibleItem.value) return 0;
  // Cari produk termurah di cart
  const cheapestItem = cart.value.reduce((prev, curr) => (prev.price < curr.price ? prev : curr), cart.value[0]);
  return cheapestItem ? cheapestItem.price : 0;
});

// ── Derived
const uniqueCategories = computed(() =>
  [...new Set(allProducts.value.map(p => p.category).filter(Boolean))].sort()
);

const filteredProducts = computed(() => {
  let list = allProducts.value.filter(p => p.is_active);
  if (activeTab.value !== 'Semua') list = list.filter(p => p.category === activeTab.value);
  if (search.value.trim()) {
    const q = search.value.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q));
  }
  return list;
});

const grandTotal = computed(() =>
  cart.value.reduce((sum, i) => sum + i.subtotal, 0)
);

const cartTotalItems = computed(() => 
  cart.value.reduce((sum, i) => sum + i.qty, 0)
);

const finalTotal = computed(() => {
  let total = grandTotal.value;
  if (usePromoTukarNota.value) total -= tukarNotaDiscount.value;
  return total > 0 ? total : 0;
});

const changeDue = computed(() => cashReceived.value - finalTotal.value);

const quickAmounts = computed(() => {
  const t = finalTotal.value;
  const rounds = [
    Math.ceil(t / 5000) * 5000,
    Math.ceil(t / 10000) * 10000,
    Math.ceil(t / 20000) * 20000,
    Math.ceil(t / 50000) * 50000,
    Math.ceil(t / 100000) * 100000,
  ];
  return [...new Set(rounds)].slice(0, 4);
});

// ── Helpers
const fmt = (n) => Number(n || 0).toLocaleString('id-ID');

const categoryEmoji = (cat) => {
  const map = { 'Minuman': '🍵', 'Makanan': '🍱', 'Snack': '🍪', 'Dessert': '🍨', 'Kopi': '☕', 'Teh': '🍵', 'Jus': '🧃' };
  return map[cat] || '🛍️';
};

const isInCart = (id) => cart.value.some(i => i.product_id === id);
const getCartQty = (id) => cart.value.find(i => i.product_id === id)?.qty || 0;

// Dynamic Ingredients Availability
const getAvailableIngredients = () => {
  const consumed = {};
  cart.value.forEach(item => {
    if (item.recipe) {
      item.recipe.forEach(req => {
        consumed[req.ingredient_id] = (consumed[req.ingredient_id] || 0) + (req.qty * item.qty);
      });
    }
  });
  
  return ingredients.value.map(ing => ({
    ...ing,
    available: ing.stock - (consumed[ing.id] || 0)
  }));
};

const canAddMore = (p) => {
  if (!p.recipe || p.recipe.length === 0) return false;
  const avail = getAvailableIngredients();
  for (const req of p.recipe) {
    const ing = avail.find(i => i.id === req.ingredient_id);
    if (!ing || ing.available < req.qty) return false;
  }
  return true;
};

const getMaxPortions = (p) => {
  if (!p.recipe || p.recipe.length === 0) return 0;
  let max = Infinity;
  for (const req of p.recipe) {
    const ing = ingredients.value.find(i => i.id === req.ingredient_id);
    if (!ing) return 0;
    const possible = Math.floor(ing.stock / req.qty);
    if (possible < max) max = possible;
  }
  return max === Infinity ? 0 : max;
};

// ── Cart Actions
const addToCart = (p) => {
  if (!canAddMore(p)) return alert('Bahan baku tidak mencukupi!');
  const existing = cart.value.find(i => i.product_id === p.id);
  if (existing) {
    existing.qty++;
    existing.subtotal = existing.qty * existing.price;
  } else {
    cart.value.push({ 
      product_id: p.id, 
      name: p.name, 
      price: p.price, 
      qty: 1, 
      subtotal: p.price, 
      recipe: p.recipe 
    });
  }
};

const increaseQty = (item) => {
  const p = allProducts.value.find(prod => prod.id === item.product_id);
  if (!p || !canAddMore(p)) return alert('Bahan baku tidak mencukupi untuk menambah porsi!');
  item.qty++;
  item.subtotal = item.qty * item.price;
};

const decreaseQty = (item) => {
  if (item.qty <= 1) {
    cart.value = cart.value.filter(i => i.product_id !== item.product_id);
  } else {
    item.qty--;
    item.subtotal = item.qty * item.price;
  }
};

const clearCart = () => { if (confirm('Kosongkan semua pesanan?')) cart.value = []; };

// ── Payment
const openPayment = () => {
  usePromoTukarNota.value = false;
  payMethod.value = 'cash';
  cashReceived.value = finalTotal.value;
  showPayment.value = true;
  nextTick(() => cashInput.value?.select());
};

const onCashInput = () => { /* reactive via computed changeDue */ };

import { watch } from 'vue';
watch(usePromoTukarNota, () => {
  if (payMethod.value === 'cash') cashReceived.value = finalTotal.value;
});

const confirmPayment = async () => {
  if (payMethod.value === 'cash' && changeDue.value < 0) return;
  isProcessing.value = true;
  try {
    const payInfo = {
      method: payMethod.value,
      cash_received: payMethod.value === 'cash' ? cashReceived.value : null,
      change: payMethod.value === 'cash' ? changeDue.value : null,
    };
    
    const discountInfo = usePromoTukarNota.value ? { type: 'tukar_nota', amount: tukarNotaDiscount.value } : null;

    const options = {
      customDate: customDate.value || null,
      skipStock: skipStock.value
    };

    const orderId = await createOrder(outletId.value, [...cart.value], payInfo, discountInfo, options);

    // Reset backdate state
    customDate.value = '';
    skipStock.value = false;

    // Save for receipt
    lastOrderId.value = orderId;
    lastCart.value = [...cart.value];
    lastTotal.value = grandTotal.value;
    lastFinalTotal.value = finalTotal.value;
    lastDiscount.value = discountInfo;
    lastPayment.value = { ...payInfo };

    showPayment.value = false;
    cart.value = [];
    showReceipt.value = true;
    await loadProducts(); // Refresh stock
  } catch (err) {
    alert('Gagal memproses: ' + err.message);
  } finally {
    isProcessing.value = false;
  }
};

const closeReceipt = () => { showReceipt.value = false; };

const printReceipt = () => { window.print(); };

// ── Load
const loadProducts = async () => {
  loadingProducts.value = true;
  try {
    const user = auth.currentUser;
    if (!user) return;
    
    const snap = await getDoc(doc(db, 'users', user.uid));
    const userData = snap.data() || {};
    userRole.value = userData.role || '';
    let oid = userData.outlet_id || localStorage.getItem('active_outlet_id');
    if (oid === 'undefined') oid = null;
    
    if (oid) {
      outletId.value = oid;
      const [ings, prods] = await Promise.all([
        getIngredientsByOutlet(oid),
        getProductsByOutlet(oid)
      ]);
      ingredients.value = ings;
      allProducts.value = prods;
    }
  } catch (e) {
    console.error(e);
  } finally {
    loadingProducts.value = false;
  }
};

onMounted(() => {
  checkDevice();
  window.addEventListener('resize', checkDevice);
  loadProducts();
});

onUnmounted(() => {
  window.removeEventListener('resize', checkDevice);
});
</script>

<style scoped>
/* Typography: Clean Sans-serif */
.pos-root { 
  font-family: 'Inter', 'Roboto', sans-serif;
  display: flex; flex-direction: row; height: calc(100vh - 60px); 
  overflow: hidden; background: #f8f9fa; /* Neutral base */
}

/* 60-30-10 Color Rule */
/* Base: #f8f9fa (Neutral) | Secondary: #fff | Primary Action: #1565c0 (Blue) */

/* ── Split-Screen Desktop Layout ── */
.catalog-panel { flex: 0.65; display: flex; flex-direction: column; overflow: hidden; padding: 1.25rem; gap: 1rem; }
.cart-wrapper { flex: 0.35; display: flex; flex-direction: column; min-width: 340px; border-left: 2px solid #e9ecef; background: white; z-index: 10; }
.cart-panel { flex: 1; display: flex; flex-direction: column; height: 100%; background: white; }

.catalog-header { display: flex; flex-direction: column; gap: 1rem; }
.catalog-header h2 { margin: 0; color: #343a40; font-size: 1.8rem; font-weight: 800; letter-spacing: -0.5px; }
.search-bar { display: flex; align-items: center; background: white; border: 2px solid #e9ecef; border-radius: 12px; padding: 0 16px; gap: 8px; width: 100%; min-height: 54px; }
.search-bar input { border: none; outline: none; padding: 0.8rem 0; font-size: 1.1rem; width: 100%; }
.search-icon { font-size: 1.2rem; color: #adb5bd; }
.search-bar:focus-within { border-color: #1565c0; box-shadow: 0 0 0 4px rgba(21,101,192,0.1); }

.cat-tabs { display: flex; gap: 12px; overflow-x: auto; padding-bottom: 4px; }
.tab-btn { padding: 12px 24px; border-radius: 30px; border: 2px solid #e9ecef; background: white; cursor: pointer; font-size: 1rem; font-weight: 700; color: #495057; white-space: nowrap; min-height: 48px; }
.tab-btn.active { border-color: #1565c0; background: #1565c0; color: white; }

.state-txt { text-align: center; color: #adb5bd; padding: 4rem; font-size: 1.2rem; }

.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1rem; overflow-y: auto; padding-bottom: 2rem; align-content: flex-start; }
.product-tile { background: white; border-radius: 16px; padding: 1.5rem 1rem; border: 2px solid #e9ecef; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 10px; text-align: center; position: relative; min-height: 160px; user-select: none; }
.product-tile:active { background: #f8f9fa; transform: scale(0.98); } /* Quick-add touch interaction */
.product-tile.in-cart { border-color: #1565c0; background: #f0f7ff; }
.product-tile.out-of-stock { opacity: 0.5; cursor: not-allowed; border-color: #fce4ec; background: #fafafa; }
.tile-emoji { font-size: 3rem; margin-bottom: 4px; }
.tile-name { font-size: 1.05rem; font-weight: 700; color: #343a40; line-height: 1.3; }
.tile-price { font-size: 1.15rem; font-weight: 800; color: #1565c0; }

.stock-badge { font-size: 0.75rem; color: #6c757d; font-weight: bold; background: #e9ecef; padding: 4px 8px; border-radius: 6px; margin-top: 4px; }
.stock-badge.empty { background: #ffe3e3; color: #fa5252; }

.cart-badge { position: absolute; top: -8px; right: -8px; background: #1565c0; color: white; width: 26px; height: 26px; border-radius: 50%; font-size: 0.85rem; font-weight: 900; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 8px rgba(21,101,192,0.3); }

/* ── Cart Mode (Sidebar) ── */
.cart-header { padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #e9ecef; }
.cart-header h2 { margin: 0; color: #343a40; font-size: 1.4rem; font-weight: 800; }
.btn-clear { background: none; border: none; color: #fa5252; cursor: pointer; font-size: 1rem; font-weight: 700; min-height: 44px; padding: 0 10px; }

.cart-body { flex: 1; overflow-y: auto; padding: 0 1.5rem; }
.cart-empty { text-align: center; padding: 4rem 1rem; color: #ced4da; }
.cart-empty span { font-size: 3.5rem; display: block; margin-bottom: 0.5rem; }
.cart-empty p { font-size: 1.1rem; font-weight: 600; color: #adb5bd; }

.cart-item { padding: 1.25rem 0; border-bottom: 1px dashed #dee2e6; display: flex; flex-direction: column; gap: 10px; }
.item-info { display: flex; justify-content: space-between; align-items: flex-start; }
.item-name { font-size: 1.1rem; font-weight: 700; color: #343a40; flex: 1; }
.item-price { font-size: 1rem; color: #6c757d; font-weight: 600; }
.item-qty-row { display: flex; align-items: center; justify-content: space-between; }
.qty-controls { display: flex; align-items: center; gap: 16px; }
.qty-btn { width: 44px; height: 44px; border-radius: 8px; border: 2px solid #e9ecef; background: #f8f9fa; color: #343a40; font-size: 1.25rem; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.qty-btn:active { background: #e9ecef; }
.qty-val { font-weight: 800; width: 30px; text-align: center; font-size: 1.2rem; color: #343a40; }
.item-subtotal { font-weight: 900; color: #1565c0; font-size: 1.25rem; }

.cart-footer { padding: 1.5rem; border-top: 2px solid #e9ecef; background: white; box-shadow: 0 -4px 20px rgba(0,0,0,0.03); z-index: 2; }
.total-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.25rem; }
.total-title { font-size: 1.2rem; font-weight: bold; color: #6c757d; }
.total-amount { font-size: 2rem; font-weight: 900; color: #1565c0; line-height: 1; }
.btn-pay { width: 100%; min-height: 64px; background: #1565c0; color: white; border: none; border-radius: 12px; font-size: 1.4rem; font-weight: 800; cursor: pointer; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(21,101,192,0.3); }
.btn-pay:active:not(:disabled) { transform: scale(0.98); background: #004ba0; }
.btn-pay:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }

/* ── Modals ── */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.payment-modal, .receipt-modal { background: white; border-radius: 16px; padding: 2.5rem; box-shadow: 0 10px 40px rgba(0,0,0,0.3); }

.payment-modal { width: 850px; max-width: 95vw; }
.receipt-modal { width: 480px; max-width: 95vw; }

.pm-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
.pm-right { display: flex; flex-direction: column; justify-content: flex-start; }
.pay-actions { margin-top: auto; padding-top: 1.5rem; }

.payment-modal h2, .receipt-modal h2 { margin: 0 0 1.5rem; color: #2d5a27; font-size: 1.8rem; }

.pay-total { display: flex; justify-content: space-between; background: #e8f5e9; padding: 1.25rem; border-radius: 12px; margin-bottom: 1rem; align-items: center; }
.pay-total strong { font-size: 1.6rem; color: #1e3d1a; }

.pay-method { margin-bottom: 1rem; }
.pay-method label { font-size: 1.05rem; font-weight: 700; color: #333; display: block; margin-bottom: 10px; }
.method-btns { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.method-btn { padding: 1rem; border-radius: 12px; border: 2px solid #ddd; background: #fafbfc; cursor: pointer; font-weight: bold; font-size: 1.1rem; }
.method-btn.active { border-color: #2d5a27; background: #e8f5e9; color: #2d5a27; }

.field { display: flex; flex-direction: column; gap: 8px; margin-bottom: 1rem; }
.field label { font-size: 0.95rem; font-weight: 700; color: #333; }
.field input { padding: 1rem; border: 2px solid #ccc; border-radius: 10px; font-size: 1.25rem; font-weight: bold; outline: none; }
.field input:focus { border-color: #2d5a27; }

.quick-amounts { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 1rem; }
.quick-btn { height: 48px; border-radius: 8px; border: 2px solid #2d5a27; background: white; color: #2d5a27; font-size: 1rem; font-weight: bold; cursor: pointer; }
.quick-btn:hover { background: #e8f5e9; }

.change-row { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #e8f5e9; border-radius: 10px; color: #2d5a27; font-size: 1.1rem; }
.change-row.negative { background: #ffebee; color: #c62828; }
.change-row strong { font-size: 1.5rem; }

.qris-info { margin-bottom: 1rem; }
.qris-box { background: #f9f9f9; border: 2px dashed #ccc; border-radius: 12px; padding: 2.5rem; text-align: center; color: #555; font-size: 1.1rem; font-weight: bold; }

.pay-actions { display: flex; gap: 1rem; margin-top: 2rem; }
.btn-primary { flex: 1; min-height: 56px; background: #2d5a27; color: white; border: none; border-radius: 10px; font-weight: bold; font-size: 1.1rem; cursor: pointer; }
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-secondary { flex: 1; min-height: 56px; background: #f0f0f0; color: #333; border: none; border-radius: 10px; font-weight: bold; font-size: 1.1rem; cursor: pointer; }

/* Receipt Display & Thermal Print emulation */
.printable-receipt { background: white; padding: 10px; color: #000; font-family: 'Courier New', Courier, monospace; font-size: 14px; line-height: 1.4; width: 100%; margin: 0 auto; letter-spacing: -0.5px; }
.receipt-header { text-align: center; margin-bottom: 10px; }
.receipt-header h2 { margin: 0 0 4px; font-size: 20px; text-transform: uppercase; color: #000; }
.receipt-header p { margin: 2px 0; font-size: 13px; color: #333; }
.receipt-divider { border-bottom: 2px dashed #000; margin: 12px 0; }

.receipt-items { display: flex; flex-direction: column; gap: 8px; }
.receipt-item-row { display: flex; flex-direction: column; width: 100%; }
.item-name-row { font-weight: bold; margin-bottom: 2px; }
.item-detail-row { display: flex; justify-content: space-between; font-size: 13px; margin-left: 8px; }

.receipt-summary { margin-top: 5px; }
.summary-row { display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 14px; }
.summary-details { margin-top: 8px; border-top: 1px dotted #888; padding-top: 8px; }

.receipt-footer { text-align: center; margin-top: 15px; font-size: 13px; font-weight: bold; }
.receipt-footer p { margin: 4px 0; }

.receipt-actions { display: flex; gap: 10px; margin-top: 1.5rem; }
.btn-print { min-height: 56px; font-size: 1.1rem; }

/* Print Styles - True Thermal Format */
@media print {
  @page { margin: 0; size: 58mm auto; }
  body * { visibility: hidden; }
  .receipt-modal { box-shadow: none; padding: 0; margin: 0; border-radius: 0; position: absolute; left: 0; top: 0; width: 58mm; max-width: 58mm; overflow: hidden; background: white; }
  .printable-receipt, .printable-receipt * { visibility: visible; }
  .printable-receipt { width: 53mm; max-width: 53mm; padding: 2mm; margin: 0; font-size: 11px; }
  
  .receipt-header h2 { font-size: 15px; }
  .receipt-header p { font-size: 10px; }
  .item-detail-row { font-size: 10px; }
  .summary-row { font-size: 11px; margin-bottom: 2px; }
  .receipt-footer { font-size: 11px; margin-top: 10px; }
  .receipt-divider { margin: 6px 0; border-bottom: 1px dashed #000; }
  
.receipt-actions { display: none !important; }
}

/* ─── Mobile Bottom Sheet & FAB (max-width: < 768px) ─── */
@media (max-width: 768px) {
  .pos-root { flex-direction: column; width: 100vw; height: calc(100vh - 60px); margin: 0; }
  .pos-root.is-mobile .catalog-panel { flex: 1; border-right: none; padding: 1rem 0.5rem; padding-bottom: 90px; }
  .product-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); }
  
  /* FAB Cart Button */
  .fab-cart { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 360px; height: 64px; background: #1565c0; color: white; border: none; border-radius: 32px; font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 12px; box-shadow: 0 8px 25px rgba(21,101,192,0.4); z-index: 900; }
  .fab-badge { background: #fa5252; color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 900; }

  /* Bottom Sheet Overlay */
  .bottom-sheet-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 998; backdrop-filter: blur(2px); }
  
  /* Cart Drawer applied to right-panel */
  .cart-panel.bottom-sheet { position: fixed; bottom: 0; left: 0; width: 100%; height: 85vh; transform: translateY(100%); transition: transform 0.3s cubic-bezier(0.3, 1.05, 0.4, 1); z-index: 1000; border-radius: 24px 24px 0 0; box-shadow: 0 -10px 30px rgba(0,0,0,0.2); }
  .cart-wrapper.bottom-sheet-active .cart-panel.bottom-sheet { transform: translateY(0); }
  
  .sheet-drag-handle { display: flex; flex-direction: column; align-items: center; width: 100%; cursor: pointer; }
  .drag-bar { width: 40px; height: 6px; background: #dee2e6; border-radius: 3px; margin-bottom: 8px; }
  .cart-header h2 { font-size: 1.2rem; }

  .cart-body { padding: 0 1rem; }
  .method-btns { grid-template-columns: 1fr; }
  .quick-amounts { grid-template-columns: repeat(2, 1fr); }
  
  /* Payment Modal di HP kembali jadi tumpuk 1 kolom */
  .pm-grid { grid-template-columns: 1fr; gap: 0; }
  .payment-modal, .receipt-modal { width: 100%; max-width: 100vw; border-radius: 20px 20px 0 0; position: fixed; bottom: 0; left: 0; margin: 0; max-height: 90vh; overflow-y: auto; padding: 1.5rem; }
  .modal-overlay { align-items: flex-end; }
}

/* Hide FAB on Desktop just in case */
@media (min-width: 769px) {
  .fab-cart { display: none; }
}
</style>
