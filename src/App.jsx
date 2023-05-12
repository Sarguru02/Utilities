import React from "react";
import Clock from "./components/Clock/Clock";
import Calculator from "./components/Calculator/Calculator";
import Todo from "./components/Todo/Todo";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home/Home";
import Test from "./Test";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
        {/* <Test /> */}
      </AuthProvider>
    </>
  );
};

export default App;
