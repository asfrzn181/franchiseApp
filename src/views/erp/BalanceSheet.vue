<template>
  <div class="balance-sheet-container">
    <div class="header">
      <h2>⚖️ Neraca Keuangan (Balance Sheet)</h2>
      <p>Laporan posisi keuangan outlet, melihat total aset berjalan melawan kewajiban dan modal.</p>
    </div>

    <!-- Error state jika belum setup -->
    <div v-if="!loading && hasError" class="init-card">
      <div class="init-content">
        <h3>⚠️ Harap Setup Akuntansi Dahulu</h3>
        <p>Bagan Akun (Chart of Accounts) belum ditemukan. Pergi ke Buku Besar (Ledger) untuk melakukan inisialisasi akun.</p>
        <router-link to="/ledger" class="btn-primary" style="display:inline-block; text-decoration:none; margin-top: 1rem;">Pergi ke Buku Besar</router-link>
      </div>
    </div>

    <div v-if="loading" class="state-msg">
      Menyusun Neraca Keuangan... (Mungkin memakan waktu karena sistem mendata semua jurnal)
    </div>

    <!-- Tampilan Neraca (Dua Kolom) -->
    <div v-else-if="!hasError && report" class="sheet-grid">
      <!-- Sisi Kiri: ASSETS -->
      <div class="sheet-card asset-side">
        <h3>Aktiva (Aset)</h3>
        <table class="data-table">
          <tbody>
            <tr v-for="acc in report.assets" :key="acc.id">
              <td>{{ acc.code }} - {{ acc.name }}</td>
              <td class="text-right font-bold">{{ fmt(acc.balance) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="total-row">
              <td>Total Aset</td>
              <td class="text-right text-primary">Rp {{ fmt(report.totalAssets) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <!-- Sisi Kanan: LIABILITIES & EQUITY -->
      <div class="sheet-card equity-side">
        <h3>Pasiva (Kewajiban & Ekuitas)</h3>
        
        <div class="sub-heading">Kewajiban (Liabilities)</div>
        <table class="data-table">
          <tbody>
            <tr v-for="acc in report.liabilities" :key="acc.id">
              <td>{{ acc.code }} - {{ acc.name }}</td>
              <td class="text-right font-bold">{{ fmt(acc.balance) }}</td>
            </tr>
            <tr v-if="report.liabilities.length === 0">
              <td colspan="2" class="text-muted italic">Tidak ada akun kewajiban</td>
            </tr>
          </tbody>
        </table>

        <div class="sub-heading">Ekuitas & Modal (Equity)</div>
        <table class="data-table">
          <tbody>
            <tr v-for="acc in report.equities" :key="acc.id">
              <td>{{ acc.code }} - {{ acc.name }}</td>
              <td class="text-right font-bold">{{ fmt(acc.balance) }}</td>
            </tr>
            <tr v-if="report.equities.length === 0">
              <td colspan="2" class="text-muted italic">Tidak ada akun modal</td>
            </tr>
            <!-- Laba Bersih Tahun Berjalan -->
            <tr class="highlight-row">
              <td>Laba Bersih Berjalan (Net Income)</td>
              <td class="text-right font-bold text-success">{{ fmt(report.netIncome) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="total-row">
              <td>Total Kewajiban & Ekuitas</td>
              <td class="text-right text-primary">Rp {{ fmt(report.totalLiabilitiesAndEquity) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    
    <!-- Peringatan Balance -->
    <div v-if="!loading && !hasError && report" class="balance-check" :class="{ 'is-balanced': isBalanced }">
      Status Neraca: <strong>{{ isBalanced ? 'SEIMBANG (BALANCED) ✅' : 'TIDAK SEIMBANG ❌' }}</strong>
      <p v-if="!isBalanced" class="text-muted">Total Aset (Rp {{ fmt(report.totalAssets) }}) tidak sama dengan Total Kewajiban & Ekuitas (Rp {{ fmt(report.totalLiabilitiesAndEquity) }}). Periksa jurnal manual Anda.</p>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { getBalanceSheet } from '../../services/accountingService';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase';

const loading = ref(true);
const hasError = ref(false);
const report = ref(null);
const outletId = ref('');

const fmt = (n) => Number(n || 0).toLocaleString('id-ID');

const isBalanced = computed(() => {
  if (!report.value) return false;
  // Membandingkan dengan selisih yang sangat kecil untuk mengatasi pembulatan bilangan pecahan (floating point)
  return Math.abs(report.value.totalAssets - report.value.totalLiabilitiesAndEquity) < 0.1;
});

const loadData = async () => {
  loading.value = true;
  hasError.value = false;
  try {
    const user = auth.currentUser;
    if (!user) return;
    const snap = await getDoc(doc(db, 'users', user.uid));
    let oid = snap.data()?.outlet_id || localStorage.getItem('active_outlet_id');
    outletId.value = oid || '';

    if (outletId.value) {
      const data = await getBalanceSheet(outletId.value);
      if (data && data.error === 'needs_setup') {
        hasError.value = true;
      } else {
        report.value = data;
      }
    }
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};

onMounted(loadData);
</script>

<style scoped>
.balance-sheet-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.header h2 { margin: 0; color: #1a73e8; }
.header p { margin: 5px 0 0; color: #666; font-size: 0.95rem; }

.init-card {
  background: white;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.init-content h3 { color: #f57c00; margin-top: 0; }
.init-content p { color: #555; max-width: 600px; margin: 10px auto; }

.sheet-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: flex-start;
}

@media (max-width: 768px) {
  .sheet-grid { grid-template-columns: 1fr; }
}

.sheet-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.sheet-card h3 {
  margin-top: 0;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.5rem;
  color: #333;
}

.sub-heading {
  font-weight: bold;
  color: #1a73e8;
  margin: 1rem 0 0.5rem;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table td {
  padding: 0.6rem 0;
  border-bottom: 1px dashed #eee;
}

.data-table tfoot td {
  font-size: 1.1rem;
  font-weight: 800;
  border-top: 2px solid #ddd;
  border-bottom: none;
  padding-top: 1rem;
}

.font-bold { font-weight: bold; }
.text-right { text-align: right !important; }
.italic { font-style: italic; }
.text-muted { color: #999; }
.text-primary { color: #1565c0; }
.text-success { color: #2e7d32; }

.highlight-row { background: #f1f8e9; }
.highlight-row td { padding-left: 10px; padding-right: 10px; border-bottom: none; }

.balance-check {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 1.1rem;
  background: #ffebee;
  color: #c62828;
  border: 1px solid #ffcdd2;
}
.balance-check.is-balanced {
  background: #e8f5e9;
  color: #2e7d32;
  border-color: #c8e6c9;
}

.btn-primary {
  background: #1a73e8;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
}

.btn-primary:hover { background: #1557b0; }

.state-msg { color: #888; padding: 2rem; font-style: italic; text-align: center; }
</style>
