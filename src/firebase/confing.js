// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBFyE1MRGruoLDTriEuGzILmNBcU_VSlU",
  authDomain: "react-840f2.firebaseapp.com",
  projectId: "react-840f2",
  storageBucket: "react-840f2.appspot.com",
  messagingSenderId: "490143495543",
  appId: "1:490143495543:web:e3599dcbd4f2b5f4299d72"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );