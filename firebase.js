// firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkofsFfG3XxbXUyFWVodvZ1i074YpTxkY",
  authDomain: "fci-receipt-system.firebaseapp.com",
  projectId: "fci-receipt-system",
  storageBucket: "fci-receipt-system.firebasestorage.app",
  messagingSenderId: "878350453454",
  appId: "1:878350453454:web:23b4815a32076880ab9e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Auth for use in other scripts
export const db = getFirestore(app);
export const auth = getAuth(app);
