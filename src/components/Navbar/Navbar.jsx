import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Digital from "../Digital/Digital";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { currentUser, out } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await out();
    } catch {
      alert("logout failed!");
    }
    navigate("/");
  };
  return (
    <nav className="p-3 bg-sky-500 shadow md:flex md:items-center md:justify-between absolute w-screen">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-[Roboto] cursor-pointer">
          <img src="logo.svg" className="h-10 inline" />
          TaskTime
          <Digital />
        </span>
        <span className="text-3xl cursor-pointer mx-2 md:hidden block ">
          <ion-icon name="menu"></ion-icon>
        </span>
      </div>

      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-sky-500 w-full left-0 md:w-auto md:py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        {currentUser && (
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/calculator"
              className="text-xl text-white hover:text-gray-700 duration-500"
            >
              Calculator
            </Link>
          </li>
        )}

        {currentUser && (
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/clock"
              className="text-xl text-white hover:text-gray-700 duration-500"
            >
              Clock
            </Link>
          </li>
        )}

        {currentUser && (
          <li className="mx-4 my-6 md:my-0">
            <Link
              to="/todo"
              className="text-xl text-white hover:text-gray-700 duration-500"
            >
              Todo List
            </Link>
          </li>
        )}
        <li className="mx-4 my-6 md:my-0">
          <a
            href="https://sarguru.netlify.app/"
            className="text-xl text-white hover:text-gray-700 duration-500"
          >
            About Me
          </a>
        </li>

        {currentUser && (
          <li className="mx-4 my-6 md:my-0" onClick={logout}>
            <Link
              to="/"
              className="text-xl text-white hover:text-gray-700 duration-500"
            >
              Logout
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
