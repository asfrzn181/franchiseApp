<template>
  <div class="inventory-page">
    <div class="page-header">
      <div>
        <h1>Dashboard Inventaris</h1>
        <p>Pantau sisa stok bahan baku, lakukan penambahan stok (Stock In), dan lihat riwayat pergerakan stok.</p>
      </div>
    </div>

    <div class="summary-cards">
      <div class="card total">
        <span class="icon">📦</span>
        <div class="info">
          <span>Total Item</span>
          <strong>{{ ingredients.length }}</strong>
        </div>
      </div>
      <div class="card warning">
        <span class="icon">⚠️</span>
        <div class="info">
          <span>Stok Menipis (≤ 10)</span>
          <strong>{{ lowStockCount }}</strong>
        </div>
      </div>
      <div class="card danger">
        <span class="icon">🔴</span>
        <div class="info">
          <span>Stok Habis</span>
          <strong>{{ emptyStockCount }}</strong>
        </div>
      </div>
    </div>

    <!-- View Tabs -->
    <div class="view-tabs">
      <button :class="['tab-btn', { active: activeView === 'stock' }]" @click="activeView = 'stock'">📦 Stok Saat Ini</button>
      <button :class="['tab-btn', { active: activeView === 'history' }]" @click="activeView = 'history'">⏱️ Riwayat Mutasi</button>
    </div>

    <div v-if="loading" class="state-msg">Memuat data inventaris...</div>
    
    <!-- STOK SAAT INI -->
    <template v-else-if="activeView === 'stock'">
      <div v-if="ingredients.length === 0" class="state-msg">
        Belum ada bahan baku. Tambahkan di menu Master Bahan Baku.
      </div>
      <div v-else class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Bahan Baku</th>
            <th>Kategori</th>
            <th class="text-right">HPP</th>
            <th class="text-right">Stok Tersedia</th>
            <th class="text-center">Status</th>
            <th class="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ing in sortedIngredients" :key="ing.id" :class="getRowClass(ing.stock)">
            <td class="name-cell">
              {{ ing.name }}
              <small class="unit-sub"> per {{ ing.unit }}</small>
            </td>
            <td><span class="cat-tag">{{ ing.category || '-' }}</span></td>
            <td class="text-right">Rp {{ fmt(ing.costPerUnit) }}</td>
            <td class="text-right stock-val">
              <strong>{{ fmt(ing.stock) }}</strong> <span class="unit">{{ ing.unit }}</span>
            </td>
            <td class="text-center">
              <span class="status-badge" :class="getStatusClass(ing.stock)">
                {{ getStatusText(ing.stock) }}
              </span>
            </td>
            <td class="text-center">
              <button @click="openMutationModal(ing)" class="btn-restock">
                📝 Mutasi Stok
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </template>

    <!-- RIWAYAT MUTASI -->
    <template v-else-if="activeView === 'history'">
      <div v-if="movements.length === 0" class="state-msg">Belum ada riwayat mutasi stok.</div>
      <div v-else class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Waktu</th>
              <th>Bahan Baku</th>
              <th>Tipe Mutasi</th>
              <th class="text-right">Perubahan Qty</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in movements" :key="m.id">
              <td>{{ formatDate(m.created_at) }}</td>
              <td><strong>{{ getIngredientName(m.ingredient_id) }}</strong></td>
              <td>
                <span class="type-badge" :class="m.type">{{ formatType(m.type) }}</span>
              </td>
              <td class="text-right">
                <strong :class="m.qty_change > 0 ? 'text-success' : 'text-danger'">
                  {{ m.qty_change > 0 ? '+' : '' }}{{ m.qty_change }}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <!-- Modal Mutasi -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-card">
        <h2>Mutasi Stok</h2>
        <p class="modal-desc">
          Sesuaikan stok untuk <strong>{{ selectedIngredient?.name }}</strong>.
        </p>

        <form @submit.prevent="handleMutation">
          <div class="field">
            <label>Jenis Mutasi *</label>
            <select v-model="mutationType" class="mutation-select">
              <option value="stock_in">📥 Stock In (Stok Masuk / Pembelian)</option>
              <option value="stock_out">📤 Stock Out (Keluar / Rusak / Expired)</option>
              <option value="adjustment">⚖️ Adjustment (Penyesuaian Opname Fisik)</option>
            </select>
          </div>

          <div class="stock-info">
            <div class="current">
              <span>Stok Saat Ini:</span>
              <strong>{{ selectedIngredient?.stock }} {{ selectedIngredient?.unit }}</strong>
            </div>
            <div class="arrow">➡️</div>
            <div class="new">
              <span>Stok Menjadi:</span>
              <strong :class="getNewStockColor()">
                {{ computedNewStock }} {{ selectedIngredient?.unit }}
              </strong>
            </div>
          </div>

          <div class="field" v-if="mutationType === 'stock_in'">
            <label>Jumlah Masuk ({{ selectedIngredient?.unit }}) *</label>
            <input v-model.number="mutationAmount" type="number" min="1" placeholder="Contoh: 500" required ref="amountInput" />
          </div>

          <div class="field" v-if="mutationType === 'stock_out'">
            <label>Jumlah Keluar ({{ selectedIngredient?.unit }}) *</label>
            <input v-model.number="mutationAmount" type="number" min="1" :max="selectedIngredient?.stock" placeholder="Contoh: 10" required ref="amountInput" />
            <small class="muted-text">Maksimal stok yang bisa dikeluarkan adalah {{ selectedIngredient?.stock }}</small>
          </div>

          <div class="field" v-if="mutationType === 'adjustment'">
            <label>Jumlah Fisik Sebenarnya ({{ selectedIngredient?.unit }}) *</label>
            <input v-model.number="actualStock" type="number" min="0" placeholder="Contoh: 450" required ref="amountInput" />
            <small class="muted-text">Masukkan jumlah persis sesuai hitungan fisik (Stock Opname).</small>
          </div>

          <div class="modal-actions">
            <button type="button" @click="closeModal" class="btn-secondary">Batal</button>
            <button type="submit" :disabled="isSaving || !isValidMutation" class="btn-primary">
              {{ isSaving ? 'Menyimpan...' : 'Simpan Mutasi' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getIngredientsByOutlet, updateIngredientStock, getStockMovementsByOutlet } from '../../services/posService';

const loading = ref(true);
const isSaving = ref(false);
const ingredients = ref([]);
const movements = ref([]);
const outletId = ref('');

const activeView = ref('stock'); // 'stock' or 'history'

const showModal = ref(false);
const selectedIngredient = ref(null);
const mutationType = ref('stock_in');
const mutationAmount = ref('');
const actualStock = ref('');
const amountInput = ref(null);

const fmt = (n) => Number(n || 0).toLocaleString('id-ID');

// Derived state
const lowStockCount = computed(() => ingredients.value.filter(i => i.stock > 0 && i.stock <= 10).length);
const emptyStockCount = computed(() => ingredients.value.filter(i => i.stock <= 0).length);

const sortedIngredients = computed(() => {
  return [...ingredients.value].sort((a, b) => a.stock - b.stock);
});

const computedNewStock = computed(() => {
  if (!selectedIngredient.value) return 0;
  const current = selectedIngredient.value.stock;
  if (mutationType.value === 'stock_in') return current + (mutationAmount.value || 0);
  if (mutationType.value === 'stock_out') return current - (mutationAmount.value || 0);
  if (mutationType.value === 'adjustment') return actualStock.value || 0;
  return current;
});

const isValidMutation = computed(() => {
  if (mutationType.value === 'stock_in') return mutationAmount.value > 0;
  if (mutationType.value === 'stock_out') return mutationAmount.value > 0 && mutationAmount.value <= selectedIngredient.value?.stock;
  if (mutationType.value === 'adjustment') return actualStock.value !== '' && actualStock.value >= 0;
  return false;
});

const getNewStockColor = () => {
  const diff = computedNewStock.value - (selectedIngredient.value?.stock || 0);
  if (diff > 0) return 'text-success';
  if (diff < 0) return 'text-danger';
  return '';
};

const getRowClass = (stock) => {
  if (stock <= 0) return 'row-danger';
  if (stock <= 10) return 'row-warning';
  return '';
};

const getStatusClass = (stock) => {
  if (stock <= 0) return 'danger';
  if (stock <= 10) return 'warning';
  return 'good';
};

const getStatusText = (stock) => {
  if (stock <= 0) return 'Habis';
  if (stock <= 10) return 'Menipis';
  return 'Aman';
};

const getIngredientName = (id) => {
  return ingredients.value.find(i => i.id === id)?.name || 'Unknown Item';
};

const formatDate = (ts) => {
  if (!ts) return '-';
  const d = ts.toDate();
  return d.toLocaleDateString('id-ID', { day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
};

const formatType = (type) => {
  const map = { 
    'pos_sale': 'Kasir (Terjual)', 
    'restock': 'Stok Masuk', 
    'void': 'Void / Batal',
    'stock_in': 'Stock In (Masuk)',
    'stock_out': 'Stock Out (Keluar)',
    'adjustment': 'Adjusment (Opname)'
  };
  return map[type] || type;
};

const loadData = async () => {
  loading.value = true;
  try {
    const user = auth.currentUser;
    if (!user) return;
    const snap = await getDoc(doc(db, 'users', user.uid));
    let oid = snap.data()?.outlet_id || localStorage.getItem('active_outlet_id');
    if (oid === 'undefined') oid = null;
    
    outletId.value = oid || '';
    if (outletId.value) {
      const [ings, movs] = await Promise.all([
        getIngredientsByOutlet(outletId.value),
        getStockMovementsByOutlet(outletId.value)
      ]);
      ingredients.value = ings;
      movements.value = movs;
    }
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const openMutationModal = (ing) => {
  selectedIngredient.value = ing;
  mutationType.value = 'stock_in';
  mutationAmount.value = '';
  actualStock.value = '';
  showModal.value = true;
  nextTick(() => amountInput.value?.focus());
};

const closeModal = () => { showModal.value = false; };

const handleMutation = async () => {
  if (!isValidMutation.value) return;
  isSaving.value = true;
  try {
    let amount = 0;
    let operation = 'add';
    
    if (mutationType.value === 'stock_in') {
      amount = mutationAmount.value;
      operation = 'add';
    } else if (mutationType.value === 'stock_out') {
      amount = mutationAmount.value;
      operation = 'subtract';
    } else if (mutationType.value === 'adjustment') {
      const diff = actualStock.value - selectedIngredient.value.stock;
      amount = Math.abs(diff);
      operation = diff >= 0 ? 'add' : 'subtract';
      // If no difference, do nothing!
      if (diff === 0) {
        closeModal();
        isSaving.value = false;
        return;
      }
    }

    await updateIngredientStock(
      selectedIngredient.value.id, 
      amount, 
      operation, 
      mutationType.value, 
      outletId.value
    );
    
    closeModal();
    await loadData(); 
  } catch (err) {
    alert('Gagal melakukan mutasi stok: ' + err.message);
  } finally {
    isSaving.value = false;
  }
};

onMounted(loadData);
</script>

<style scoped>
.inventory-page { max-width: 1100px; margin: 0 auto; }
.page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; }
.page-header h1 { margin: 0; color: #f57c00; }
.page-header p { margin: 4px 0 0; color: #666; font-size: 0.95rem; }

/* Summary Cards */
.summary-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
.card { background: white; border-radius: 12px; padding: 1.5rem; display: flex; align-items: center; gap: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.03); border: 1px solid #eee; }
.card .icon { font-size: 2.5rem; }
.card .info { display: flex; flex-direction: column; }
.card .info span { font-size: 0.85rem; color: #888; text-transform: uppercase; font-weight: bold; }
.card .info strong { font-size: 1.6rem; color: #333; }
.card.warning { border-bottom: 4px solid #fbc02d; }
.card.danger { border-bottom: 4px solid #c62828; }
.card.total { border-bottom: 4px solid #1a73e8; }

.state-msg { text-align: center; color: #aaa; padding: 4rem; font-size: 1rem; }

/* Table */
.table-container { background: white; border-radius: 12px; border: 1px solid #eee; overflow-x: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
.data-table { width: 100%; border-collapse: collapse; min-width: 700px; }
.data-table th, .data-table td { padding: 1rem; border-bottom: 1px solid #eee; text-align: left; color: #444; }
.data-table th { background: #fafbfc; color: #666; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; }

.data-table tr.row-warning { background: #fffde7; }
.data-table tr.row-danger { background: #ffebee; }
.data-table tr:hover:not(.row-warning):not(.row-danger) { background: #f8fbff; }

.text-right { text-align: right !important; }
.text-center { text-align: center !important; }

.name-cell { font-weight: bold; color: #333; font-size: 1.05rem; }
.unit-sub { color: #888; font-weight: normal; font-size: 0.8rem; }
.cat-tag { background: #f5f5f5; color: #555; font-size: 0.75rem; font-weight: bold; padding: 4px 8px; border-radius: 6px; }

.stock-val strong { font-size: 1.15rem; color: #111; }
.stock-val .unit { font-size: 0.8rem; color: #888; }

.status-badge { font-size: 0.75rem; font-weight: bold; padding: 4px 10px; border-radius: 20px; }
.status-badge.good { background: #e8f5e9; color: #2e7d32; }
.status-badge.warning { background: #fff9c4; color: #f57f17; }
.status-badge.danger { background: #ffcdd2; color: #c62828; }

.btn-restock { background: #e3f2fd; color: #1565c0; border: none; padding: 6px 12px; border-radius: 6px; font-weight: bold; font-size: 0.85rem; cursor: pointer; transition: 0.2s; white-space: nowrap; }
.btn-restock:hover { background: #bbdefb; }

/* View Tabs */
.view-tabs { display: flex; gap: 8px; margin-bottom: 1.5rem; border-bottom: 2px solid #eee; padding-bottom: 8px; }
.tab-btn { background: none; border: none; font-size: 1rem; font-weight: bold; color: #888; padding: 0.5rem 1rem; cursor: pointer; border-radius: 8px; transition: 0.2s; }
.tab-btn:hover { background: #f0f0f0; }
.tab-btn.active { background: #fff3e0; color: #f57c00; }

.type-badge { font-size: 0.75rem; font-weight: bold; padding: 4px 10px; border-radius: 20px; background: #eee; }
.type-badge.pos_sale { background: #e3f2fd; color: #1565c0; }
.type-badge.restock, .type-badge.stock_in { background: #e8f5e9; color: #2e7d32; }
.type-badge.void, .type-badge.stock_out { background: #ffebee; color: #c62828; }
.type-badge.adjustment { background: #fff3e0; color: #e65100; }
.text-danger { color: #c62828 !important; }

/* Modal */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal-card { background: white; border-radius: 16px; width: 450px; max-width: 95vw; box-shadow: 0 20px 40px rgba(0,0,0,0.2); padding: 2rem; }
.modal-card h2 { margin: 0 0 0.5rem; color: #f57c00; }
.modal-desc { color: #666; font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.4; }

.stock-info { display: flex; align-items: center; justify-content: center; gap: 1rem; background: #fafbfc; padding: 1.25rem; border-radius: 10px; border: 1px dashed #ddd; margin-bottom: 1.5rem; text-align: center; }
.stock-info span { display: block; font-size: 0.75rem; color: #888; text-transform: uppercase; margin-bottom: 4px; }
.stock-info strong { font-size: 1.1rem; color: #333; }
.text-success { color: #2e7d32 !important; font-size: 1.25rem !important; }
.text-danger { color: #c62828 !important; font-size: 1.25rem !important; }
.arrow { font-size: 1.5rem; color: #ccc; }

.field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 1.25rem; }
.field label { font-size: 0.85rem; font-weight: 600; color: #555; }
.field input, .mutation-select { padding: 0.8rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1.1rem; outline: none; font-weight: bold; font-family: inherit; }
.field input { text-align: center; font-size: 1.2rem; }
.field input:focus, .mutation-select:focus { border-color: #f57c00; }

.muted-text { font-size: 0.8rem; color: #888; font-weight: 500; }

.modal-actions { display: flex; gap: 0.75rem; margin-top: 1.5rem; }
.btn-primary { flex: 1; padding: 0.8rem; background: #f57c00; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; font-size: 1rem; }
.btn-primary:hover:not(:disabled) { background: #e65100; }
.btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
.btn-secondary { flex: 1; padding: 0.8rem; background: #f0f0f0; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; color: #333; }
</style>
