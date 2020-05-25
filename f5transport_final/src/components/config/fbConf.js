import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Initialize firebase
var Config = {
  apiKey: "AIzaSyDqgr8ATqrR5ZCe59e3U1Z1ZZi2vWh5-1Q",
  authDomain: "finaltransport-7c5ce.firebaseapp.com",
  databaseURL: "https://finaltransport-7c5ce.firebaseio.com",
  projectId: "finaltransport-7c5ce",
  storageBucket: "finaltransport-7c5ce.appspot.com",
  messagingSenderId: "953173505683",
  appId: "1:953173505683:web:301131f65f7ed340a8bf66",
  measurementId: "G-LS4H7VRSN3",
};
// Initialize Firebase
firebase.initializeApp(Config);

firebase.firestore();

export default firebase;
