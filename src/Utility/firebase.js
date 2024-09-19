import firebase from "firebase/compat/app";

import { getAuth } from 'firebase/auth'
import "firebase/compat/firestore"
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmm2U0EcRuJYvLeU-8i168R1qoSl20_ME",
  authDomain: "clone-evangadi-2024.firebaseapp.com",
  projectId: "clone-evangadi-2024",
  storageBucket: "clone-evangadi-2024.appspot.com",
  messagingSenderId: "541618558773",
  appId: "1:541618558773:web:bb870fc732ace2cc951e7c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore