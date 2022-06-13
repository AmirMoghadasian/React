// Import the functions i need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAJOFEvySr89d5fQzy11dL7R381QK8F1dI",
    authDomain: "myblog-ec9aa.firebaseapp.com",
    projectId: "myblog-ec9aa",
    storageBucket: "myblog-ec9aa.appspot.com",
    messagingSenderId: "676054411304",
    appId: "1:676054411304:web:101adb32cc9ae560c02d1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();