import React, { useEffect, useState } from "react";
import { emailValidator, passwordValidator } from "./regexValidator";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [errmsg, setErrmsg] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, innerCheck } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    innerCheck();
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitter = async (e) => {
    e.preventDefault();
    if (!emailValidator(input.email)) return setErrmsg("Email is not valid");
    if (!passwordValidator(input.password))
      return setErrmsg(
        "Password should have at least 8 characters with combination of lowercase, uppercase and special characters"
      );
    try {
      setErrmsg("");
      setLoading(true);
      await login(input.email, input.password);
      navigate("/home");
    } catch {
      setErrmsg("Failed to login");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-img bg-cover">
      <form onSubmit={submitter}>
        <div className="bg-white/50 w-96 p-6 rounded-md shadow-sm">
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
          {errmsg.length > 0 && (
            <div className="text-red-600 my-5 text-center">{errmsg}</div>
          )}
          <button
            disabled={loading}
            className="outline w-full bg-white outline-blue-500 rounded text-gray-700 hover:bg-blue-500 hover:text-gray-100 my-5"
          >
            Login
          </button>
          <p className="text-gray-700 text-center">
            Need an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-800">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
