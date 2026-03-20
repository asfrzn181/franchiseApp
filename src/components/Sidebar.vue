<template>
  <aside class="sidebar" :class="{ 'is-open': isOpen }">
    <div class="sidebar-header">
      <h2>{{ displayName }}</h2>
      <span class="role-badge">{{ roleBadge }}</span>
      <button class="close-btn" @click="$emit('close')">×</button>
    </div>

    <nav class="sidebar-nav">
      <router-link to="/dashboard" class="nav-item" @click="$emit('close')">
        <span class="icon">🏠</span> Dashboard Utama
      </router-link>

      <!-- Owner/Admin menus -->
      <router-link to="/admin/manage-staff" class="nav-item" @click="$emit('close')">
        <span class="icon">👥</span> Manajemen Staff
      </router-link>

      <router-link to="/admin/manage-outlets" class="nav-item" @click="$emit('close')">
        <span class="icon">🏪</span> Kelola Outlet
      </router-link>

      <router-link to="/admin/master-ingredients" class="nav-item" @click="$emit('close')">
        <span class="icon">🌾</span> Master Bahan Baku
      </router-link>

      <router-link to="/admin/master-recipes" class="nav-item" @click="$emit('close')">
        <span class="icon">🍵</span> Master Produk (Resep)
      </router-link>

      <!-- Operasional menus -->
      <router-link to="/pos" class="nav-item" @click="$emit('close')">
        <span class="icon">🛒</span> Kasir (POS)
      </router-link>

      <router-link to="/inventory" class="nav-item" @click="$emit('close')">
        <span class="icon">📦</span> Stok & Inventaris
      </router-link>

      <router-link to="/reports" class="nav-item" @click="$emit('close')">
        <span class="icon">📊</span> Laporan Penjualan
      </router-link>

      <router-link to="/history" class="nav-item" @click="$emit('close')">
        <span class="icon">📜</span> Riwayat Transaksi
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <button @click="handleLogout" class="btn-logout">
        🚪 Keluar Sistem
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

const router = useRouter();
const outletName = ref('');
const userRole = ref('');

defineProps({ isOpen: Boolean });
defineEmits(['close']);

const displayName = computed(() => {
  if (outletName.value) return outletName.value;
  if (userRole.value === 'superadmin') return 'Super Admin';
  if (userRole.value === 'owner') return 'Dashboard Global';
  return 'Franchise App';
});

const roleBadge = computed(() => {
  if (userRole.value === 'superadmin') return 'Super Admin';
  if (userRole.value === 'owner') return 'Owner Account';
  return 'Staff Account';
});

const fetchUserData = async () => {
  const user = auth.currentUser;
  if (!user) return;

  const userDoc = await getDoc(doc(db, 'users', user.uid));
  if (!userDoc.exists()) return;

  const data = userDoc.data();
  userRole.value = data.role || '';

  if (data.outlet_id) {
    const outletDoc = await getDoc(doc(db, 'outlets', data.outlet_id));
    if (outletDoc.exists()) {
      outletName.value = outletDoc.data().name;
    }
  }
};

const handleLogout = async () => {
  await signOut(auth);
  localStorage.clear();
  router.push('/login');
};

onMounted(() => {
  fetchUserData();
});
</script>

<style scoped>
.sidebar {
  width: 260px;
  height: 100vh;
  background: #2d5a27; /* Hijau Tua */
  color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.sidebar-header {
  padding: 2rem 1.5rem;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  position: relative;
}

.close-btn { display: none; position: absolute; top: 15px; right: 15px; background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }

.sidebar-header h2 {
  margin: 0;
  font-size: 1.4rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.role-badge {
  font-size: 0.7rem;
  background: #8bc34a;
  padding: 2px 8px;
  border-radius: 10px;
  display: inline-block;
  margin-top: 5px;
}

.sidebar-nav {
  flex-grow: 1;
  padding: 1rem 0;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: 0.3s;
}

.nav-item:hover {
  background: rgba(255,255,255,0.1);
  color: white;
}

.nav-item.router-link-active {
  background: #3d7a35; /* Warna highlight hijau terang sesuai gambar */
  color: white;
  border-left: 4px solid #8bc34a;
}

.icon {
  margin-right: 12px;
  font-size: 1.2rem;
}

.sidebar-footer {
  padding: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.btn-logout {
  width: 100%;
  padding: 0.8rem;
  background: #f44336;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.loading-text {
  font-size: 0.9rem;
  opacity: 0.5;
}

@media (max-width: 768px) {
  .sidebar { position: fixed; left: 0; top: 0; bottom: 0; z-index: 1000; transform: translateX(-100%); width: 260px; }
  .sidebar.is-open { transform: translateX(0); }
  .close-btn { display: block; }
}
</style>