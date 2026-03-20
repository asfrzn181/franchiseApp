import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

// Fungsi untuk mengambil semua staff yang terdaftar di outlet tertentu
export const getStaffByOutlet = async (outletId) => {
  try {
    const q = query(
      collection(db, "users"), 
      where("outlet_id", "==", outletId),
      where("role", "==", "staff")
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching staff:", error);
    throw error;
  }
};