import { db } from "../firebase";
import { collection, addDoc, getDocs, query, where, serverTimestamp } from "firebase/firestore";

// Fungsi buat kode unik (Owner)
export const generateJoinCode = async (outletId) => {
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  const docRef = await addDoc(collection(db, "invites"), {
    code: code,
    outlet_id: outletId,
    role: "staff",
    status: "active",
    created_at: serverTimestamp()
  });
  return { id: docRef.id, code };
};

// Fungsi cek kode (Staff)
export const validateInviteCode = async (code) => {
  const q = query(
    collection(db, "invites"), 
    where("code", "==", code), 
    where("status", "==", "active")
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
};