import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  // VITE_BASE_URL di-set otomatis oleh GitHub Actions dari nama repo.
  // Untuk dev lokal & Firebase Hosting, default ke '/'.
  base: process.env.VITE_BASE_URL || '/',
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true
    }
  }
})