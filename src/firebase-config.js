// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCiGtA9NHnFJ4TN1PxAbDgHl7UXfcjMoRM",

  authDomain: "scheduleasy-d17f5.firebaseapp.com",

  projectId: "scheduleasy-d17f5",

  storageBucket: "scheduleasy-d17f5.appspot.com",

  messagingSenderId: "645588070028",

  appId: "1:645588070028:web:b8d041823b7e552c9995a9"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();