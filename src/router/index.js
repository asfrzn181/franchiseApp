import { createRouter, createWebHistory } from 'vue-router';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

// Helper: Tunggu Firebase Auth inisialisasi
const getCurrentUser = () => {
  return new Promise((resolve) => {
    const removeListener = onAuthStateChanged(auth, (user) => {
      removeListener();
      resolve(user);
    });
  });
};

const routes = [
  // --- AUTH (Tanpa Layout) ---
  { 
    path: '/login', 
    name: 'Login', 
    component: () => import('../views/Login.vue') 
  },
  { 
    path: '/select-outlet', 
    name: 'OutletSelector', 
    component: () => import('../views/auth/OutletSelector.vue'), 
    meta: { requiresAuth: true } 
  },

  // --- HALAMAN DENGAN MAIN LAYOUT (Sidebar + Header) ---
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      // Core
      { 
        path: 'dashboard', 
        name: 'Dashboard', 
        component: () => import('../views/Dashboard.vue') 
      },

      // Owner / Admin Routes
      { 
        path: 'admin/manage-outlets', 
        name: 'ManageOutlets', 
        component: () => import('../views/owner/ManageOutlets.vue'),
        meta: { role: 'owner' } 
      },
      { 
        path: 'admin/manage-staff', 
        name: 'ManageStaff', 
        component: () => import('../views/owner/ManageStaff.vue'),
        meta: { role: 'owner' } 
      },
      { 
        path: 'admin/master-ingredients', 
        name: 'MasterIngredients', 
        component: () => import('../views/owner/MasterIngredients.vue'),
        meta: { role: 'owner' } 
      },
      { 
        path: 'admin/master-recipes', 
        name: 'MasterRecipes', 
        component: () => import('../views/owner/MasterRecipes.vue'),
        meta: { role: 'owner' } 
      },
      // TODO: Buat views/owner/LandingPageSettings.vue
      // { path: 'admin/landing-settings', name: 'LandingSettings', component: () => import('../views/owner/LandingPageSettings.vue'), meta: { role: 'owner' } },

      // ERP / Operasional (Outlet Specific)
      { path: 'inventory', name: 'Inventory', component: () => import('../views/erp/Inventory.vue'), meta: { requiresOutlet: true } },
      { path: 'reports', name: 'Reports', component: () => import('../views/erp/Reports.vue'), meta: { requiresOutlet: true } },
      { path: 'pos', name: 'POS', component: () => import('../views/erp/POS.vue'), meta: { requiresOutlet: true } },
      { path: 'history', name: 'History', component: () => import('../views/erp/History.vue'), meta: { requiresOutlet: true } },

      // Default redirect
      { path: '', redirect: 'dashboard' },
    ]
  },

  // Catch-all
  { path: '/:pathMatch(.*)*', redirect: '/dashboard' }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Navigation Guard
let cachedUserData = null;

router.beforeEach(async (to, from, next) => {
  const user = await getCurrentUser();
  const activeOutlet = localStorage.getItem('active_outlet_id');

  // 1. Jika butuh login tapi belum login
  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    return next('/login');
  }

  if (user) {
    // 2. Ambil data role user jika belum di-cache
    if (!cachedUserData || cachedUserData.uid !== user.uid) {
      const snap = await getDoc(doc(db, "users", user.uid));
      cachedUserData = snap.exists() ? { uid: user.uid, ...snap.data() } : null;
    }

    const userRole = cachedUserData?.role;

    // 3. Proteksi Halaman Khusus Owner
    if (to.meta.role === 'owner' && userRole !== 'owner' && userRole !== 'superadmin') {
      return next('/dashboard');
    }

    // 4. Proteksi Halaman Spesifik Outlet
    if (to.meta.requiresOutlet && !activeOutlet) {
      return next('/select-outlet');
    }
  }

  next();
});

export default router;