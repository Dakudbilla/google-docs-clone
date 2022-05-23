// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSLqdCtXBMD-3Mdqdwi8U7-0NmjwP4yXg",
  authDomain: "docs-clone-c4b42.firebaseapp.com",
  projectId: "docs-clone-c4b42",
  storageBucket: "docs-clone-c4b42.appspot.com",
  messagingSenderId: "663435297112",
  appId: "1:663435297112:web:cb2c570e83dcd134aba52d",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
//initialize database
export const fireStoreDatabase = getFirestore(firebaseApp);
