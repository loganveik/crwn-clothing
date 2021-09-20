import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyD1wOBvr5wqbO2yD9am4f--E-9EAmE301g",
    authDomain: "crwn-db-6764a.firebaseapp.com",
    projectId: "crwn-db-6764a",
    storageBucket: "crwn-db-6764a.appspot.com",
    messagingSenderId: "962003102776",
    appId: "1:962003102776:web:ba771cf4efd46288e54acd",
    measurementId: "G-W1QWJ7FFR9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;