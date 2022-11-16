// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAxdUdHssjbmb0j5iptt8RIeaLBrU9klDw",
  authDomain: "spark-32586.firebaseapp.com",
  projectId: "spark-32586",
  storageBucket: "spark-32586.appspot.com",
  messagingSenderId: "46259718833",
  appId: "1:46259718833:web:aaf9966504c31d2ce9b090",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
