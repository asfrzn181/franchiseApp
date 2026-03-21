<template>
  <div class="app-container" :class="{ 'sidebar-open': isSidebarOpen }">
    <!-- Overlay for mobile -->
    <div v-if="isSidebarOpen" class="sidebar-overlay" @click="isSidebarOpen = false"></div>

    <Sidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />

    <div class="main-wrapper">
      <header class="top-bar">
        <div class="breadcrumb">
          <button class="menu-btn" @click="isSidebarOpen = true">☰</button>
          
          <div v-if="outlets.length > 0" class="outlet-selector">
            <span class="selector-label">Cabang:</span>
            <select v-model="activeOutletId" @change="changeOutlet" class="outlet-dropdown">
              <option value="" disabled>Pilih Outlet...</option>
              <option v-for="o in outlets" :key="o.id" :value="o.id">{{ o.name }}</option>
            </select>
          </div>
          <span v-else>
            Outlet: <strong>{{ displayOutletName }}</strong>
          </span>
        </div>
        <div class="user-profile">
          <span>{{ userEmail }}</span>
        </div>
      </header>

      <main class="page-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Sidebar from '../components/Sidebar.vue';
import { auth, db } from '../firebase';
import { doc, getDoc, collection, query, where, getDocs, updateDoc } from 'firebase/firestore';

const outletName = ref('');
const userEmail = ref('');
const userRole = ref('');
const isSidebarOpen = ref(false);

const outlets = ref([]);
const activeOutletId = ref('');

const displayOutletName = computed(() => {
  if (outletName.value) return outletName.value;
  if (userRole.value === 'superadmin') return 'Super Admin';
  if (userRole.value === 'owner') return 'Semua Outlet';
  return '-';
});

onMounted(async () => {
  const user = auth.currentUser;
  if (user) {
    userEmail.value = user.email;
    const userSnap = await getDoc(doc(db, 'users', user.uid));
    
    if (userSnap.exists()) {
      const data = userSnap.data();
      userRole.value = data.role || '';
      
      const currentOutletId = data.outlet_id || localStorage.getItem('active_outlet_id');
      activeOutletId.value = currentOutletId || '';

      // Tampilkan Selector Outlet hanya untuk Owner/Superadmin
      if (userRole.value === 'owner' || userRole.value === 'superadmin') {
        try {
          const q = userRole.value === 'owner' 
            ? query(collection(db, 'outlets'), where('owner_id', '==', user.uid))
            : collection(db, 'outlets');
          const snap = await getDocs(q);
          outlets.value = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        } catch (e) {
          console.error("Gagal load outlets di topbar", e);
        }
      }

      if (currentOutletId) {
        const found = outlets.value.find(o => o.id === currentOutletId);
        if (found) {
          outletName.value = found.name;
        } else {
          const outletSnap = await getDoc(doc(db, 'outlets', currentOutletId));
          if (outletSnap.exists()) outletName.value = outletSnap.data().name;
        }
      }
    }
  }
});

const changeOutlet = async () => {
  const user = auth.currentUser;
  if (!user || !activeOutletId.value) return;
  
  try {
    await updateDoc(doc(db, 'users', user.uid), {
      outlet_id: activeOutletId.value
    });
    localStorage.setItem('active_outlet_id', activeOutletId.value);
    
    // Refresh the page globally to update all contexts (nav, pages, services)
    window.location.reload();
  } catch (err) {
    alert("Gagal memindahkan cabang: " + err.message);
  }
};
</script>

<style scoped>
.app-container { display: flex; min-height: 100vh; background: #f4f7f6; position: relative; }
.main-wrapper { flex-grow: 1; display: flex; flex-direction: column; width: 100%; transition: 0.3s; min-width: 0; }
.top-bar { 
  height: 60px; 
  background: white; 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 0 2rem; 
  border-bottom: 1px solid #eee;
}
.page-content { padding: 1.5rem; overflow-y: auto; flex-grow: 1; }
.breadcrumb { display: flex; align-items: center; color: #666; font-size: 0.9rem; }
.user-profile { font-weight: 600; color: #2d5a27; }

.outlet-selector { display: flex; align-items: center; gap: 8px; }
.selector-label { font-weight: bold; color: #333; }
.outlet-dropdown { padding: 6px 10px; border-radius: 6px; border: 1.5px solid #ccc; font-family: inherit; font-size: 0.95rem; background: #fafbfc; color: #1a73e8; font-weight: bold; cursor: pointer; outline: none; transition: 0.2s; }
.outlet-dropdown:focus, .outlet-dropdown:hover { border-color: #1a73e8; background: white; }

.menu-btn { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; margin-right: 15px; color: #333; }
.sidebar-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 998; }

@media (max-width: 768px) {
  .top-bar { padding: 0 1rem; }
  .page-content { padding: 1rem; }
  .menu-btn { display: block; }
  .sidebar-overlay { display: block; }
  .breadcrumb span { font-size: 0.85rem; }
  .user-profile { display: none; /* Hide email on small screens to save space */ }
}
</style>