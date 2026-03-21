<template>
  <div class="reports-page">
    <div class="page-header">
      <div>
        <h1>Laporan & Analitik</h1>
        <p>Pantau performa penjualan dan ringkasan aset inventaris outlet Anda.</p>
      </div>
    </div>

    <!-- TABS -->
    <div class="report-tabs">
      <button :class="['tab-btn', { active: activeTab === 'sales' }]" @click="activeTab = 'sales'">💰 Laba / Rugi (P&L)</button>
      <button :class="['tab-btn', { active: activeTab === 'stock' }]" @click="activeTab = 'stock'">📦 Nilai Aset Stok</button>
    </div>

    <div v-if="loading" class="state-msg">Memuat data laporan...</div>

    <!-- ─── LAPORAN PENJUALAN ─── -->
    <template v-else-if="activeView === 'sales'">
      <div class="filters-row">
        <div class="filter-group" v-if="userRole === 'owner' || userRole === 'superadmin'">
          <label>Pilih Cabang:</label>
          <select v-model="reportOutletId" @change="fetchReportData" class="filter-select">
            <option value="all">Semua Cabang (Laporan Gabungan)</option>
            <option v-for="o in ownerOutlets" :key="o.id" :value="o.id">{{ o.name }}</option>
          </select>
        </div>

        <div class="filter-group">
          <label>Rentang Waktu:</label>
          <select v-model="timeRange" @change="applySalesFilter" class="filter-select">
            <option value="today">Hari Ini</option>
            <option value="week">7 Hari Terakhir</option>
            <option value="month">Bulan Ini</option>
            <option value="all">Semua Waktu</option>
          </select>
        </div>
      </div>

      <div class="summary-cards" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
        <div class="card" style="background: linear-gradient(135deg, #1565c0, #0d47a1);">
          <span>Pendapatan POS (Omset)</span>
          <strong>Rp {{ fmt(salesSummary.revenue) }}</strong>
        </div>
        <div class="card" style="background: linear-gradient(135deg, #d32f2f, #b71c1c);">
          <span>Total Pengeluaran Kas</span>
          <strong>- Rp {{ fmt(salesSummary.totalExpense) }}</strong>
        </div>
        <div class="card bg-secondary">
          <span>Laba Bersih (Net Profit)</span>
          <strong>Rp {{ fmt(salesSummary.netProfit) }}</strong>
        </div>
        <div class="card bg-light">
          <span>Total Penjualan</span>
          <strong>{{ salesSummary.txCount }} Transaksi</strong>
        </div>
      </div>

      <div class="report-grid">
        <div class="report-box">
          <h3>Metode Pembayaran</h3>
          <table class="simple-table">
            <tbody>
              <tr>
                <td>💵 Tunai (Cash)</td>
                <td class="text-right"><strong>Rp {{ fmt(salesSummary.methodCash) }}</strong></td>
              </tr>
              <tr>
                <td>📱 QRIS</td>
                <td class="text-right"><strong>Rp {{ fmt(salesSummary.methodQris) }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="report-box main-box">
          <h3>Top Produk Terlaris</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>Nama Produk</th>
                <th class="text-center">Terjual</th>
                <th class="text-right">Total (Rp)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in salesSummary.topProducts" :key="item.name">
                <td>{{ item.name }}</td>
                <td class="text-center">{{ item.qty }}</td>
                <td class="text-right">Rp {{ fmt(item.revenue) }}</td>
              </tr>
              <tr v-if="salesSummary.topProducts.length === 0">
                <td colspan="3" class="text-center text-muted">Belum ada data penjualan.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>

    <!-- ─── LAPORAN ASET STOK ─── -->
    <template v-else-if="activeView === 'stock'">
      <div class="summary-cards single">
        <div class="card bg-primary">
          <span>Total Nilai Aset Bahan Baku</span>
          <strong>Rp {{ fmt(stockSummary.totalAssetValue) }}</strong>
          <small class="muted-text">Berdasarkan HPP (Harga Modal) dikalikan sisa stok.</small>
        </div>
      </div>

      <div class="report-box full-width">
        <h3>Rincian Aset Bahan Baku</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>Bahan Baku</th>
              <th>Kategori</th>
              <th class="text-right">HPP / Unit</th>
              <th class="text-right">Sisa Stok</th>
              <th class="text-right">Total Nilai (Rp)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ing in ingredients" :key="ing.id" :class="{'low-stock': ing.stock <= 0}">
              <td>{{ ing.name }}</td>
              <td>{{ ing.category || '-' }}</td>
              <td class="text-right">Rp {{ fmt(ing.costPerUnit) }}</td>
              <td class="text-right"><strong>{{ ing.stock }}</strong> {{ ing.unit }}</td>
              <td class="text-right name-cell">Rp {{ fmt(ing.stock * ing.costPerUnit) }}</td>
            </tr>
            <tr v-if="ingredients.length === 0">
              <td colspan="5" class="text-center text-muted">Belum ada bahan baku terdaftar.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { auth, db } from '../../firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { getOrdersByOutlet, getIngredientsByOutlet } from '../../services/posService';

const loading = ref(true);
const activeTab = ref('sales');
const activeView = computed(() => activeTab.value);

const outletId = ref(''); // active context
const userRole = ref('');
const reportOutletId = ref('all');
const ownerOutlets = ref([]);

const allOrders = ref([]);
const filteredOrders = ref([]);
const allExpenses = ref([]);
const filteredExpenses = ref([]);
const ingredients = ref([]);
const timeRange = ref('today');

const fmt = (n) => Number(n || 0).toLocaleString('id-ID');

// --- SALES CALCULATION ---
const applySalesFilter = () => {
  const now = new Date();
  let startTime = 0;

  if (timeRange.value === 'today') {
    now.setHours(0,0,0,0);
    startTime = now.getTime();
  } else if (timeRange.value === 'week') {
    now.setHours(0,0,0,0);
    now.setDate(now.getDate() - 7);
    startTime = now.getTime();
  } else if (timeRange.value === 'month') {
    now.setDate(1);
    now.setHours(0,0,0,0);
    startTime = now.getTime();
  }

  filteredOrders.value = allOrders.value.filter(o => {
    // Abaikan yang voided
    if (o.status === 'voided') return false;
    if (timeRange.value === 'all') return true;
    
    const ts = o.created_at?.toMillis ? o.created_at.toMillis() : 0;
    return ts >= startTime;
  });

  filteredExpenses.value = allExpenses.value.filter(e => {
    if (timeRange.value === 'all') return true;
    // Format date is YYYY-MM-DD
    const ts = new Date(e.date).getTime();
    return ts >= startTime;
  });
};

const salesSummary = computed(() => {
  const sum = {
    revenue: 0,
    grossRevenue: 0,
    totalDiscount: 0,
    txCount: 0,
    itemsSold: 0,
    methodCash: 0,
    methodQris: 0,
    totalExpense: 0,
    netProfit: 0,
    topProducts: []
  };

  const productMap = {};

  filteredOrders.value.forEach(o => {
    sum.revenue += o.total || 0;
    sum.grossRevenue += o.subtotal || o.total || 0;
    sum.totalDiscount += o.discount_amount || 0;
    sum.txCount++;
    
    if (o.payment_method === 'cash') sum.methodCash += o.total || 0;
    else sum.methodQris += o.total || 0;

    (o.items || []).forEach(item => {
      sum.itemsSold += item.qty;
      if (!productMap[item.name]) {
        productMap[item.name] = { name: item.name, qty: 0, revenue: 0 };
      }
      productMap[item.name].qty += item.qty;
      productMap[item.name].revenue += item.subtotal;
    });
  });

  filteredExpenses.value.forEach(e => {
    sum.totalExpense += (e.amount || 0);
  });

  sum.netProfit = sum.revenue - sum.totalExpense;

  // Convert map to sorted array
  sum.topProducts = Object.values(productMap).sort((a,b) => b.qty - a.qty).slice(0, 10);

  return sum;
});

// --- STOCK CALCULATION ---
const stockSummary = computed(() => {
  const sum = { totalAssetValue: 0 };
  ingredients.value.forEach(ing => {
    // Jangan hitung stok minus sebagai aset kurang
    const validStock = ing.stock > 0 ? ing.stock : 0; 
    sum.totalAssetValue += (validStock * ing.costPerUnit);
  });
  return sum;
});


const fetchReportData = async () => {
  loading.value = true;
  try {
    let targetIds = [];
    if (reportOutletId.value === 'all') {
      targetIds = ownerOutlets.value.map(o => o.id);
    } else if (reportOutletId.value) {
      targetIds = [reportOutletId.value];
    } else if (outletId.value) {
      targetIds = [outletId.value]; // fallback for staff
    }

    if (targetIds.length === 0) {
      allOrders.value = [];
      allExpenses.value = [];
      ingredients.value = [];
      applySalesFilter();
      return;
    }

    // Fetch expenses with batching for 'in' limits
    let allExpDocs = [];
    for (let i = 0; i < targetIds.length; i += 30) {
      const chunk = targetIds.slice(i, i + 30);
      const qExp = query(collection(db, 'expenses'), where('outlet_id', 'in', chunk));
      const expSnap = await getDocs(qExp);
      allExpDocs.push(...expSnap.docs);
    }
    allExpenses.value = allExpDocs.map(d => ({ id: d.id, ...d.data() }));

    const [ordrs, ings] = await Promise.all([
      getOrdersByOutlet(targetIds),
      getIngredientsByOutlet(targetIds)
    ]);
    
    allOrders.value = ordrs;
    ingredients.value = ings;
    
    applySalesFilter(); 
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const loadData = async () => {
  loading.value = true;
  try {
    const user = auth.currentUser;
    if (!user) return;
    const snap = await getDoc(doc(db, 'users', user.uid));
    const userData = snap.data() || {};
    userRole.value = userData.role || '';
    
    let oid = userData.outlet_id || localStorage.getItem('active_outlet_id');
    if (oid === 'undefined') oid = null;
    outletId.value = oid || '';
    
    // Fetch user's outlets securely
    if (userRole.value === 'owner' || userRole.value === 'superadmin') {
      const qOut = userRole.value === 'owner' 
        ? query(collection(db, 'outlets'), where('owner_id', '==', user.uid))
        : collection(db, 'outlets');
      const snapOut = await getDocs(qOut);
      ownerOutlets.value = snapOut.docs.map(d => ({id: d.id, ...d.data()}));
      
      // Default to "all" for owners
      if (ownerOutlets.value.length > 0) {
        reportOutletId.value = 'all'; 
      }
    } else {
      // Staff falls back to their single assigned outlet
      reportOutletId.value = outletId.value;
    }

    await fetchReportData();
  } catch (err) {
    console.error(err);
    loading.value = false;
  }
};

onMounted(loadData);
</script>

<style scoped>
.reports-page { max-width: 1100px; margin: 0 auto; }
.page-header { margin-bottom: 2rem; }
.page-header h1 { margin: 0; color: #1565c0; }
.page-header p { margin: 4px 0 0; color: #666; }

.state-msg { text-align: center; color: #aaa; padding: 4rem; font-size: 1rem; }

/* Tabs */
.report-tabs { display: flex; gap: 8px; margin-bottom: 1.5rem; border-bottom: 2px solid #eee; padding-bottom: 8px; }
.tab-btn { background: none; border: none; font-size: 1rem; font-weight: bold; color: #888; padding: 0.6rem 1.25rem; cursor: pointer; border-radius: 8px; transition: 0.2s; }
.tab-btn:hover { background: #f0f0f0; }
.tab-btn.active { background: #e3f2fd; color: #1565c0; }

.filters-row { display: flex; align-items: center; gap: 10px; margin-bottom: 1.5rem; background: white; padding: 1rem; border-radius: 10px; border: 1px solid #eee; }
.filters-row label { font-size: 0.9rem; font-weight: 600; color: #555; }
.filter-select { padding: 8px 12px; border: 1px solid #ddd; border-radius: 6px; outline: none; font-weight: bold; color: #333; }
.filter-select:focus { border-color: #1565c0; }

/* Cards */
.summary-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 1.5rem; }
.summary-cards.single { grid-template-columns: 1fr; max-width: 500px; }
.card { padding: 1.5rem; border-radius: 12px; display: flex; flex-direction: column; gap: 6px; color: white; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.card span { font-size: 0.85rem; text-transform: uppercase; font-weight: bold; opacity: 0.9; }
.card strong { font-size: 1.8rem; }
.bg-primary { background: linear-gradient(135deg, #1e88e5, #1565c0); }
.bg-secondary { background: linear-gradient(135deg, #43a047, #2e7d32); }
.bg-light { background: white; color: #333; border: 1px solid #eee; }
.bg-light span { color: #888; }
.muted-text { font-size: 0.8rem; opacity: 0.8; margin-top: 4px; }

/* Grids / Boxes */
.report-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 1.5rem; align-items: flex-start; }
@media (max-width: 768px) {
  .report-grid { grid-template-columns: 1fr; }
}

.report-box { background: white; border-radius: 12px; border: 1px solid #eee; padding: 1.5rem; box-shadow: 0 4px 12px rgba(0,0,0,0.02); }
.report-box h3 { margin: 0 0 1rem; color: #333; font-size: 1.1rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem; }

.simple-table { width: 100%; border-collapse: collapse; }
.simple-table td { padding: 1rem 0; border-bottom: 1px dashed #eee; font-size: 1.05rem; }
.simple-table td:last-child { color: #1565c0; }

.data-table { width: 100%; border-collapse: collapse; }
.data-table th, .data-table td { padding: 0.8rem 1rem; border-bottom: 1px solid #eee; text-align: left; }
.data-table th { background: #fafbfc; color: #666; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; }
.data-table tr:hover { background: #f8fbff; }
.data-table tr.low-stock { background: #fff5f5; color: #c62828; }

.text-right { text-align: right !important; }
.text-center { text-align: center !important; }
.text-muted { color: #aaa; }
.name-cell { font-weight: bold; }

@media (max-width: 500px) {
  .filters-row { flex-direction: column; align-items: stretch; }
  .report-tabs { flex-wrap: wrap; }
  .tab-btn { flex: 1; text-align: center; font-size: 0.9rem; padding: 0.5rem; }
}
</style>
