import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCc-q06T70C6r4y9udfF_-du447Z1Y59cI",
  authDomain: "authdevversion.firebaseapp.com",
  projectId: "authdevversion",
  storageBucket: "authdevversion.appspot.com",
  messagingSenderId: "729873900462",
  appId: "1:729873900462:web:4fc48dba7cffe8e2cede3f",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
