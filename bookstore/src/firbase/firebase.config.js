// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiYtNzgYCIYiKc4gUHkAqt8QEIfLgC5Og",
  authDomain: "mern-book-inventory-219b4.firebaseapp.com",
  projectId: "mern-book-inventory-219b4",
  storageBucket: "mern-book-inventory-219b4.appspot.com",
  messagingSenderId: "371247539356",
  appId: "1:371247539356:web:24fec8b8bd0c98b3ee3959"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;