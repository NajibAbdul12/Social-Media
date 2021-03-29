import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAjnJ0xYSb9_aEVLer-F4zk72IDLHPmGYE",
    authDomain: "socialv-2846e.firebaseapp.com",
    projectId: "socialv-2846e",
    storageBucket: "socialv-2846e.appspot.com",
    messagingSenderId: "1053869357049",
    appId: "1:1053869357049:web:5d283c115f9f89addeaf28"
});

export default firebaseConfig;