import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbFPDR-BRNrtqJVrTj-yqKsa0YBWV5R7Q",
  authDomain: "dccn-88eb0.firebaseapp.com",
  projectId: "dccn-88eb0",
  storageBucket: "dccn-88eb0.appspot.com",
  messagingSenderId: "129847427723",
  appId: "1:129847427723:web:f1c78aeacda0026403ca8e",
  measurementId: "G-P9SHTP904X"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestoreDb = firebase.firestore();


export default firestoreDb;
