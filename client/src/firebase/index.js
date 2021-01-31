import firebase from 'firebase/app';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyANUFgcwKk3uNeySzVilwnF-Wh2jhNR6sI",
    authDomain: "snip-its-e47cb.firebaseapp.com",
    projectId: "snip-its-e47cb",
    storageBucket: "snip-its-e47cb.appspot.com",
    messagingSenderId: "397278925332",
    appId: "1:397278925332:web:89cda143eb9b1dbff00d01",
    measurementId: "G-XBSNTHRGNF"
  };

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export {storage , firebase as default};