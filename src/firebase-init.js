// src/firebase-init.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, child, get, runTransaction } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvyL7Mi3OVMN4fnZU-_5S6_-tQ_W5ivM0",
    authDomain: "engr-enes100tool-inv-firebase.firebaseapp.com",
    databaseURL: "https://engr-enes100tool-inv-firebase-safety-log.firebaseio.com",
    projectId: "engr-enes100tool-inv-firebase",
    storageBucket: "engr-enes100tool-inv-firebase.appspot.com",
    messagingSenderId: "763916402491",
    appId: "1:763916402491:web:4a62dfad59d68b95aa811e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the Realtime Database service
export const database = getDatabase(app);

// Export all necessary Realtime Database functions
export { app, ref, set, push, child, get, runTransaction };
