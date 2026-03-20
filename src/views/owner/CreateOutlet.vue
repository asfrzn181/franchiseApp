<template>
  <div class="setup-container">
    <div class="setup-card">
      <div class="header">
        <h2>🏪 Konfigurasi Outlet</h2>
        <p>Daftarkan outlet utama Anda untuk memulai sistem.</p>
      </div>
      
      <form @submit.prevent="handleCreate">
        <div class="input-group">
          <label>Nama Outlet</label>
          <input v-model="form.name" placeholder="Contoh: Franchise Pusat Jakarta" required />
        </div>
        
        <div class="input-group">
          <label>Alamat Lengkap</label>
          <textarea v-model="form.address" placeholder="Jln. Raya No. 123..." required></textarea>
        </div>

        <button type="submit" :disabled="loading" class="btn-submit">
          {{ loading ? 'Memproses...' : 'Simpan & Buka Dashboard' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { db, auth } from '../../firebase';
import { collection, addDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';

const router = useRouter();
const loading = ref(false);
const form = reactive({ name: '', address: '' });

const handleCreate = async () => {
  if (!auth.currentUser) return;
  loading.value = true;
  
  try {
    // 1. Simpan data Outlet
    const outletRef = await addDoc(collection(db, "outlets"), {
      name: form.name,
      address: form.address,
      owner_id: auth.currentUser.uid,
      created_at: serverTimestamp()
    });

    // 2. Update field outlet_id di Profil Owner
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      outlet_id: outletRef.id
    });

    alert("Outlet Berhasil Dibuat!");
    router.push('/dashboard');
  } catch (e) {
    alert("Error: " + e.message);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.setup-container { display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f0f2f5; }
.setup-card { background: white; padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 100%; max-width: 450px; }
.header { text-align: center; margin-bottom: 2rem; }
.input-group { margin-bottom: 1.5rem; }
label { display: block; margin-bottom: 0.5rem; font-weight: bold; color: #333; }
input, textarea { width: 100%; padding: 0.8rem; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; }
textarea { height: 100px; resize: none; }
.btn-submit { width: 100%; padding: 1rem; background: #1a73e8; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.3s; }
.btn-submit:hover { background: #1557b0; }
.btn-submit:disabled { background: #ccc; }
</style>