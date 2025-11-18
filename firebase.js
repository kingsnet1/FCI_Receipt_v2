// firebase.js - scaffolding. Replace the placeholders with your Firebase project's config.
const firebaseConfig = {
  apiKey: "REPLACE_WITH_YOUR_API_KEY",
  authDomain: "REPLACE_WITH_YOUR_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_YOUR_PROJECT_ID",
  storageBucket: "REPLACE_WITH_YOUR_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_YOUR_MESSAGING_SENDER_ID",
  appId: "REPLACE_WITH_YOUR_APP_ID"
};

(function() {
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
