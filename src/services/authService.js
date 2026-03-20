import { getApp, getApps, initializeApp, deleteApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";

// PASTIKAN import db, auth, DAN firebaseConfig dari file firebase.js lo
import { auth, db, firebaseConfig } from "../firebase";
import { validateInviteCode } from "./inviteService";

// 1. Registrasi Owner (User Pertama)
export const registerOwner = async (email, password, name) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "users", user.uid), {
    name: name,
    email: email,
    role: "owner",
    outlet_id: null,
    created_at: serverTimestamp()
  });
  return user;
};

// 2. Registrasi Staff Manual (Menggunakan Join Code)
export const registerStaffWithCode = async (email, password, code) => {
  const inviteData = await validateInviteCode(code);
  if (!inviteData) throw new Error("Kode tidak valid atau sudah kadaluarsa.");

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", user.uid), {
    email: email,
    role: "staff",
    outlet_id: inviteData.outlet_id,
    created_at: serverTimestamp()
  });

  const inviteRef = doc(db, "invites", inviteData.id);
  await updateDoc(inviteRef, { 
    status: "used",
    used_by: user.uid 
  });

  return user;
};

// 3. Registrasi Staff oleh Owner (JALUR GRATISAN - Tanpa Logout Owner)
export const registerStaffDirectly = async (email, password, outletId) => {
  // 1. Inisialisasi App kedua (Secondary) agar session owner tidak tertimpa
  const apps = getApps();
  let secondaryApp = apps.find(app => app.name === "SecondaryAuth");
  
  if (!secondaryApp) {
    secondaryApp = initializeApp(firebaseConfig, "SecondaryAuth");
  }
  
  const secondaryAuth = getAuth(secondaryApp);

  try {
    // 2. Buat user di Auth Secondary
    const res = await createUserWithEmailAndPassword(secondaryAuth, email, password);
    const newStaffUid = res.user.uid;

    // 3. Simpan ke Firestore (pakai instance db utama)
    await setDoc(doc(db, "users", newStaffUid), {
      email: email,
      role: 'staff',
      outlet_id: outletId,
      created_at: serverTimestamp()
    });

    // 4. Logout dari session secondary & hapus instance app secondary
    await signOut(secondaryAuth);
    await deleteApp(secondaryApp); 

    return { success: true };
  } catch (error) {
    // Jika gagal, hapus instance secondaryApp agar tidak nyangkut
    if (secondaryApp) {
      await deleteApp(secondaryApp).catch(e => console.log('Clean up secondary app warning:', e));
    }
    throw error;
  }
};

// 4. Login Umum
export const loginUser = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  const userSnap = await getDoc(doc(db, "users", user.uid));

  if (!userSnap.exists()) {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      role: "owner",
      outlet_id: null,
      created_at: serverTimestamp()
    }, { merge: true });
  }
  return user;
};

// 5. Logout Utama
export const logoutUser = () => signOut(auth);