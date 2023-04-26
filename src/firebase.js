import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMiT9cKfweIciBy5oEKUPzkfbkdjHNDJk",
  authDomain: "chat-app-45adf.firebaseapp.com",
  projectId: "chat-app-45adf",
  storageBucket: "chat-app-45adf.appspot.com",
  messagingSenderId: "557565391551",
  appId: "1:557565391551:web:f210778b198e7bc808cc0a",
  measurementId: "G-6FR2TKPN8S"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth ();
export const storage = getStorage();
export const db = getFirestore();