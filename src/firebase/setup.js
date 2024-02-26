
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnyotcTNWOQX89VeoWEG20rLNznkKXW_M",
  authDomain: "britishexpresscars-stage.firebaseapp.com",
  projectId: "britishexpresscars-stage",
  storageBucket: "britishexpresscars-stage.appspot.com",
  messagingSenderId: "166331630098",
  appId: "1:166331630098:web:a53ddc02a93d2803ed0ecb",
  measurementId: "G-T8Z62CCHSD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);