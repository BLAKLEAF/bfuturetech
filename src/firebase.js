// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAawrxFfXLYhr6twDSUOxnFMMnYSYErp58",
  authDomain: "bfuturetech-80e18.firebaseapp.com",
  projectId: "bfuturetech-80e18",
  storageBucket: "bfuturetech-80e18.appspot.com",
  messagingSenderId: "396673062780",
  appId: "1:396673062780:web:86195d354bafb3c38f36f9",
  measurementId: "G-94KX493SLT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };