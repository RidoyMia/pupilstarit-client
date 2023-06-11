// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBggsAnqFquLnI8-9_F00l3EDmhIWXskmU",
  authDomain: "pupilstar-1e682.firebaseapp.com",
  projectId: "pupilstar-1e682",
  storageBucket: "pupilstar-1e682.appspot.com",
  messagingSenderId: "349706736599",
  appId: "1:349706736599:web:ac947c6ef625d91f887192",
  measurementId: "G-YNC74XVDCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;