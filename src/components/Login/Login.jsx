import React, { useState } from "react";
import { emailValidator, passwordValidator } from "./regexValidator";

function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [errmsg, setErrmsg] = useState("");

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitter = (e) => {
    e.preventDefault();
    if (!emailValidator(input.email)) return setErrmsg("Email is not valid");
    if (!passwordValidator(input.password))
      return setErrmsg(
        "Password should have at least 8 characters with combination of lowercase, uppercase and special characters"
      );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-img bg-cover">
      <form onSubmit={submitter}>
        <div className="bg-white/50 w-96 p-6 rounded shadow-sm">
          <label htmlFor="mailid" className="text-gray-700">
            Email
          </label>
          <input
            className="w-full py-2 bg-gray-200 text-gray-500 px-1 outline-none mb-4"
            type="text"
            id="mailid"
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="pwd" className="text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full py-2 bg-gray-200 text-gray-500 px-1 outline-none mb-4"
            id="pwd"
          />
          {errmsg.length > 0 && (
            <div className="text-red-600 my-5 text-center">{errmsg}</div>
          )}
          <button className="outline w-full bg-white outline-blue-500 rounded text-gray-700 hover:bg-blue-500 hover:text-gray-100 my-5">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
