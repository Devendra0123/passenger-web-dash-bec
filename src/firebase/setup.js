
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyChDuLtc-pZBgBQnrIfZLGyqXXEq3PbG50",
  authDomain: "britishexpresscars-dev.firebaseapp.com",
  projectId: "britishexpresscars-dev",
  storageBucket: "britishexpresscars-dev.appspot.com",
  messagingSenderId: "901350777917",
  appId: "1:901350777917:web:3191207cb28088b228b654",
  measurementId: "G-CXPJ7HRR5B"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);