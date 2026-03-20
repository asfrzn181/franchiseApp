<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Franchise System</h2>
      <p>Silakan login untuk mengelola outlet Anda</p>
      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input 
            v-model="email" 
            type="email" 
            placeholder="email@example.com" 
            required 
          />
        </div>
        
        <div class="form-group">
          <label>Password</label>
          <input 
            v-model="password" 
            type="password" 
            placeholder="••••••••" 
            required 
          />
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? 'Mohon Tunggu...' : 'Login' }}
        </button>
      </form>

      <div class="auth-links">
        <p>Belum punya akun? <router-link to="/register-owner">Daftar Owner</router-link></p>
        <p>Karyawan baru? <router-link to="/register-staff">Gabung via Kode</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginUser } from '../services/authService';

const email = ref('');
const password = ref('');
const loading = ref(false);
const router = useRouter();

const handleLogin = async () => {
  loading.value = true;
  try {
    await loginUser(email.value, password.value);
    // Router guard akan otomatis ngecek outlet_id dan arahkan ke dashboard/create-outlet
    router.push('/dashboard'); 
  } catch (err) {
    alert("Login Gagal: " + err.message);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f4f7f6;
}
.login-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}
.form-group {
  text-align: left;
  margin-bottom: 1.5rem;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 0.8rem;
  background: #2d5a27;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background: #1e3d1a;
}
.auth-links {
  margin-top: 1.5rem;
  font-size: 0.9rem;
}
.auth-links a {
  color: #2d5a27;
  text-decoration: none;
  font-weight: bold;
}
</style>