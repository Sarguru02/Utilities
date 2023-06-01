import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Home() {
  const { entryCheck } = useAuth();
  useEffect(() => {
    entryCheck();
  });
  return (
    <div className="bg-new w-screen h-screen bg-cover flex flex-col justify-center items-center font-bold ">
      <span className="text-9xl text-sky-300">Welcome !</span>
      <p className="text-gray-300">Navigate to my projects </p>
      <div className="w-1/3 h-1/3 flex justify-around items-center">
        <Link
          to="/calculator"
          className="bg-pattern text-gray-600 w-[100px] h-[100px] rounded shadow-sm flex items-center justify-center cursor-pointer"
        >
          Calc
        </Link>
        <Link
          to="/Todo"
          className="bg-pattern text-gray-600 w-[100px] h-[100px] rounded shadow-sm flex items-center justify-center cursor-pointer"
        >
          Todo
        </Link>
      </div>
    </div>
  );
}

export default Home;
