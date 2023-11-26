import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyC2CJFK77q4bVyocW5xBp2ZNMejNTdRa8U",
  authDomain: "e-library-1a3c3.firebaseapp.com",
  projectId: "e-library-1a3c3",
  storageBucket: "e-library-1a3c3.appspot.com",
  messagingSenderId: "461588273799",
  appId: "1:461588273799:web:754a59146133520bb23622"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


