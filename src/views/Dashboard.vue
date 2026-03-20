<template>
  <div class="dashboard-page">
    <div class="welcome-header">
      <div>
        <h1>Selamat Datang, {{ userName }} 👋</h1>
        <p v-if="outletName">Memantau operasional untuk <strong>{{ outletName }}</strong></p>
        <p v-else class="text-warning">Anda belum memilih atau memiliki Outlet Aktif.</p>
      </div>
      <div v-if="!outletName" class="action-btn-container">
        <router-link to="/admin/manage-outlets" class="btn-primary">Buat / Pilih Outlet</router-link>
      </div>
    </div>

    <!-- MAIN DASHBOARD CONTENT -->
    <template v-if="outletId">
      <div v-if="loading" class="state-msg">Menyiapkan ringkasan hari ini...</div>
      
      <div v-else>
        <div class="summary-cards">
          <div class="card revenue">
            <span class="icon">💰</span>
            <div class="info">
              <span>Pendapatan Hari Ini</span>
              <strong>Rp {{ fmt(todayRevenue) }}</strong>
            </div>
          </div>
          <div class="card transactions">
            <span class="icon">🧾</span>
            <div class="info">
              <span>Transaksi Hari Ini</span>
              <strong>{{ todayTxCount }}</strong>
            </div>
          </div>
          <div class="card alerts" :class="{'has-alerts': lowStockIngredients.length > 0}">
            <span class="icon">⚠️</span>
            <div class="info">
              <span>Stok Menipis</span>
              <strong>{{ lowStockIngredients.length }} Item</strong>
            </div>
          </div>
        </div>

        <div class="dashboard-grid">
          <!-- QUICK LINKS -->
          <div class="widget quick-links">
            <h3>Pintasan Cepat</h3>
            <div class="links-grid">
              <router-link to="/pos" class="q-link">
                <span class="icon">🏪</span> Buka Kasir (POS)
              </router-link>
              <router-link to="/inventory" class="q-link">
                <span class="icon">📦</span> Cek Inventaris
              </router-link>
              <router-link to="/admin/master-recipes" class="q-link">
                <span class="icon">🍵</span> Kelola Produk
              </router-link>
              <router-link to="/reports" class="q-link">
                <span class="icon">📊</span> Lihat Laporan
              </router-link>
            </div>
          </div>

          <!-- LOW STOCK WIDGET -->
          <div class="widget stock-alerts">
            <h3>Perlu Perhatian (Stok Menipis)</h3>
            <div v-if="lowStockIngredients.length === 0" class="empty-state">
              ✅ Semua stok bahan baku dalam kondisi aman.
            </div>
            <ul v-else class="alert-list">
              <li v-for="ing in lowStockIngredients" :key="ing.id" :class="{'critical': ing.stock <= 0}">
                <div class="ing-info">
                  <strong>{{ ing.name }}</strong>
                  <span>Sisa: {{ ing.stock }} {{ ing.unit }}</span>
                </div>
                <router-link to="/inventory" class="btn-restock-link">Restock</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>

    <div v-else class="onboarding-box">
      <span class="big-icon">🚀</span>
      <h2>Mulai Langkah Pertama Anda</h2>
      <p>Sistem Kasir dan Inventaris (POS & ERP) membutuhkan Setidaknya 1 Outlet (Cabang) untuk beroperasi.</p>
      <router-link to="/admin/manage-outlets" class="btn-primary mt-3">Mulai Setup Outlet</router-link>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { auth, db } from '../firebase';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { getOrdersByOutlet, getIngredientsByOutlet } from '../services/posService';

const loading = ref(true);
const userName = ref('Owner');
const outletName = ref('');
const outletId = ref('');

const orders = ref([]);
const lowStockIngredients = ref([]);

const fmt = (n) => Number(n || 0).toLocaleString('id-ID');

const todayRevenue = computed(() => {
  const now = new Date();
  now.setHours(0,0,0,0);
  const startOfDay = now.getTime();

  return orders.value.reduce((sum, o) => {
    if (o.status === 'voided') return sum;
    const ts = o.created_at?.toMillis ? o.created_at.toMillis() : 0;
    if (ts >= startOfDay) return sum + o.total;
    return sum;
  }, 0);
});

const todayTxCount = computed(() => {
  const now = new Date();
  now.setHours(0,0,0,0);
  const startOfDay = now.getTime();

  return orders.value.filter(o => {
    if (o.status === 'voided') return false;
    const ts = o.created_at?.toMillis ? o.created_at.toMillis() : 0;
    return ts >= startOfDay;
  }).length;
});

const loadDashboard = async () => {
  loading.value = true;
  try {
    const user = auth.currentUser;
    if (!user) return;
    
    const snap = await getDoc(doc(db, 'users', user.uid));
    const userData = snap.data() || {};
    
    userName.value = userData.name || user.email.split('@')[0];
    let oid = userData.outlet_id || localStorage.getItem('active_outlet_id');
    if (oid === 'undefined') oid = null;

    outletId.value = oid || '';
    
    if (outletId.value) {
      // Get Outlet Name
      const outSnap = await getDoc(doc(db, 'outlets', outletId.value));
      outletName.value = outSnap.data()?.name || 'Cabang Aktif';

      // Load Orders & Ingredients
      const [ordrs, ings] = await Promise.all([
        getOrdersByOutlet(outletId.value),
        getIngredientsByOutlet(outletId.value)
      ]);
      
      orders.value = ordrs;
      lowStockIngredients.value = ings.filter(i => i.stock <= 10).sort((a,b) => a.stock - b.stock);
    }
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(loadDashboard);
</script>

<style scoped>
.dashboard-page { max-width: 1200px; margin: 0 auto; padding-bottom: 2rem; }

.welcome-header { display: flex; justify-content: space-between; align-items: center; background: white; padding: 2rem; border-radius: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.02); border: 1px solid #eee; margin-bottom: 2rem; }
.welcome-header h1 { margin: 0 0 8px; color: #1a73e8; font-size: 1.8rem; }
.welcome-header p { margin: 0; font-size: 1rem; color: #555; }
.text-warning { color: #f57c00 !important; font-weight: 600; }

.btn-primary { display: inline-block; background: #1a73e8; color: white; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; text-decoration: none; transition: 0.2s; }
.btn-primary:hover { background: #1557b0; }
.mt-3 { margin-top: 1.5rem; }

.state-msg { text-align: center; color: #aaa; padding: 4rem; font-size: 1rem; }

/* SUMMARY CARDS */
.summary-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; }
.card { background: white; border-radius: 12px; padding: 1.5rem; display: flex; align-items: center; gap: 1.25rem; box-shadow: 0 4px 12px rgba(0,0,0,0.04); border: 1px solid #eee; border-left: 5px solid #ddd; }
.card.revenue { border-left-color: #2e7d32; }
.card.transactions { border-left-color: #1a73e8; }
.card.alerts { border-left-color: #9e9e9e; }
.card.alerts.has-alerts { border-left-color: #f57c00; }

.card .icon { font-size: 2.8rem; }
.card .info { display: flex; flex-direction: column; }
.card .info span { font-size: 0.85rem; color: #888; text-transform: uppercase; font-weight: bold; margin-bottom: 4px; }
.card .info strong { font-size: 1.8rem; color: #333; line-height: 1; }

/* WIDGET GRID */
.dashboard-grid { display: grid; grid-template-columns: 3fr 2fr; gap: 1.5rem; }
@media (max-width: 800px) { .dashboard-grid { grid-template-columns: 1fr; } }

.widget { background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.02); border: 1px solid #eee; padding: 1.5rem; }
.widget h3 { margin: 0 0 1.25rem; font-size: 1.1rem; color: #333; border-bottom: 2px solid #f5f5f5; padding-bottom: 0.75rem; }

/* QUICK LINKS */
.links-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.q-link { display: flex; align-items: center; gap: 12px; padding: 1rem; border-radius: 10px; border: 1px solid #eee; text-decoration: none; color: #333; font-weight: 600; transition: 0.2s; background: #fafbfc; }
.q-link:hover { border-color: #1a73e8; background: #f0f7ff; color: #1a73e8; transform: translateY(-2px); }
.q-link .icon { font-size: 1.5rem; }

/* STOCK ALERTS */
.empty-state { padding: 2rem 1rem; text-align: center; color: #2e7d32; font-weight: 500; background: #e8f5e9; border-radius: 8px; }
.alert-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; max-height: 300px; overflow-y: auto; }
.alert-list li { display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 1rem; border-radius: 8px; background: #fffde7; border: 1px solid #fff9c4; }
.alert-list li.critical { background: #ffebee; border-color: #ffcdd2; }
.ing-info { display: flex; flex-direction: column; gap: 4px; }
.ing-info strong { color: #333; font-size: 0.95rem; }
.ing-info span { font-size: 0.8rem; color: #555; }
.critical .ing-info strong { color: #c62828; }
.critical .ing-info span { color: #d32f2f; font-weight: bold; }
.btn-restock-link { font-size: 0.8rem; background: #f57c00; color: white; padding: 4px 10px; border-radius: 4px; text-decoration: none; font-weight: bold; }

/* ONBOARDING */
.onboarding-box { text-align: center; background: white; padding: 4rem 2rem; border-radius: 16px; border: 2px dashed #ddd; margin-top: 2rem; }
.big-icon { font-size: 4rem; display: block; margin-bottom: 1rem; }
.onboarding-box h2 { color: #333; margin: 0 0 1rem; }
.onboarding-box p { color: #666; max-width: 500px; margin: 0 auto 1.5rem; line-height: 1.5; }

@media (max-width: 500px) {
  .welcome-header { flex-direction: column; text-align: center; gap: 1rem; padding: 1.5rem; }
  .links-grid { grid-template-columns: 1fr; }
  .card { padding: 1.25rem; gap: 1rem; }
  .card .icon { font-size: 2.2rem; }
  .card .info strong { font-size: 1.5rem; }
}
</style>