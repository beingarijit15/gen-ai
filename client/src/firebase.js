// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWWXGnkryT4VON1EgAeN_Voi0kl_HVjZA",
  authDomain: "gen-1-5833e.firebaseapp.com",
  projectId: "gen-1-5833e",
  storageBucket: "gen-1-5833e.firebasestorage.app",
  messagingSenderId: "167820203452",
  appId: "1:167820203452:web:057a5043bf0866cc3247b9",
  measurementId: "G-BKYJEY6WQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
