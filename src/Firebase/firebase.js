import firebase from 'firebase/app';
import 'firebase/firestore'
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAac2HqLlggKg3Bv0otn0MTpx9xqbDW9ok",
  authDomain: "discord-clone-bb91e.firebaseapp.com",
  databaseURL: "https://discord-clone-bb91e.firebaseio.com",
  projectId: "discord-clone-bb91e",
  storageBucket: "discord-clone-bb91e.appspot.com",
  messagingSenderId: "54288423744",
  appId: "1:54288423744:web:b6b8ea75f3955bd92778a5",
  measurementId: "G-XD6V9MGBY7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}

export default db;
