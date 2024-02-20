import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/setup";

// Get passenger profile data
export async function getPassengerProfileData() {
  try {
    const docRef = doc(
      db,
      "passengers",
      "yvY1kbCCHDZLsJE8CB4r2RNWssf1-73",
      "data",
      "profile"
    );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
      return;
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}

// Get passenger notice data
export async function getPassengerNoticeData() {
  try {
  
    const querySnapshot  = await getDocs(
      collection(db, "passengers", "yvY1kbCCHDZLsJE8CB4r2RNWssf1-73", "notices")
    );

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data()
    }));

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}

// Get passenger card data
export async function getPassengerCardData() {
  try {
  
    const querySnapshot  = await getDocs(
      collection(db, "passengers", "yvY1kbCCHDZLsJE8CB4r2RNWssf1-73", "cards")
    );

    const data = querySnapshot.docs.map((doc) => ({
      data: doc.data()
    }));

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}

// Get passenger notification data
export async function getPassengerNotificationData() {
  try {
    const querySnapshot  = await getDocs(
      collection(db, "passengers", "yvY1kbCCHDZLsJE8CB4r2RNWssf1-73", "notifications")
    );

    const data = querySnapshot.docs.map((doc) => ({
      data: doc.data()
    }));

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching document:", error);
  }
}