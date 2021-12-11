import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1AxTrfVGEXft9RYdsKTmea7QadKiFNUY",
  authDomain: "message-app-8a992.firebaseapp.com",
  projectId: "message-app-8a992",
  storageBucket: "message-app-8a992.appspot.com",
  messagingSenderId: "840172892290",
  appId: "1:840172892290:web:b58e20294839fe8dd5849b",
  // measurementId: "${config.measurementId}"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
