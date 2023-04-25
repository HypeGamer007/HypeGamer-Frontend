import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCx8mQQ4erv2gVIHakHtg_RTOkRRbdvmNc",
    authDomain: "hypegamer-frontend.firebaseapp.com",
    projectId: "hypegamer-frontend",
    storageBucket: "hypegamer-frontend.appspot.com",
    messagingSenderId: "780234801102",
    appId: "1:780234801102:web:1d54dfe6a443f2317b759f",
    measurementId: "G-MPSMWS8994"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Auth and Firestore services
export const auth = firebase.auth();
export const firestore = firebase.firestore();