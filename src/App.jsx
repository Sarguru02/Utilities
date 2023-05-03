import React from "react";
import Clock from "./components/Clock/Clock";
import Calculator from "./components/Calculator/Calculator";
import Todo from "./components/Todo/Todo";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </>
  );
};

export default App;
