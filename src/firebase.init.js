
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtg1Y5mG2TG9FeWzrfe-tI1iRenxUQ_f8",
  authDomain: "ema-john-simple-47a16.firebaseapp.com",
  projectId: "ema-john-simple-47a16",
  storageBucket: "ema-john-simple-47a16.appspot.com",
  messagingSenderId: "91430974325",
  appId: "1:91430974325:web:3e9c25c5cc0a860831593c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
