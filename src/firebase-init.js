// src/firebase-init.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, child, get, runTransaction } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkYIwQSF4iDpLn7DNzf1_yrcbeRMib_2w",
    authDomain: "enes100-safety-log-test.firebaseapp.com",
    databaseURL: "https://enes100-safety-log-test-default-rtdb.firebaseio.com",
    projectId: "enes100-safety-log-test",
    storageBucket: "enes100-safety-log-test.firebasestorage.app",
    messagingSenderId: "28227395667",
    appId: "1:28227395667:web:a85674b512e27068de26a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the Realtime Database service
export const database = getDatabase(app);

// Export all necessary Realtime Database functions
export { app, ref, set, push, child, get, runTransaction };
