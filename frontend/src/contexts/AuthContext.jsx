import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function signup(email, password) {
    const response = await Axios.post("http://localhost:6969/register", {
      username: email,
      password: password,
    });

    if (response.data.isLogged) {
      setCurrentUser(response.data);
      return navigate("/home");
    } else {
      throw response.data.status;
    }
  }

  async function login(email, password) {
    const response = await Axios.post("http://localhost:6969/login", {
      username: email,
      password: password,
    });
    setLoading(false);

    if (response.data.isLogged) {
      setCurrentUser(response.data);
      return navigate("/home");
    } else {
      throw response.data.status;
    }
  }

  function logout() {
    setCurrentUser();
    return signOut(auth);
  }
  function entryCheck() {
    if (!currentUser) navigate("/");
  }
  function innerCheck() {
    console.log(currentUser);
    if (currentUser) navigate("/home");
  }
  function signinmsg() {
    return currentUser && <p>Signed in as {currentUser.email}</p>;
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
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
