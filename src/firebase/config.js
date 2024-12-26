//* Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

//* Add the Web App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnbxBGtScLxWWOfcG5a-l2xiO4FglvCEA",
  authDomain: "inta-app-45a26.firebaseapp.com",
  projectId: "inta-app-45a26",
  storageBucket: "inta-app-45a26.firebasestorage.app",
  messagingSenderId: "253720038692",
  appId: "1:253720038692:web:ba826b47daaaa30c40b7b1",
};

//* Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

//* Initialize Firebase Auth and set persistence
const auth = getAuth(firebase_app);
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to LOCAL");
  })
  .catch((error) => {
    console.error("Failed to set session persistence:", error);
  });

export { auth };
export default firebase_app;
