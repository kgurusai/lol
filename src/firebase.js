// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi54W4yUNUElnOwNNYg9PC2DKlVNpIr44",
  authDomain: "supra-f4429.firebaseapp.com",
  projectId: "supra-f4429",
  storageBucket: "supra-f4429.appspot.com",
  messagingSenderId: "934001969116",
  appId: "1:934001969116:web:bea113075dc4d52a6db119",
  measurementId: "G-4N86BRKG41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);