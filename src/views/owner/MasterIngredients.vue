<template>
  <div class="ingredients-page">
    <div class="page-header">
      <div>
        <h1>Master Bahan Baku</h1>
        <p>Kelola daftar bahan baku pendukung resep (Gula, Susu, Kopi, Kemasan, dll).</p>
      </div>
      <button @click="openAddModal" class="btn-primary">+ Tambah Bahan</button>
    </div>

    <div v-if="loading" class="state-msg">Memuat daftar bahan baku...</div>
    <div v-else-if="ingredients.length === 0" class="state-msg">
      Belum ada bahan baku. Klik "+ Tambah Bahan" untuk memulai.
    </div>
    
    <div v-else class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Nama Bahan Baku</th>
            <th>Kategori</th>
            <th>Satuan</th>
            <th class="text-right">HPP / Satuan</th>
            <th class="text-center">Sisa Stok</th>
            <th class="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ing in ingredients" :key="ing.id" :class="{'low-stock': ing.stock <= 0}">
            <td class="name-cell">{{ ing.name }}</td>
            <td><span class="cat-tag">{{ ing.category || '-' }}</span></td>
            <td>{{ ing.unit }}</td>
            <td class="text-right">Rp {{ fmt(ing.costPerUnit) }}</td>
            <td class="text-center">
              <span class="stock-badge" :class="ing.stock > 0 ? 'good' : 'empty'">
                {{ ing.stock }} {{ ing.unit }}
              </span>
            </td>
            <td class="text-center actions-cell">
              <button @click="openEditModal(ing)" class="btn-icon edit">✏️</button>
              <button @click="handleDelete(ing)" class="btn-icon del">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Form -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-card">
        <h2>{{ editingIngredient ? 'Edit Bahan Baku' : 'Tambah Bahan Baku Baru' }}</h2>
        <form @submit.prevent="handleSave">
          <div class="field">
            <label>Nama Bahan Baku *</label>
            <input v-model="form.name" placeholder="cth: Susu Full Cream, Gula Aren" required />
          </div>
          
          <div class="field-row">
            <div class="field">
              <label>Kategori</label>
              <input v-model="form.category" placeholder="Susu / Sirup / Kemasan" list="cat-list"/>
              <datalist id="cat-list">
                <option v-for="c in uniqueCategories" :key="c" :value="c" />
              </datalist>
            </div>
            <div class="field">
              <label>Satuan (Unit) *</label>
              <select v-model="form.unit" required>
                <option value="" disabled>Pilih Satuan...</option>
                <option value="Gram">Gram (g)</option>
                <option value="Mg">Miligram (mg)</option>
                <option value="Liter">Liter (L)</option>
                <option value="Ml">Mililiter (ml)</option>
                <option value="Pcs">Pieces (Pcs)</option>
                <option value="Cup">Cup</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label>Harga Beli (HPP) per 1 {{ form.unit || 'Satuan' }} (Rp) *</label>
            <input v-model.number="form.costPerUnit" type="number" min="0" step="0.1" placeholder="cth: 15 (untuk Rp 15/Gram)" required />
            <small class="help-text">
              Contoh: Beli 1 Liter (1000ml) susu seharga Rp 18.000. Jika satuan yang Anda pilih <strong>Ml</strong>, maka HPP per ml = 18000 / 1000 = <strong>18</strong>.
            </small>
          </div>

          <div class="modal-actions">
            <button type="button" @click="closeModal" class="btn-secondary">Batal</button>
            <button type="submit" :disabled="isSaving" class="btn-primary">
              {{ isSaving ? 'Menyimpan...' : (editingIngredient ? 'Simpan Perubahan' : 'Tambah Bahan Baru') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getIngredientsByOutlet, addIngredient, updateIngredient, deleteIngredient } from '../../services/posService';

const loading = ref(true);
const isSaving = ref(false);
const ingredients = ref([]);
const outletId = ref('');

const showModal = ref(false);
const editingIngredient = ref(null);

const form = reactive({ name: '', category: '', unit: '', costPerUnit: 0 });

const fmt = (n) => Number(n || 0).toLocaleString('id-ID');

const uniqueCategories = computed(() =>
  [...new Set(ingredients.value.map(i => i.category).filter(Boolean))].sort()
);

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
      ingredients.value = await getIngredientsByOutlet(outletId.value);
    }
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const openAddModal = () => {
  editingIngredient.value = null;
  form.name = ''; form.category = ''; form.unit = ''; form.costPerUnit = 0;
  showModal.value = true;
};

const openEditModal = (ing) => {
  editingIngredient.value = ing;
  form.name = ing.name; form.category = ing.category || ''; 
  form.unit = ing.unit; form.costPerUnit = ing.costPerUnit;
  showModal.value = true;
};

const closeModal = () => { showModal.value = false; };

const handleSave = async () => {
  if (!outletId.value) return alert('Outlet belum dipilih atau tidak ditemukan!');
  isSaving.value = true;
  try {
    const payload = {
      name: form.name,
      category: form.category,
      unit: form.unit,
      costPerUnit: form.costPerUnit
    };

    if (editingIngredient.value) {
      await updateIngredient(editingIngredient.value.id, payload);
    } else {
      await addIngredient(outletId.value, payload);
    }
    
    closeModal();
    await loadData();
  } catch (err) {
    alert('Gagal menyimpan: ' + err.message);
  } finally {
    isSaving.value = false;
  }
};

const handleDelete = async (ing) => {
  if (!confirm(`Hapus bahan baku "${ing.name}"? Ini bisa merusak resep produk yang menggunakan bahan ini.`)) return;
  await deleteIngredient(ing.id);
  await loadData();
};

onMounted(loadData);
</script>

<style scoped>
.ingredients-page { max-width: 1100px; margin: 0 auto; }
.page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; }
.page-header h1 { margin: 0; color: #1a73e8; }
.page-header p { margin: 4px 0 0; color: #666; font-size: 0.95rem; }

.btn-primary { background: #1a73e8; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; white-space: nowrap; }
.btn-primary:hover:not(:disabled) { background: #1557b0; }
.btn-secondary { background: #f0f0f0; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; cursor: pointer; color: #333; }

.state-msg { text-align: center; color: #aaa; padding: 4rem; font-size: 1rem; }

/* Table */
.table-container { background: white; border-radius: 12px; border: 1px solid #eee; overflow-x: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
.data-table { width: 100%; border-collapse: collapse; min-width: 600px; }
.data-table th, .data-table td { padding: 1rem; border-bottom: 1px solid #eee; text-align: left; color: #444; }
.data-table th { background: #fafbfc; color: #666; font-weight: 600; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px; }

.data-table tr:hover { background: #f8fbff; }
.data-table tr.low-stock { background: #fff5f5; }

.text-right { text-align: right !important; }
.text-center { text-align: center !important; }

.name-cell { font-weight: bold; color: #333; }
.cat-tag { background: #e3f2fd; color: #1565c0; font-size: 0.75rem; font-weight: bold; padding: 4px 8px; border-radius: 6px; }

.stock-badge { font-size: 0.8rem; font-weight: bold; padding: 4px 10px; border-radius: 20px; }
.stock-badge.good { background: #e8f5e9; color: #2e7d32; }
.stock-badge.empty { background: #fce4ec; color: #c62828; }

.actions-cell { white-space: nowrap; }
.btn-icon { background: none; border: none; cursor: pointer; font-size: 1.1rem; padding: 6px; transition: 0.2s; border-radius: 6px; margin: 0 2px; }
.btn-icon.edit:hover { background: #e3f2fd; }
.btn-icon.del:hover { background: #fce4ec; }

/* Modal */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal-card { background: white; border-radius: 16px; width: 500px; max-width: 95vw; box-shadow: 0 20px 40px rgba(0,0,0,0.2); display: flex; flex-direction: column; }
.modal-card h2 { margin: 0; padding: 2rem 2rem 1.5rem; color: #1a73e8; border-bottom: 1px solid #eee; }

form { padding: 1.5rem 2rem 2rem; overflow-y: auto; }
.field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 1.25rem; }
.field label { font-size: 0.85rem; font-weight: 600; color: #555; }
.field input, .field select { padding: 0.8rem; border: 1.5px solid #ddd; border-radius: 8px; font-size: 1rem; outline: none; }
.field input:focus, .field select:focus { border-color: #1a73e8; }

.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.help-text { color: #888; font-size: 0.8rem; line-height: 1.4; background: #fafbfc; padding: 0.5rem; border-radius: 6px; margin-top: 4px; border: 1px dashed #ccc; }

.modal-actions { display: flex; gap: 0.75rem; margin-top: 1.5rem; justify-content: flex-end; }

@media (max-width: 600px) {
  .field-row { grid-template-columns: 1fr; }
  .page-header { flex-direction: column; gap: 1rem; }
  .btn-primary { width: 100%; text-align: center; }
  .table-container { border-radius: 0; border-left: none; border-right: none; }
}
</style>