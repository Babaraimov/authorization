import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function FirebaseInit() {
  const firebaseConfig = {
    apiKey: "AIzaSyAyHOCFWom5KMfvXKPhxdtnJIn7TTXkBPA",
    authDomain: "shop-819c6.firebaseapp.com",
    databaseURL:
      "https://shop-819c6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shop-819c6",
    storageBucket: "shop-819c6.appspot.com",
    messagingSenderId: "69101945345",
    appId: "1:69101945345:web:33640899193376b1523600",
    measurementId: "G-WL7FJRKF66",
  };

  const app = initializeApp(firebaseConfig);
  const dataBase = getDatabase(app);
}

export default FirebaseInit;
