
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6BRxHoO1CT-ENXN0Aj40y2ab0DZz_Kd8",
  authDomain: "carboncredit-635f8.firebaseapp.com",
  projectId: "carboncredit-635f8",
  storageBucket: "carboncredit-635f8.firebasestorage.app",
  messagingSenderId: "169995732483",
  appId: "1:169995732483:web:c0fa3a73d171a60f96f036",
  measurementId: "G-0TFPXGQFL8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);