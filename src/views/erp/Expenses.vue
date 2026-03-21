<template>
  <div class="expenses-container">
    <div class="header">
      <h2>💸 Pengeluaran Harian</h2>
      <p>Catat pengeluaran operasional outlet di sini.</p>
    </div>

    <!-- Form Tambah Pengeluaran -->
    <div class="expense-card form-card">
      <h3>+ Input Pengeluaran Baru</h3>
      <form @submit.prevent="addExpense" class="expense-form">
        <div class="form-row">
          <div class="input-group">
            <label>Tanggal</label>
            <input type="date" v-model="form.date" required />
          </div>
          <div class="input-group">
            <label>Kategori</label>
            <select v-model="form.category" required>
              <option value="" disabled>Pilih Kategori</option>
              <option value="Operasional">Operasional (Listrik, Air, dll)</option>
              <option value="Bahan Baku">Bahan Baku Tambahan</option>
              <option value="Gaji Pegawai">Gaji/Kasbon Pegawai</option>
              <option value="Lain-lain">Lain-lain</option>
            </select>
          </div>
          <div class="input-group">
            <label>Nominal (Rp)</label>
            <input type="number" v-model="form.amount" min="0" placeholder="0" required />
          </div>
        </div>
        <div class="input-group">
          <label>Keterangan</label>
          <input type="text" v-model="form.description" placeholder="Contoh: Beli galon air" required />
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Menyimpan...' : 'Simpan Pengeluaran' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Tabel Pengeluaran -->
    <div class="expense-card table-card">
      <div class="table-header">
        <h3>Riwayat Pengeluaran</h3>
        <div class="filters">
          <input type="month" v-model="filterMonth" @change="fetchExpenses" />
        </div>
      </div>

      <div v-if="loading" class="state-msg">Memuat data pengeluaran...</div>
      
      <div class="table-responsive" v-else>
        <table class="data-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Kategori</th>
              <th>Keterangan</th>
              <th class="text-right">Nominal (Rp)</th>
              <th class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="expenses.length === 0">
              <td colspan="5" class="text-center">Belum ada data pengeluaran di bulan ini.</td>
            </tr>
            <tr v-for="expense in expenses" :key="expense.id">
              <td>{{ formatDate(expense.date) }}</td>
              <td><span class="badge" :class="getCategoryClass(expense.category)">{{ expense.category }}</span></td>
              <td>{{ expense.description }}</td>
              <td class="text-right font-bold text-danger">- Rp {{ expense.amount.toLocaleString('id-ID') }}</td>
              <td class="text-center">
                <button @click="deleteExpense(expense.id)" class="btn-danger-sm" title="Hapus">Hapus</button>
              </td>
            </tr>
          </tbody>
          <tfoot v-if="expenses.length > 0">
            <tr>
              <td colspan="3" class="text-right font-bold">Total Pengeluaran:</td>
              <td class="text-right font-bold text-danger">- Rp {{ totalExpense.toLocaleString('id-ID') }}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { db, auth } from '../../firebase';
import { collection, query, where, getDocs, addDoc, deleteDoc, doc, serverTimestamp, orderBy } from 'firebase/firestore';

const expenses = ref([]);
const loading = ref(true);
const isSubmitting = ref(false);

const filterMonth = ref(new Date().toISOString().slice(0, 7)); // YYYY-MM
const activeOutletId = ref(localStorage.getItem('active_outlet_id'));

const form = reactive({
  date: new Date().toISOString().slice(0, 10),
  category: '',
  amount: '',
  description: ''
});

const totalExpense = computed(() => {
  return expenses.value.reduce((total, exp) => total + exp.amount, 0);
});

const getCategoryClass = (category) => {
  const map = {
    'Operasional': 'bg-blue',
    'Bahan Baku': 'bg-orange',
    'Gaji Pegawai': 'bg-purple',
    'Lain-lain': 'bg-gray'
  };
  return map[category] || 'bg-gray';
};

const formatDate = (dateString) => {
  if (!dateString) return '-';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

const fetchExpenses = async () => {
  if (!activeOutletId.value) return;
  
  loading.value = true;
  try {
    const q = query(
      collection(db, 'expenses'),
      where('outlet_id', '==', activeOutletId.value)
    );
    
    const snap = await getDocs(q);
    const allExp = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    
    // Filter by selected month in JS since Firestore combined queries need composite indexes
    const [year, month] = filterMonth.value.split('-');
    const filteredExp = allExp.filter(exp => {
      if (!exp.date) return false;
      return exp.date.startsWith(`${year}-${month}`);
    });

    // Sort descending by date
    filteredExp.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    expenses.value = filteredExp;
  } catch (err) {
    console.error("Gagal memuat pengeluaran:", err);
    alert("Gagal memuat data pengeluaran.");
  } finally {
    loading.value = false;
  }
};

const addExpense = async () => {
  if (!activeOutletId.value) {
    alert("Pilih outlet terlebih dahulu!");
    return;
  }
  
  const user = auth.currentUser;
  if (!user) return;

  isSubmitting.value = true;
  try {
    const expData = {
      outlet_id: activeOutletId.value,
      date: form.date,
      category: form.category,
      amount: Number(form.amount),
      description: form.description,
      created_by: user.uid,
      created_at: serverTimestamp()
    };
    
    await addDoc(collection(db, 'expenses'), expData);
    
    // Reset form
    form.category = '';
    form.amount = '';
    form.description = '';
    
    await fetchExpenses();
  } catch (err) {
    console.error("Error menambah pengeluaran:", err);
    alert("Terjadi kesalahan: " + err.message);
  } finally {
    isSubmitting.value = false;
  }
};

const deleteExpense = async (id) => {
  if (!confirm("Apakah Anda yakin ingin menghapus data pengeluaran ini?")) return;
  
  try {
    await deleteDoc(doc(db, 'expenses', id));
    await fetchExpenses();
  } catch (err) {
    alert("Gagal menghapus pengeluaran: " + err.message);
  }
};

onMounted(() => {
  fetchExpenses();
});
</script>

<style scoped>
.expenses-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.header h2 { margin: 0; color: #1a73e8; }
.header p { margin: 5px 0 0; color: #666; font-size: 0.95rem; }

.expense-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.form-card h3 { margin-top: 0; margin-bottom: 1.2rem; color: #333; font-size: 1.1rem; }

.expense-form .form-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .expense-form .form-row {
    grid-template-columns: 1fr;
  }
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.input-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
}

.input-group input, .input-group select {
  padding: 0.7rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: inherit;
  font-size: 0.95rem;
}

.input-group input:focus, .input-group select:focus {
  border-color: #1a73e8;
  outline: none;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.btn-primary {
  background: #1a73e8;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn-primary:hover:not(:disabled) {
  background: #1557b0;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.table-header h3 { margin: 0; }
.filters input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}

.table-responsive {
  overflow-x: auto;
}

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
  background: #f8f9fa;
  font-weight: 600;
  color: #444;
}

.text-right { text-align: right !important; }
.text-center { text-align: center !important; }
.font-bold { font-weight: bold; }
.text-danger { color: #d32f2f; }

.badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  display: inline-block;
}
.bg-blue { background: #1976d2; }
.bg-orange { background: #f57c00; }
.bg-purple { background: #7b1fa2; }
.bg-gray { background: #757575; }

.btn-danger-sm {
  background: #ffebee;
  color: #d32f2f;
  border: 1px solid #ffcdd2;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: 0.2s;
}
.btn-danger-sm:hover {
  background: #ffcdd2;
}

.state-msg {
  text-align: center;
  padding: 2rem;
  color: #888;
}
</style>
