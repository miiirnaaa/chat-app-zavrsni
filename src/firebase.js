import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyAANIgrjtrnK7TXm8EiA-s0v8V9L1w2ctw",
  // authDomain: "chat-e5b29.firebaseapp.com",
  // projectId: "chat-e5b29",
  // storageBucket: "chat-e5b29.appspot.com",
  // messagingSenderId: "708777732831",
  // appId: "1:708777732831:web:b11dc572cc67f1b802976a",
  // apiKey: "AIzaSyDBTEhJCdZiT0w3YAASO-y_IJPB-yHs4ac",
  // authDomain: "chat-app-d7940.firebaseapp.com",
  // projectId: "chat-app-d7940",
  // storageBucket: "chat-app-d7940.appspot.com",
  // messagingSenderId: "938696904955",
  // appId: "1:938696904955:web:ff08cf131b930cb232e05e",
  // measurementId: "G-Q8TPKKP4QP"
  apiKey: "AIzaSyAgmeweDDH5i0eft7Q2HeS6zlDFhHaeMRs",
  authDomain: "chat-zavrsni.firebaseapp.com",
  projectId: "chat-zavrsni",
  storageBucket: "chat-zavrsni.appspot.com",
  messagingSenderId: "44128719584",
  appId: "1:44128719584:web:aea5376fc3153dc72bb685"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
