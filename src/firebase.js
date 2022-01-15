import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDHKfOgm3AqYdl0TniiHYFDpWVM6N1AMBk",
  authDomain: "linkedin-clone-56d9a.firebaseapp.com",
  projectId: "linkedin-clone-56d9a",
  storageBucket: "linkedin-clone-56d9a.appspot.com",
  messagingSenderId: "982590558865",
  appId: "1:982590558865:web:96aa2cb7b23c215f4fe530",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const dbV8 = firebase.initializeApp(firebaseConfig).firestore(app);
const auth = getAuth(app);

export { db, auth, dbV8 };
