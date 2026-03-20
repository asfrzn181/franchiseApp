const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.addStaffByOwner = functions.https.onCall(async (data, context) => {
  // 1. Cek apakah yang manggil sudah login
  if (!context.auth) {
    throw new functions.https.HttpsError("unauthenticated", "Login dulu bro!");
  }

  // 2. Cek apakah yang manggil beneran Owner (Security Check)
  const callerUid = context.auth.uid;
  const callerDoc = await admin.firestore().collection("users").doc(callerUid).get();
  
  if (callerDoc.data().role !== "owner") {
    throw new functions.https.HttpsError("permission-denied", "Cuma Owner yang bisa nambah staff!");
  }

  const { email, password, outletId } = data;

  try {
    // 3. Buat User di Firebase Auth (Server-side)
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
    });

    // 4. Buat Profil di Firestore
    await admin.firestore().collection("users").doc(userRecord.uid).set({
      email: email,
      role: "staff",
      outlet_id: outletId,
      created_at: admin.firestore.FieldValue.serverTimestamp(),
    });

    return { success: true, message: "Staff berhasil didaftarkan!" };
  } catch (error) {
    throw new functions.https.HttpsError("internal", error.message);
  }
});