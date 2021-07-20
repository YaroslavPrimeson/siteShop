import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyDbLlNL1xtVEpaaVFK4017z4rLGpsXvZnA",
    authDomain: "barista-center.firebaseapp.com",
    projectId: "barista-center",
    storageBucket: "barista-center.appspot.com",
    messagingSenderId: "281287337096",
    appId: "1:281287337096:web:a17b35599437d9f633eb3d",
    measurementId: "G-MESWJ21PT3"
};
export const fire = firebase.initializeApp(firebaseConfig);