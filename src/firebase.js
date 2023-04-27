import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgmeweDDH5i0eft7Q2HeS6zlDFhHaeMRs",
  authDomain: "chat-zavrsni.firebaseapp.com",
  projectId: "chat-zavrsni",
  storageBucket: "chat-zavrsni.appspot.com",
  messagingSenderId: "44128719584",
  appId: "1:44128719584:web:aea5376fc3153dc72bb685"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth ();
export const storage = getStorage();
export const db = getFirestore();