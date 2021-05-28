import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmPKytbqvo3SxAekew6N3O112G80pKz2w",
  authDomain: "facebook-clone-next-f7b16.firebaseapp.com",
  projectId: "facebook-clone-next-f7b16",
  storageBucket: "facebook-clone-next-f7b16.appspot.com",
  messagingSenderId: "799406452545",
  appId: "1:799406452545:web:9957cb6a4c0cfd54b07bc0",
  measurementId: "G-G4GL4GZ5HN",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
