import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then(
      (user_new) => {
        setCurrentUser(user_new);
      }
    );
  }
  function out() {
    setCurrentUser();
    return signOut(auth);
  }
  function entryCheck() {
    if (!currentUser) navigate("/");
  }
  function innerCheck() {
    if (currentUser) navigate("/calculator");
  }
  function signinmsg() {
    return currentUser && <p>Signed in as {currentUser.email}</p>;
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe();
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    out,
    entryCheck,
    innerCheck,
    signinmsg,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
