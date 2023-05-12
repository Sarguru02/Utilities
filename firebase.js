// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc-q06T70C6r4y9udfF_-du447Z1Y59cI",
  authDomain: "authdevversion.firebaseapp.com",
  projectId: "authdevversion",
  storageBucket: "authdevversion.appspot.com",
  messagingSenderId: "729873900462",
  appId: "1:729873900462:web:4fc48dba7cffe8e2cede3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)