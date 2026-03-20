import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyB8WQaZmOw5POUs2TvCA-89AyyFSn4uuCM",
  authDomain: "franchise-pos-959d6.firebaseapp.com",
  projectId: "franchise-pos-959d6",
  storageBucket: "franchise-pos-959d6.firebasestorage.app",
  messagingSenderId: "716844697746",
  appId: "1:716844697746:web:bfd9b461d9d2f326157e4b"
};

// Inisialisasi Firebase untuk aplikasi utama
const app = initializeApp(firebaseConfig);

// Ekspor instance untuk digunakan di seluruh aplikasi
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;