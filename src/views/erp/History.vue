<template>
  <div class="history-page">
    <div class="page-header">
      <div>
        <h1>Riwayat Transaksi</h1>
        <p>Lihat riwayat pesanan, cetak ulang struk, dan batalkan pesanan.</p>
      </div>
      <button @click="loadOrders" class="btn-secondary">🔄 Refresh</button>
    </div>

    <div v-if="loading" class="state-msg">Memuat riwayat...</div>
    <div v-else-if="orders.length === 0" class="state-msg">Belum ada transaksi di outlet ini.</div>
    <div v-else class="orders-list">
      <div v-for="order in orders" :key="order.id" class="order-card" :class="{ voided: order.status === 'voided' }">
        <div class="order-header">
          <div>
            <span class="order-id">#{{ order.id.slice(-6).toUpperCase() }}</span>
            <span class="order-time">{{ formatDate(order.created_at) }}</span>
          </div>
          <span class="status-badge" :class="order.status">{{ order.status === 'voided' ? 'Dibatalkan' : 'Selesai' }}</span>
        </div>
        
        <div class="order-body">
          <div class="summary">
            <p>{{ order.items.length }} Item (Rp {{ fmt(order.total) }})</p>
            <p class="method">Metode: {{ order.payment_method === 'cash' ? 'Tunai' : 'QRIS' }}</p>
          </div>
          
          <div class="actions">
            <button @click="showReceipt(order)" class="btn-icon view">📜 Lihat Struk</button>
            <button 
              v-if="order.status !== 'voided' && canVoid(order.created_at)" 
              @click="handleVoid(order)" 
              class="btn-icon del"
            >
              🚫 Void
            </button>
          </div>
        </div>
        
        <div v-if="order.status === 'voided'" class="void-reason">
          Dibatalkan pada {{ order.voided_at ? formatDate(order.voided_at) : '-' }}
        </div>
      </div>
    </div>

    <!-- Modals Struk -->
    <div v-if="selectedOrder" class="modal-overlay" @click.self="selectedOrder = null">
      <div class="receipt-modal">
        <div class="receipt-top">
          <span class="receipt-icon">✅</span>
          <h2 v-if="selectedOrder.status !== 'voided'">Transaksi Selesai</h2>
          <h2 v-else style="color:red">Transaksi Dibatalkan</h2>
          <p class="receipt-id">Order #{{ selectedOrder.id.slice(-6).toUpperCase() }}</p>
          <p class="receipt-time">{{ formatDate(selectedOrder.created_at) }}</p>
        </div>

        <div class="receipt-items">
          <div v-for="item in selectedOrder.items" :key="item.product_id" class="receipt-row">
            <span>{{ item.name }} x{{ item.qty }}</span>
            <span>Rp {{ fmt(item.subtotal) }}</span>
          </div>
        </div>

        <div class="receipt-divider"></div>

        <div class="receipt-total">
          <span>Total</span>
          <strong>Rp {{ fmt(selectedOrder.total) }}</strong>
        </div>
        
        <div v-if="selectedOrder.payment_method === 'cash'" class="receipt-cash">
          <div class="receipt-row"><span>Dibayar</span><span>Rp {{ fmt(selectedOrder.cash_received) }}</span></div>
          <div class="receipt-row"><span>Kembalian</span><span>Rp {{ fmt(selectedOrder.change) }}</span></div>
        </div>
        <div v-else class="receipt-row"><span>Metode</span><span>QRIS</span></div>

        <button @click="printReceipt" class="btn-primary" style="width:100%; margin-top:1.5rem;">
          🖨️ Cetak Struk
        </button>
        <button @click="selectedOrder = null" class="btn-secondary" style="width:100%; margin-top:0.5rem;">
          Tutup
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getOrdersByOutlet, voidOrder } from '../../services/posService';

const orders = ref([]);
const loading = ref(true);
const outletId = ref('');
const selectedOrder = ref(null);

const fmt = (n) => Number(n || 0).toLocaleString('id-ID');

const formatDate = (timestamp) => {
  if (!timestamp) return '-';
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  }).format(date);
};

// Void is allowed if within 15 mins
const canVoid = (timestamp) => {
  if (!timestamp) return false;
  const target = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const now = new Date();
  const diffMs = now - target;
  const diffMins = Math.floor(diffMs / 60000);
  return diffMins <= 15;
};

const loadOrders = async () => {
  loading.value = true;
  try {
    const user = auth.currentUser;
    if (!user) return;
    
    const snap = await getDoc(doc(db, 'users', user.uid));
    const userData = snap.data() || {};
    let oid = userData.outlet_id || localStorage.getItem('active_outlet_id');
    if (oid === 'undefined') oid = null;
    
    if (oid) {
      outletId.value = oid;
      orders.value = await getOrdersByOutlet(oid);
    }
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const handleVoid = async (order) => {
  if (!confirm(`Batalkan transaksi #${order.id.slice(-6).toUpperCase()}? Aksi ini tidak bisa dikembalikan.`)) return;
  
  try {
    loading.value = true;
    await voidOrder(order.id, order.items);
    await loadOrders();
    alert('Transaksi berhasil dibatalkan.');
  } catch (err) {
    alert('Gagal membatalkan transaksi: ' + err.message);
  } finally {
    loading.value = false;
  }
};

const showReceipt = (order) => {
  selectedOrder.value = order;
};

const printReceipt = () => {
  window.print();
};

onMounted(loadOrders);
</script>

<style scoped>
.history-page {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  display: flex; justify-content: space-between; align-items: flex-start;
  margin-bottom: 2rem;
}
.page-header h1 { margin: 0; color: #2d5a27; }
.page-header p { margin: 4px 0 0; color: #666; font-size: 0.95rem; }

.btn-secondary {
  background: white; border: 2px solid #ddd; padding: 0.6rem 1.2rem;
  border-radius: 8px; font-weight: bold; cursor: pointer; color: #555;
  transition: 0.2s;
}
.btn-secondary:hover { border-color: #2d5a27; color: #2d5a27; }

.btn-primary {
  background: #2d5a27; color: white; padding: 0.8rem 1.2rem; border: none;
  border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s;
}
.btn-primary:hover { background: #1e3d1a; }

.state-msg { padding: 3rem; text-align: center; color: #888; }

.orders-list { display: flex; flex-direction: column; gap: 1rem; }

.order-card {
  background: white; border: 1px solid #eee; border-radius: 12px;
  padding: 1.25rem; box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  display: flex; flex-direction: column; gap: 0.75rem;
  transition: 0.2s;
}
.order-card:hover { border-color: #2d5a27; }
.order-card.voided { opacity: 0.8; background: #fafafa; border-color: #fce4ec; }

.order-header {
  display: flex; justify-content: space-between; align-items: center;
  border-bottom: 1px dashed #eee; padding-bottom: 0.75rem;
}
.order-id { font-weight: 800; font-size: 1.1rem; color: #333; margin-right: 8px; }
.order-time { font-size: 0.85rem; color: #888; }

.status-badge {
  padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 700;
}
.status-badge.completed { background: #e8f5e9; color: #2e7d32; }
.status-badge.voided { background: #fce4ec; color: #c62828; }

.order-body { display: flex; justify-content: space-between; align-items: center; }
.summary p { margin: 0 0 4px; font-weight: 600; color: #444; }
.summary .method { font-size: 0.85rem; color: #777; font-weight: normal; }

.actions { display: flex; gap: 8px; }
.btn-icon {
  background: none; border: none; padding: 6px 12px; border-radius: 6px;
  font-size: 0.85rem; font-weight: bold; cursor: pointer; transition: 0.15s;
}
.btn-icon.view { background: #e3f2fd; color: #1565c0; }
.btn-icon.view:hover { background: #bbdefb; }
.btn-icon.del { background: #fce4ec; color: #c62828; }
.btn-icon.del:hover { background: #f8bbd0; }

.void-reason {
  background: #fff3e0; color: #e65100; font-size: 0.8rem; padding: 8px 12px;
  border-radius: 6px; margin-top: 0.5rem; font-weight: 600;
}

/* Modals Struk */
.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center; z-index: 1000;
}
.receipt-modal {
  background: white; border-radius: 16px; padding: 2rem; width: 380px;
  max-width: 95vw; box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}
.receipt-top { text-align: center; margin-bottom: 1.5rem; }
.receipt-icon { font-size: 3rem; display: block; margin-bottom: 0.5rem; }
.receipt-top h2 { margin: 0 0 4px; color: #2d5a27; }
.receipt-id { margin: 0; color: #888; font-size: 0.85rem; }
.receipt-time { margin: 0; color: #aaa; font-size: 0.8rem; }
.receipt-items { display: flex; flex-direction: column; gap: 6px; margin-bottom: 1rem; }
.receipt-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: #555; }
.receipt-divider { border: none; border-top: 2px dashed #eee; margin: 0.75rem 0; }
.receipt-total { display: flex; justify-content: space-between; font-size: 1.1rem; margin-bottom: 0.5rem; }
.receipt-total strong { color: #2d5a27; font-size: 1.2rem; }
.receipt-cash { display: flex; flex-direction: column; gap: 4px; }

@media print {
  body * { visibility: hidden; }
  .receipt-modal, .receipt-modal * { visibility: visible; }
  .receipt-modal { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none; padding: 0; }
  .btn-primary, .btn-secondary { display: none !important; }
}
</style>
