// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJSwMEJdHKq9xwRWBo7jMX5VmG469R6iQ",
    authDomain: "car-garaze.firebaseapp.com",
    projectId: "car-garaze",
    storageBucket: "car-garaze.appspot.com",
    messagingSenderId: "80587232538",
    appId: "1:80587232538:web:54857f425a46fe1f5408a3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;