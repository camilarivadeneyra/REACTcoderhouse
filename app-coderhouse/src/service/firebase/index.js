import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAC5KnuZYV3j2iMQpQKsNFb6LKhGe8_YbQ",
    authDomain: "terranatural-96747.firebaseapp.com",
    projectId: "terranatural-96747",
    storageBucket: "terranatural-96747.appspot.com",
    messagingSenderId: "855273167339",
    appId: "1:855273167339:web:32d10acf26f8b7ea16a1ae",
    measurementId: "G-NLDS864XBB"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)