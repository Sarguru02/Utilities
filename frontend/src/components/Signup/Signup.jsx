import React, { useEffect, useState } from "react";
import { emailValidator, passwordValidator } from "./regexValidator";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function Signup() {
  const [input, setInput] = useState({ email: "", password: "", cfr: "" });
  const [errmsg, setErrmsg] = useState("");
  const { signup, innerCheck } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  async function submitter(e) {
    e.preventDefault();
    if (!emailValidator(input.email)) return setErrmsg("Email is not valid");
    if (!passwordValidator(input.password))
      return setErrmsg(
        "Password should have at least 8 characters with combination of lowercase, uppercase and special characters"
      );
    if (input.password !== input.cfr)
      return setErrmsg("Passwords do not match ");
    try {
      setErrmsg("");
      setLoading(true);
      await signup(input.email, input.password);
    } catch (err) {
      setErrmsg(err);
    }
    setLoading(false);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-img bg-cover">
      <form onSubmit={submitter}>
        <div className="bg-white/50 w-96 p-6 rounded-md shadow-sm">
          <h1 className="text-gray-700 text-xl text-center py-5">Sign Up</h1>
          <label htmlFor="mailid" className="text-gray-700">
            Email
          </label>
          <input
            className="w-full py-2 bg-sky-200 text-gray-500 px-1 outline-none mb-4"
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
            className="w-full py-2 bg-sky-200 text-gray-500 px-1 outline-none mb-4"
            onChange={handleChange}
            id="pwd"
          />
          <label htmlFor="pwd" className="text-gray-700">
            Password Confirmation
          </label>
          <input
            type="password"
            name="cfr"
            className="w-full py-2 bg-sky-200 text-gray-500 px-1 outline-none mb-4"
            onChange={handleChange}
            id="confirm"
          />
          {errmsg.length > 0 && (
            <div className="text-red-600 my-5 text-center">{errmsg}</div>
          )}
          <button
            className="outline w-full bg-white outline-blue-500 rounded text-gray-700 hover:bg-blue-500 hover:text-gray-100 my-5"
            disabled={loading}
          >
            Sign up
          </button>
          <p className="text-gray-700 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-800">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
