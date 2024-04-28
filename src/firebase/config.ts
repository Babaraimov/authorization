import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

function FireBaseInit() {
  const firebaseConfig = {
    apiKey: "AIzaSyCjQ65scY89Azzc-5SI_RLbspQjQmvICE8",
    authDomain: "shop1-28967.firebaseapp.com",
    projectId: "shop1-28967",
    storageBucket: "shop1-28967.appspot.com",
    messagingSenderId: "1058241603915",
    appId: "1:1058241603915:web:ea359823ea5a71d26160ce",
    measurementId: "G-G6DNRWBE7J",
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const database = getDatabase(app);
  return { auth, db, storage, database };
}

export default FireBaseInit;
