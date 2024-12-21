// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNQ43PY1JqNeKskZ3tSpj2q4flXW8Tuxc",
  authDomain: "sempiterno-61c71.firebaseapp.com",
  projectId: "sempiterno-61c71",
  storageBucket: "sempiterno-61c71.firebasestorage.app",
  messagingSenderId: "407450507797",
  appId: "1:407450507797:web:43fcee759bbb3cf5e78c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)