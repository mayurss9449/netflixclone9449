
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyDNVdSLuHr4wNkeqVHFQ4M97rXPym7M2KM",
  
    authDomain: "netflix-clone9449.firebaseapp.com",
  
    projectId: "netflix-clone9449",
  
    storageBucket: "netflix-clone9449.appspot.com",
  
    messagingSenderId: "152763610202",
  
    appId: "1:152763610202:web:83a5ea58ce004a40fe1463"
  
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth} ;
  export default db;

  









