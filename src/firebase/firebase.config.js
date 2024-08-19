import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "poc-user-firebase",
  storageBucket: "poc-user-firebase.appspot.com",
  messagingSenderId: "785489412569",
  appId: "1:785489412569:web:b0bf107ab9b923f325d9c8"
};


initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db };