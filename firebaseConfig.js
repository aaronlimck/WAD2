import { initializeApp } from "firebase/app";

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyC0nylLT6D4yodQ-TOJsZthFKG_KtCSLyg",
  authDomain: "bojiov3.firebaseapp.com",
  databaseURL:
    "https://bojiov3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bojiov3",
  storageBucket: "bojiov3.appspot.com",
  messagingSenderId: "56107733924",
  appId: "1:56107733924:web:b0c4c3175b6eb7fafd6731",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
