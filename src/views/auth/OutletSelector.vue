<template>
  <div class="selector-container">
    <div class="selector-card">
      <div class="header">
        <h2>Pilih Unit Outlet</h2>
        <p>Silakan pilih unit untuk mengelola data spesifik atau masuk ke Dashboard Utama.</p>
      </div>

      <div v-if="loading" class="loading-state">Menarik data gerai...</div>

      <div v-else>
        <div v-if="outlets.length > 0" class="outlet-grid">
          <div v-for="outlet in outlets" :key="outlet.id" @click="selectOutlet(outlet)" class="outlet-item">
            <span class="icon">🏪</span>
            <div class="details">
              <span class="name">{{ outlet.name }}</span>
              <span class="loc">{{ outlet.address || 'Alamat belum diset' }}</span>
            </div>
          </div>
        </div>

        <div v-else class="empty-state">
          <p>Anda belum memiliki unit outlet terdaftar.</p>
        </div>

        <div v-if="role === 'owner'" class="owner-actions">
          <button @click="goToGlobalDashboard" class="btn-outline">Masuk ke Dashboard Global</button>
          <button @click="$router.push('/create-outlet')" class="btn-primary">+ Tambah Unit Baru</button>
        </div>
      </div>
      
      <button @click="logout" class="btn-logout">Keluar Sistem</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { auth, db } from '../../firebase';

// Make sure getDoc (and likely doc) are imported
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

const router = useRouter();
const outlets = ref([]);
const loading = ref(true);
const role = ref('');

onMounted(async () => {
  const user = auth.currentUser;
  if (!user) return router.push('/login');

  // 1. Ambil Data User Lengkap (Role & OutletID)
  const userDoc = await getDoc(doc(db, "users", user.uid));
  if (!userDoc.exists()) return;
  
  const userData = userDoc.data();
  role.value = userData.role;

  let outletList = [];

  if (role.value === 'superadmin') {
    // Superadmin: Tarik SEMUA
    const snap = await getDocs(collection(db, "outlets"));
    outletList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } 
  else if (role.value === 'owner') {
    // Owner: Tarik yang owner_id-nya sama dengan UID dia
    const q = query(collection(db, "outlets"), where("owner_id", "==", user.uid));
    const snap = await getDocs(q);
    outletList = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } 
  else if (role.value === 'staff') {
    // KARYAWAN: Langsung ambil 1 outlet berdasarkan outlet_id di profilnya
    if (userData.outlet_id) {
      const outSnap = await getDoc(doc(db, "outlets", userData.outlet_id));
      if (outSnap.exists()) {
        outletList = [{ id: outSnap.id, ...outSnap.data() }];
        
        // AUTO-REDIRECT (Opsional): Karyawan cuma punya 1 outlet, langsung masukin aja!
        //selectOutlet(outletList[0]);
        //return; 
      }
    }
  }

  outlets.value = outletList;
  loading.value = false;
});

const selectOutlet = (outlet) => {
  localStorage.setItem('active_outlet_id', outlet.id);
  localStorage.setItem('active_outlet_name', outlet.name);
  router.push('/dashboard');
};

const goToGlobalDashboard = () => {
  localStorage.removeItem('active_outlet_id'); // Global mode = no specific ID
  localStorage.setItem('active_outlet_name', 'Global Dashboard');
  router.push('/dashboard');
};

const logout = async () => {
  await signOut(auth);
  localStorage.clear();
  router.push('/login');
};
</script>

<style scoped>
.selector-container { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #f4f7f6; padding: 20px; }
.selector-card { background: white; width: 100%; max-width: 500px; padding: 2rem; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); }
.header { text-align: center; margin-bottom: 2rem; }
.outlet-grid { display: flex; flex-direction: column; gap: 12px; margin-bottom: 2rem; }
.outlet-item { display: flex; align-items: center; gap: 15px; padding: 15px; border: 2px solid #eee; border-radius: 12px; cursor: pointer; transition: 0.2s; }
.outlet-item:hover { border-color: #2d5a27; background: #f0f7ef; }
.name { font-weight: bold; display: block; }
.loc { font-size: 0.8rem; color: #888; }
.owner-actions { display: grid; grid-template-columns: 1fr; gap: 10px; border-top: 1px solid #eee; pt: 1.5rem; }
.btn-primary { padding: 12px; background: #2d5a27; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; }
.btn-outline { padding: 12px; background: white; color: #2d5a27; border: 2px solid #2d5a27; border-radius: 8px; font-weight: bold; cursor: pointer; }
.btn-logout { width: 100%; margin-top: 20px; background: none; border: none; color: #ff5252; cursor: pointer; font-size: 0.9rem; }
.empty-state { text-align: center; padding: 2rem; color: #999; border: 2px dashed #eee; border-radius: 12px; margin-bottom: 2rem; }
</style>