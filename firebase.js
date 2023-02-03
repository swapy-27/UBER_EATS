
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "reactnative-ubereats-6a31d.firebaseapp.com",
  projectId: "reactnative-ubereats-6a31d",
  storageBucket: "reactnative-ubereats-6a31d.appspot.com",
  messagingSenderId: "1034792911156",
  appId: "1:1034792911156:web:9fa13bf73f4281a4e2a561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;