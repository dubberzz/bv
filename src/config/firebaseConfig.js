import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAYMzbnkGlRds0xy7zJHmvl_DwQtf2__8A",
    authDomain: "licentafacultate-531ab.firebaseapp.com",
    projectId: "licentafacultate-531ab",
    storageBucket: "licentafacultate-531ab.appspot.com",
    messagingSenderId: "836847063335",
    appId: "1:836847063335:web:4fb073bf11b8505fd5d902",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const database = getFirestore(app);

export const storage = getStorage(app);