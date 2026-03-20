<template>
  <div class="register-container">
    <div class="register-card">
      <div class="header">
        <h2>👥 Registrasi Staff</h2>
        <p>Masukkan kode join yang diberikan oleh Owner Anda untuk bergabung ke outlet.</p>
      </div>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Email Baru</label>
          <input 
            v-model="form.email" 
            type="email" 
            placeholder="nama@email.com" 
            required 
          />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input 
            v-model="form.password" 
            type="password" 
            placeholder="Min. 6 karakter" 
            required 
          />
        </div>

        <div class="form-group">
          <label>Join Code (6 Digit)</label>
          <input 
            v-model="form.code" 
            type="text" 
            placeholder="Contoh: XY72H1" 
            class="code-input"
            required 
          />
          <small>Kode ini didapat dari Owner outlet Anda.</small>
        </div>

        <button type="submit" :disabled="loading" class="btn-register">
          {{ loading ? 'Mendaftarkan...' : 'Daftar & Gabung Outlet' }}
        </button>
      </form>

      <div class="footer-links">
        <p>Sudah punya akun? <router-link to="/login">Login di sini</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { registerStaffWithCode } from '../../services/authService';

const router = useRouter();
const loading = ref(false);

const form = reactive({
  email: '',
  password: '',
  code: ''
});

const handleRegister = async () => {
  loading.value = true;
  try {
    // Memanggil service yang sudah kita buat sebelumnya
    await registerStaffWithCode(form.email, form.password, form.code.toUpperCase());
    
    alert("Berhasil! Anda telah terdaftar sebagai Staff dan bergabung ke outlet.");
    router.push('/dashboard');
  } catch (error) {
    alert("Registrasi Gagal: " + error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f2f5;
  padding: 20px;
}
.register-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 450px;
}
.header {
  text-align: center;
  margin-bottom: 2rem;
}
.header h2 {
  margin: 0;
  color: #2d5a27;
}
.header p {
  color: #666;
  font-size: 0.9rem;
  margin-top: 10px;
}
.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}
input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 1rem;
}
.code-input {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  border: 2px solid #2d5a27;
  color: #2d5a27;
}
small {
  display: block;
  margin-top: 5px;
  color: #888;
  font-size: 0.8rem;
}
.btn-register {
  width: 100%;
  padding: 1rem;
  background: #2d5a27;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
}
.btn-register:hover {
  background: #1e3d1a;
}
.btn-register:disabled {
  background: #ccc;
  cursor: not-allowed;
}
.footer-links {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
}
.footer-links a {
  color: #2d5a27;
  text-decoration: none;
  font-weight: bold;
}
</style>