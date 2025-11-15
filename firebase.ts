// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5TurJQK1urUf-bSalo3L3IdYeMvXWHn0",
  authDomain: "ojas-ai-de7b9.firebaseapp.com",
  projectId: "ojas-ai-de7b9",
  storageBucket: "ojas-ai-de7b9.appspot.com",
  messagingSenderId: "134268464086",
  appId: "1:134268464086:web:03187931ccaf8fe5ca9277",
  measurementId: "G-6YMR9ZYP0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
