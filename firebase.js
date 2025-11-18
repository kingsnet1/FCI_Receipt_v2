// firebase.js - scaffolding. Replace the placeholders with your Firebase project's config.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
  // Load compat libraries if firebase isn't present yet
  function loadScript(src, onload) {
    const s = document.createElement('script');
    s.src = src; s.defer = true;
    if (onload) s.onload = onload;
    document.head.appendChild(s);
  }

  if (typeof window.firebase === 'undefined') {
    // Use a known stable compat version for simple projects
    loadScript('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
    loadScript('https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js');
    loadScript('https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js', function() {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        }
        console.log('Firebase loaded and initialized.');
      } catch (e) {
        console.error('Firebase init error:', e);
      }
    });
  } else {
    try {
      if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    } catch (e) { console.error(e); }
  }
})();
