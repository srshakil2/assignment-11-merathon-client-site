// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcLYi1dQ252FZkp6v7ijhwuMd6-4qBDOM",
  authDomain: "merathon-client-side.firebaseapp.com",
  projectId: "merathon-client-side",
  storageBucket: "merathon-client-side.firebasestorage.app",
  messagingSenderId: "107519871250",
  appId: "1:107519871250:web:e90ecf2b1ef43efafc0bcb",
  measurementId: "G-Q9BLMY415Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
