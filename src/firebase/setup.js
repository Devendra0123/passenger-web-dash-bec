
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXaItmmVim0OeOIkMRBhipe6opUOVsRyo",
  authDomain: "test-3eda8.firebaseapp.com",
  projectId: "test-3eda8",
  storageBucket: "test-3eda8.appspot.com",
  messagingSenderId: "219606668435",
  appId: "1:219606668435:web:6eb31389d688c2ef3aa966",
  measurementId: "G-T25YGBHGHQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);