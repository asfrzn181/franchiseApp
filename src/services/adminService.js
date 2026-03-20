import { initializeApp, deleteApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

// Import config dan db utama
import { db, firebaseConfig } from "../firebase";

/**
 * Registrasi Owner Baru oleh Super Admin
 * (Tanpa me-logout Super Admin yang sedang login)
 */
export const registerOwnerDirectly = async (email, password, name) => {
  // 1. Buat Instance Bayangan khusus Admin
  const adminSecondaryApp = initializeApp(firebaseConfig, "AdminSecondaryApp");
  const adminSecondaryAuth = getAuth(adminSecondaryApp);

  try {
    // 2. Buat akun Owner di Auth (via Instance Bayangan)
    const res = await createUserWithEmailAndPassword(adminSecondaryAuth, email, password);
    const newOwnerUid = res.user.uid;

    // 3. Simpan Profil Owner ke Firestore
    await setDoc(doc(db, "users", newOwnerUid), {
      name: name,
      email: email,
      role: 'owner',
      status: 'active',
      outlet_id: null, // Owner baru belum punya outlet sampai dia buat sendiri
      created_at: serverTimestamp()
    });

    // 4. Bersihkan Session Bayangan
    await signOut(adminSecondaryAuth);
    await deleteApp(adminSecondaryApp);

    return { success: true, uid: newOwnerUid };
  } catch (error) {
    // Hapus instance jika gagal agar tidak bentrok
    try { await deleteApp(adminSecondaryApp); } catch (e) { /* ignore */ }
    throw error;
  }
};