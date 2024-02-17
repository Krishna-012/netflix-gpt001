// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5o25mlFEx9fuL74di1EhJ35FDKEXRsjg",
  authDomain: "netflixgpt02-b1ca5.firebaseapp.com",
  projectId: "netflixgpt02-b1ca5",
  storageBucket: "netflixgpt02-b1ca5.appspot.com",
  messagingSenderId: "174385206082",
  appId: "1:174385206082:web:ede32494f9e9da8f766edb",
  measurementId: "G-XJSB1TZ6YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();