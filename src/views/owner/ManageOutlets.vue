<template>
  <div class="setup-container">
    <div class="setup-card">
      <div class="header">
        <h2>🏪 Kelola Outlet Anda</h2>
        <p>Pilih outlet yang sedang aktif, atau tambahkan cabang baru.</p>
      </div>
      
      <div v-if="loading" class="state-msg">Memuat daftar outlet...</div>
      
      <div v-else class="outlet-list">
        <div 
          v-for="outlet in outlets" 
          :key="outlet.id" 
          class="outlet-item"
          :class="{ active: outlet.id === activeOutletId }"
        >
          <div class="outlet-info">
            <h3>{{ outlet.name }}</h3>
            <p>{{ outlet.address }}</p>
          </div>
          <button 
            @click="setActiveOutlet(outlet.id)" 
            class="btn-activate"
            :disabled="outlet.id === activeOutletId"
          >
            {{ outlet.id === activeOutletId ? '✅ Aktif' : 'Pilih Ini' }}
          </button>
        </div>

        <div v-if="outlets.length === 0" class="empty-msg">
          Belum ada outlet yang terdaftar.
        </div>
      </div>

      <div class="divider"></div>

      <div class="add-outlet-form">
        <h3>+ Tambah Cabang Baru</h3>
        <form @submit.prevent="handleCreate">
          <div class="input-group">
            <input v-model="form.name" placeholder="Nama Outlet (cth: Cabang Sudirman)" required />
          </div>
          <div class="input-group">
            <textarea v-model="form.address" placeholder="Alamat Lengkap..." required></textarea>
          </div>
          <button type="submit" :disabled="isCreating" class="btn-submit">
            {{ isCreating ? 'Menyimpan...' : 'Simpan Cabang Baru' }}
          </button>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { db, auth } from '../../firebase';
import { collection, query, where, getDocs, addDoc, doc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore';

const loading = ref(true);
const isCreating = ref(false);
const outlets = ref([]);
const activeOutletId = ref('');
const form = reactive({ name: '', address: '' });

const fetchOutlets = async () => {
  loading.value = true;
  try {
    const user = auth.currentUser;
    if (!user) return;

    // Ambil profile untuk tahu outlet mana yang aktif saat ini
    const userSnap = await getDoc(doc(db, 'users', user.uid));
    const userData = userSnap.data();
    activeOutletId.value = userData?.outlet_id || localStorage.getItem('active_outlet_id') || '';

    // Ambil list outlet yg owner-nya adalah login user
    const q = query(collection(db, 'outlets'), where('owner_id', '==', user.uid));
    const snap = await getDocs(q);
    outlets.value = snap.docs.map(d => ({ id: d.id, ...d.data() }));

  } catch (err) {
    console.error("Gagal memuat outlet", err);
  } finally {
    loading.value = false;
  }
};

const setActiveOutlet = async (id) => {
  const user = auth.currentUser;
  if (!user) return;
  try {
    // 1. Simpan di DB
    await updateDoc(doc(db, 'users', user.uid), {
      outlet_id: id
    });
    // 2. Simpan di localStorage buat fallback
    localStorage.setItem('active_outlet_id', id);
    activeOutletId.value = id;
    
    // Refresh page agar sidebar / headers update (karena computed mungkin belum reaktif global)
    window.location.reload(); 
  } catch (e) {
    alert("Gagal mengubah outlet aktif: " + e.message);
  }
};

const handleCreate = async () => {
  const user = auth.currentUser;
  if (!user) return;
  isCreating.value = true;
  try {
    const outletRef = await addDoc(collection(db, "outlets"), {
      name: form.name,
      address: form.address,
      owner_id: user.uid,
      created_at: serverTimestamp()
    });

    form.name = '';
    form.address = '';
    
    // Auto-select jika ini outlet pertama
    if (outlets.value.length === 0) {
      await setActiveOutlet(outletRef.id);
    } else {
      await fetchOutlets();
    }
    alert("Cabang baru berhasil ditambahkan!");
  } catch (e) {
    alert("Error: " + e.message);
  } finally {
    isCreating.value = false;
  }
};

onMounted(fetchOutlets);
</script>

<style scoped>
.setup-container { display: flex; justify-content: center; padding: 2rem 0; min-height: 80vh; background: #f0f2f5; }
.setup-card { background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 100%; max-width: 550px; }
.header { text-align: center; margin-bottom: 2rem; }
.header h2 { margin: 0; color: #1a73e8; }
.header p { color: #555; margin-top: 6px; }

.state-msg, .empty-msg { text-align: center; color: #888; padding: 2rem; }

.outlet-list { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; max-height: 300px; overflow-y: auto; }
.outlet-item { display: flex; justify-content: space-between; align-items: center; border: 2px solid #eee; padding: 1rem; border-radius: 10px; transition: 0.2s; }
.outlet-item:hover { border-color: #bbdefb; }
.outlet-item.active { border-color: #1a73e8; background: #f0f7ff; }

.outlet-info h3 { margin: 0 0 4px; font-size: 1.1rem; color: #333; }
.outlet-info p { margin: 0; font-size: 0.85rem; color: #666; }

.btn-activate { padding: 0.6rem 1rem; background: #f0f0f0; color: #333; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; transition: 0.2s; }
.btn-activate:hover:not(:disabled) { background: #e0e0e0; }
.btn-activate:disabled { background: #1a73e8; color: white; cursor: default; }

.divider { border-bottom: 2px dashed #eee; margin: 2rem 0; }

.add-outlet-form h3 { margin: 0 0 1rem; font-size: 1.1rem; color: #333; }
.input-group { margin-bottom: 1rem; }
input, textarea { width: 100%; padding: 0.8rem; border: 1.5px solid #ddd; border-radius: 8px; box-sizing: border-box; font-family: inherit; font-size: 0.95rem; }
input:focus, textarea:focus { border-color: #1a73e8; outline: none; }
textarea { height: 80px; resize: none; }

.btn-submit { width: 100%; padding: 0.8rem; background: #1a73e8; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.3s; font-size: 1rem; }
.btn-submit:hover:not(:disabled) { background: #1557b0; }
.btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
</style>
