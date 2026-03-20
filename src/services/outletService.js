import { db, auth } from "../firebase";
import { collection, addDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";

export const setupInitialOutlet = async (outletData) => {
  const user = auth.currentUser;
  if (!user) throw new Error("Tidak ada user yang login");

  try {
    // 1. Buat dokumen outlet baru
    const outletRef = await addDoc(collection(db, "outlets"), {
      name: outletData.name,
      address: outletData.address,
      owner_id: user.uid,
      created_at: serverTimestamp()
    });

    // 2. Update field outlet_id di dokumen user (Owner)
    const userRef = doc(db, "users", user.uid);
    await updateDoc(userRef, {
      outlet_id: outletRef.id
    });

    return outletRef.id;
  } catch (error) {
    console.error("Gagal setup outlet:", error);
    throw error;
  }
};