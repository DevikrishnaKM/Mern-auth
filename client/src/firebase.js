// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-de3a1.firebaseapp.com",
  projectId: "mern-auth-de3a1",
  storageBucket: "mern-auth-de3a1.appspot.com",
  messagingSenderId: "402405523619",
  appId: "1:402405523619:web:9821e99cfebf25fa10bf16"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

