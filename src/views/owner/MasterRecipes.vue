<template>
  <div class="recipes-page">
    <div class="page-header">
      <div>
        <h1>Master Produk (Resep)</h1>
        <p>Gabungkan bahan baku menjadi produk jualan dan atur harga jual.</p>
      </div>
      <button @click="openAddModal" class="btn-primary">+ Tambah Produk</button>
    </div>

    <div v-if="loading" class="state-msg">Memuat produk...</div>
    <div v-else-if="products.length === 0" class="state-msg">Belum ada produk jualan. Klik Tambah Produk.</div>
    
    <div v-else class="product-grid">
      <div v-for="p in products" :key="p.id" class="product-card">
        <div class="card-header">
          <span class="cat-tag">{{ p.category }}</span>
          <div class="actions">
            <button @click="openEditModal(p)" class="btn-icon edit">✏️</button>
            <button @click="handleDelete(p)" class="btn-icon del">🗑️</button>
          </div>
        </div>
        
        <h3 class="product-name">{{ p.name }}</h3>
        
        <div class="finance-row">
          <div class="fin-box hpp">
            <span>Modal / HPP</span>
            <strong>Rp {{ fmt(calculateHPP(p.recipe)) }}</strong>
          </div>
          <div class="fin-box sell">
            <span>Harga Dasar</span>
            <strong>Rp {{ fmt(p.base_price || p.price) }}</strong>
          </div>
          <div class="fin-box final">
            <span>Harga Final (POS)</span>
            <strong>Rp {{ fmt(p.price) }}</strong>
            <small v-if="p.tax_rate > 0" class="tax-badge">inc PPN {{ p.tax_rate }}%</small>
          </div>
          <div class="fin-box margin">
            <span>Margin (dari Final)</span>
            <strong>Rp {{ fmt(p.price - calculateHPP(p.recipe)) }}</strong>
          </div>
        </div>

        <div class="recipe-list">
          <h4>Resep:</h4>
          <ul>
            <li v-for="(req, i) in p.recipe" :key="i">
              - {{ req.qty }} {{ getIngredientUnit(req.ingredient_id) }} {{ getIngredientName(req.ingredient_id) }}
            </li>
            <li v-if="!p.recipe || p.recipe.length === 0" class="empty-recipe">
              Belum ada bahan baku
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Modal Form -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-card">
        <h2>{{ editingId ? 'Edit Produk & Resep' : 'Tambah Produk Baru' }}</h2>
        
        <div class="scrollable-form">
          <form @submit.prevent="handleSave">
            <div class="field">
              <label>Nama Produk *</label>
              <input v-model="form.name" placeholder="cth: Matcha Espresso" required />
            </div>
            
            <div class="field-row">
              <div class="field">
                <label>Kategori *</label>
                <input v-model="form.category" placeholder="cth: Kopi" required list="cat-list"/>
                <datalist id="cat-list">
                  <option v-for="c in uniqueCategories" :key="c" :value="c" />
                </datalist>
              </div>
              <div class="field">
                <label>Harga Jual Dasar (Rp) *</label>
                <input v-model.number="form.base_price" type="number" required />
              </div>
            </div>

            <div class="field-row" style="background:#f9f9f9; padding:10px; border-radius:8px; margin-bottom:1.25rem;">
              <div class="field" style="margin-bottom:0;">
                <label>Pajak PPN (%)</label>
                <input v-model.number="form.tax_rate" type="number" min="0" max="100" placeholder="0" />
              </div>
              <div class="field" style="margin-bottom:0; justify-content:center;">
                <label style="display:flex; align-items:center; gap:8px; cursor:pointer; user-select:none;">
                  <input type="checkbox" v-model="form.is_roundup" style="width:20px; height:20px;" />
                  <span>Bulatkan Harga (Roundup ke ribuan teratas)</span>
                </label>
              </div>
            </div>

            <div class="calculated-price-box">
              <span>Estimasi Harga Final di Kasir (POS):</span>
              <strong>Rp {{ fmt(calculatedFinalPrice) }}</strong>
            </div>

            <div class="recipe-builder">
              <h3>Susun Resep Bahan Baku</h3>
              <div v-for="(req, idx) in form.recipe" :key="idx" class="recipe-row">
                <select v-model="req.ingredient_id" required class="ing-select">
                  <option disabled value="">Pilih Bahan Baku...</option>
                  <option v-for="ing in ingredients" :key="ing.id" :value="ing.id">
                    {{ ing.name }} (Rp {{ fmt(ing.costPerUnit) }}/{{ ing.unit }})
                  </option>
                </select>
                <input v-model.number="req.qty" type="number" step="0.1" min="0.1" placeholder="Qty" required class="qty-input" />
                <span class="unit-label">{{ getIngredientUnit(req.ingredient_id) || '-' }}</span>
                <button type="button" @click="removeRecipeRow(idx)" class="btn-del-row">✖</button>
              </div>
              
              <button type="button" @click="addRecipeRow" class="btn-add-row">+ Tambah Bahan</button>
            </div>

            <div class="summary-box">
              <div class="sum-row">
                <span>Total Modal (HPP):</span>
                <strong>Rp {{ fmt(currentFormHPP) }}</strong>
              </div>
              <div class="sum-row">
                <span>Estimasi Margin:</span>
                <strong :class="currentFormMargin >= 0 ? 'text-success' : 'text-danger'">
                  Rp {{ fmt(currentFormMargin) }}
                </strong>
              </div>
            </div>

            <div class="modal-actions">
              <button type="button" @click="closeModal" class="btn-secondary">Batal</button>
              <button type="submit" :disabled="isSaving" class="btn-primary">
                {{ isSaving ? 'Menyimpan...' : 'Simpan Produk' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getProductsByOutlet, getIngredientsByOutlet, addProduct, updateProduct, deleteProduct } from '../../services/posService';

const loading = ref(true);
const isSaving = ref(false);

const ingredients = ref([]);
const products = ref([]);
const outletId = ref('');

const showModal = ref(false);
const editingId = ref(null);

const form = reactive({ name: '', category: '', base_price: 0, tax_rate: 0, is_roundup: false, recipe: [] });

const calculatedFinalPrice = computed(() => {
  let base = form.base_price || 0;
  let tax = base * ((form.tax_rate || 0) / 100);
  let total = base + tax;
  if (form.is_roundup) {
    // Roundup ke angka ribuan teratas, misal 16.650 -> 17.000, 16.001 -> 17.000, dst.
    total = Math.ceil(total / 1000) * 1000;
  }
  return total;
});

const fmt = (n) => Number(n || 0).toLocaleString('id-ID');

const uniqueCategories = computed(() =>
  [...new Set(products.value.map(p => p.category).filter(Boolean))].sort()
);

const loadData = async () => {
  loading.value = true;
  try {
    const user = auth.currentUser;
    if (!user) return;
    const snap = await getDoc(doc(db, 'users', user.uid));
    const userData = snap.data() || {};
    let oid = userData.outlet_id || localStorage.getItem('active_outlet_id');
    if (oid === 'undefined') oid = null;

    outletId.value = oid || '';
    if (outletId.value) {
      // Fetch concurrent
      const [ings, prods] = await Promise.all([
        getIngredientsByOutlet(outletId.value),
        getProductsByOutlet(outletId.value)
      ]);
      ingredients.value = ings;
      products.value = prods;
    }
  } catch (err) {
    console.error(err);
  } finally {
    loading.value = false;
  }
};

const getIngredientName = (id) => ingredients.value.find(i => i.id === id)?.name || 'Unknown';
const getIngredientUnit = (id) => ingredients.value.find(i => i.id === id)?.unit || '';
const getIngredientCost = (id) => ingredients.value.find(i => i.id === id)?.costPerUnit || 0;

const calculateHPP = (recipeArray) => {
  if (!recipeArray || !Array.isArray(recipeArray)) return 0;
  return recipeArray.reduce((total, req) => {
    return total + (getIngredientCost(req.ingredient_id) * (req.qty || 0));
  }, 0);
};

const currentFormHPP = computed(() => calculateHPP(form.recipe));
const currentFormMargin = computed(() => calculatedFinalPrice.value - currentFormHPP.value);

const openAddModal = () => {
  editingId.value = null;
  form.name = ''; form.category = ''; form.base_price = 0; 
  form.tax_rate = 0; form.is_roundup = false;
  form.recipe = [];
  showModal.value = true;
};

const openEditModal = (p) => {
  editingId.value = p.id;
  form.name = p.name; form.category = p.category; 
  form.base_price = p.base_price || p.price; 
  form.tax_rate = p.tax_rate || 0;
  form.is_roundup = p.is_roundup || false;
  // Deep copy array
  form.recipe = (p.recipe || []).map(r => ({ ...r }));
  showModal.value = true;
};

const closeModal = () => { showModal.value = false; };

const addRecipeRow = () => {
  form.recipe.push({ ingredient_id: '', qty: 1 });
};

const removeRecipeRow = (idx) => {
  form.recipe.splice(idx, 1);
};

const handleSave = async () => {
  // Validasi resep
  if (form.recipe.some(r => !r.ingredient_id || r.qty <= 0)) {
    return alert('Harap pilih bahan baku dan isi qty dengan benar, atau hapus baris yang kosong.');
  }

  isSaving.value = true;
  try {
    const payload = {
      name: form.name,
      category: form.category,
      base_price: form.base_price,
      tax_rate: form.tax_rate,
      is_roundup: form.is_roundup,
      price: calculatedFinalPrice.value, // Harga FIX untuk kasir
      recipe: [...form.recipe] // Save recipe configuration
    };
    
    if (editingId.value) {
      await updateProduct(editingId.value, payload);
    } else {
      await addProduct(outletId.value, payload);
    }
    closeModal();
    await loadData();
  } catch (err) {
    alert('Gagal menyimpan: ' + err.message);
  } finally {
    isSaving.value = false;
  }
};

const handleDelete = async (p) => {
  if (!confirm(`Hapus produk "${p.name}"?`)) return;
  await deleteProduct(p.id);
  await loadData();
};

onMounted(loadData);
</script>

<style scoped>
.recipes-page { max-width: 1100px; margin: 0 auto; }
.page-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; }
.page-header h1 { margin: 0; color: #2d5a27; }
.page-header p { margin: 4px 0 0; color: #666; font-size: 0.95rem; }

.btn-primary { background: #2d5a27; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.btn-primary:hover:not(:disabled) { background: #1e3d1a; }
.btn-secondary { background: #f0f0f0; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; font-weight: bold; cursor: pointer; color: #333; }

.state-msg { text-align: center; color: #aaa; padding: 4rem; font-size: 1rem; }

.product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; }
.product-card {
  background: white; border-radius: 12px; padding: 1.5rem; border: 1px solid #eee;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03); display: flex; flex-direction: column; gap: 1rem;
}

.card-header { display: flex; justify-content: space-between; align-items: flex-start; }
.cat-tag { background: #e8f5e9; color: #2d5a27; font-size: 0.75rem; font-weight: bold; padding: 4px 10px; border-radius: 10px; }

.product-name { margin: 0; font-size: 1.3rem; color: #333; }

.finance-row { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 8px; background: #fafbfc; padding: 0.75rem; border-radius: 8px; border: 1px dashed #ddd; }
.fin-box { display: flex; flex-direction: column; gap: 4px; }
.fin-box span { font-size: 0.75rem; color: #888; text-transform: uppercase; }
.fin-box strong { font-size: 0.95rem; color: #333; }
.fin-box.margin strong { color: #1565c0; }
.fin-box.hpp strong { color: #d32f2f; }
.fin-box.sell strong { color: #666; }
.fin-box.final strong { color: #2e7d32; }

.tax-badge { font-size: 0.65rem; background: #ffe0b2; color: #e65100; padding: 2px 6px; border-radius: 4px; display: inline-block; margin-top: 2px; }

.calculated-price-box { background: #e3f2fd; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; border: 1px dashed #90caf9;}
.calculated-price-box span { font-size: 0.95rem; color: #1565c0; font-weight: bold; }
.calculated-price-box strong { font-size: 1.25rem; color: #0d47a1; }

.recipe-list h4 { margin: 0 0 6px 0; font-size: 0.85rem; color: #555; text-transform: uppercase; }
.recipe-list ul { margin: 0; padding-left: 1.25rem; font-size: 0.85rem; color: #555; }
.empty-recipe { color: #aaa; font-style: italic; list-style: none; margin-left: -1.25rem; }

.actions { display: flex; gap: 4px; }
.btn-icon { background: none; border: none; cursor: pointer; font-size: 1.1rem; padding: 4px; transition: 0.2s; border-radius: 6px; }
.btn-icon.edit:hover { background: #e3f2fd; }
.btn-icon.del:hover { background: #fce4ec; }

/* Modals */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal-card { background: white; border-radius: 16px; width: 600px; max-width: 95vw; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
.modal-card h2 { margin: 0; padding: 2rem 2rem 1.5rem; color: #2d5a27; border-bottom: 1px solid #eee; }

.scrollable-form { padding: 1.5rem 2rem 2rem; overflow-y: auto; }

.field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 1.25rem; }
.field label { font-size: 0.85rem; font-weight: 600; color: #555; }
.field input { padding: 0.8rem; border: 1.5px solid #ddd; border-radius: 8px; font-size: 1rem; outline: none; }
.field input:focus, .ing-select:focus { border-color: #2d5a27; }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.recipe-builder { background: #fafbfc; border: 1px solid #eee; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem; }
.recipe-builder h3 { margin: 0 0 1rem; font-size: 0.95rem; color: #333; }
.recipe-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
.ing-select { flex: 1; padding: 0.6rem; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem; outline: none; }
.qty-input { width: 80px; padding: 0.6rem; border: 1px solid #ddd; border-radius: 6px; font-size: 0.9rem; outline: none; text-align: center; }
.unit-label { width: 45px; font-size: 0.85rem; color: #666; }
.btn-del-row { background: #fce4ec; color: #c62828; border: none; width: 32px; height: 32px; border-radius: 6px; cursor: pointer; font-weight: bold; }
.btn-add-row { background: none; border: 2px dashed #ccc; color: #666; padding: 0.6rem; width: 100%; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; margin-top: 8px; }
.btn-add-row:hover { border-color: #2d5a27; color: #2d5a27; }

.summary-box { background: #e8f5e9; padding: 1rem 1.25rem; border-radius: 8px; display: flex; flex-direction: column; gap: 6px; }
.sum-row { display: flex; justify-content: space-between; font-size: 0.95rem; color: #2d5a27; }
.text-success { color: #2e7d32; }
.text-danger { color: #d32f2f; }

.modal-actions { display: flex; gap: 0.75rem; margin-top: 2rem; justify-content: flex-end; }
</style>
