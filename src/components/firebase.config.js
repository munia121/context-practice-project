// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm8vSDzVy2J1fA023xHpTbbEgOoKxJKNU",
  authDomain: "context-book-project.firebaseapp.com",
  projectId: "context-book-project",
  storageBucket: "context-book-project.appspot.com",
  messagingSenderId: "239077049916",
  appId: "1:239077049916:web:18658e73869fbd5cc9e539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;