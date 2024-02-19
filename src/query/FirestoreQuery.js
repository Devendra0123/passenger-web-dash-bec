import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/setup";

export async function getPassengerProfileData() {
  try {
    const docRef = doc(
      db,
      "passengers",
      "OX31VWd3i9gMFN2VomoPxaRvj9o1-76",
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
