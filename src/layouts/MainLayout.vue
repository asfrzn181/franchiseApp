<template>
  <div class="app-container" :class="{ 'sidebar-open': isSidebarOpen }">
    <!-- Overlay for mobile -->
    <div v-if="isSidebarOpen" class="sidebar-overlay" @click="isSidebarOpen = false"></div>

    <Sidebar :isOpen="isSidebarOpen" @close="isSidebarOpen = false" />

    <div class="main-wrapper">
      <header class="top-bar">
        <div class="breadcrumb">
          <button class="menu-btn" @click="isSidebarOpen = true">☰</button>
          <span>Outlet: <strong>{{ displayOutletName }}</strong></span>
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
import { doc, getDoc } from 'firebase/firestore';

const outletName = ref('');
const userEmail = ref('');
const userRole = ref('');
const isSidebarOpen = ref(false);

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
      if (data.outlet_id) {
        const outletSnap = await getDoc(doc(db, 'outlets', data.outlet_id));
        if (outletSnap.exists()) {
          outletName.value = outletSnap.data().name;
        }
      }
    }
  }
});
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