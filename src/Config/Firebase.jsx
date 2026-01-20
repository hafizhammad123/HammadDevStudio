// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC_2MNfOMU7e5SY6rdub-_F4tLGMXFXX80",
    authDomain: "webinar-registrations-88b17.firebaseapp.com",
    projectId: "webinar-registrations-88b17",
    storageBucket: "webinar-registrations-88b17.firebasestorage.app",
    messagingSenderId: "803055682098",
    appId: "1:803055682098:web:f359131068b351e733f22b",
    measurementId: "G-800FLR40MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export { db, collection, addDoc };