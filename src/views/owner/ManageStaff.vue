<template>
  <div class="staff-page">
    <div class="header-section">
      <h1>Manajemen Karyawan</h1>
      <p>Daftarkan karyawan baru atau kelola tim yang sudah ada.</p>
    </div>

    <div class="main-grid">
      <aside class="form-card">
        <h3>Tambah Karyawan Baru</h3>
        <p class="subtitle">Email akan otomatis terdaftar di sistem.</p>
        
        <form @submit.prevent="handleFormSubmit">
          <div class="field">
            <label>Email Karyawan</label>
            <input v-model="form.email" type="email" placeholder="karyawan@email.com" required />
          </div>

          <div class="field">
            <label>Password Sementara</label>
            <input v-model="form.password" type="password" placeholder="Minimal 6 karakter" required />
          </div>

          <button type="submit" :disabled="isSubmitting" class="btn-primary">
            {{ isSubmitting ? 'Memproses...' : 'Daftarkan Karyawan' }}
          </button>
        </form>
      </aside>

      <section class="list-card">
        <div class="list-header">
          <h3>Tim Anda</h3>
          <span class="count-badge">{{ staffList.length }} Staff</span>
        </div>

        <div class="table-wrapper">
          <table class="staff-table">
            <thead>
              <tr>
                <th>Karyawan</th>
                <th>Tanggal Gabung</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="staff in staffList" :key="staff.id">
                <td class="user-cell">
                  <div class="avatar">{{ staff.email[0].toUpperCase() }}</div>
                  <span>{{ staff.email }}</span>
                </td>
                <td>{{ formatDate(staff.created_at) }}</td>
                <td><span class="status active">Aktif</span></td>
              </tr>
              <tr v-if="staffList.length === 0">
                <td colspan="3" class="empty-state">Belum ada karyawan terdaftar.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { auth, db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { registerStaffDirectly } from '../../services/authService';
import { getStaffByOutlet } from '../../services/userService';

const isSubmitting = ref(false);
const staffList = ref([]);
const outletId = ref('');
const form = reactive({ email: '', password: '' });

const loadData = async () => {
  const user = auth.currentUser;
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();
    
    let oid = userData.outlet_id;
    if (userData.role === 'owner') {
      oid = localStorage.getItem('active_outlet_id');
    }
    
    if (oid && oid !== 'undefined') {
      outletId.value = oid;
      staffList.value = await getStaffByOutlet(outletId.value);
    }
  }
};

const handleFormSubmit = async () => {
  if (!outletId.value) {
    return alert("Gagal: Anda belum memilih outlet aktif. Silakan pilih outlet di Dashboard terlebih dahulu.");
  }
  isSubmitting.value = true;
  try {
    await registerStaffDirectly(form.email, form.password, outletId.value);
    alert("Karyawan berhasil ditambahkan!");
    form.email = '';
    form.password = '';
    await loadData(); // Refresh list
  } catch (err) {
    alert("Error: " + err.message);
  } finally {
    isSubmitting.value = false;
  }
};

const formatDate = (ts) => {
  if (!ts) return '-';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString('id-ID');
};

onMounted(loadData);
</script>

<style scoped>
.staff-page { max-width: 1100px; margin: 0 auto; }
.header-section { margin-bottom: 2rem; }
.header-section h1 { color: #2d5a27; margin: 0; }
.header-section p { color: #666; }

.main-grid { display: grid; grid-template-columns: 350px 1fr; gap: 2rem; align-items: start; }

.form-card, .list-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eee; }

h3 { margin-top: 0; margin-bottom: 0.5rem; }
.subtitle { font-size: 0.85rem; color: #888; margin-bottom: 1.5rem; }

.field { margin-bottom: 1.2rem; }
label { display: block; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.4rem; }
input { width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; }

.btn-primary { 
  width: 100%; padding: 0.9rem; background: #2d5a27; color: white; border: none; 
  border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.3s;
}
.btn-primary:hover { background: #1e3d1a; }

.list-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
.count-badge { background: #e8f0e7; color: #2d5a27; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; }

.staff-table { width: 100%; border-collapse: collapse; }
.staff-table th { text-align: left; padding: 12px; border-bottom: 2px solid #eee; font-size: 0.85rem; color: #888; }
.staff-table td { padding: 12px; border-bottom: 1px solid #f9f9f9; }

.user-cell { display: flex; align-items: center; gap: 10px; font-weight: 500; }
.avatar { 
  width: 32px; height: 32px; background: #2d5a27; color: white; 
  display: flex; align-items: center; justify-content: center; border-radius: 50%; font-size: 0.8rem;
}

.status.active { color: #2d5a27; background: #e7f3e6; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
.empty-state { text-align: center; color: #ccc; padding: 3rem; }

@media (max-width: 800px) { .main-grid { grid-template-columns: 1fr; } }
</style>