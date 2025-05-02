import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../ContextAPI/ContextProvider";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#080710]">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl text-white rounded-lg p-10 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block mb-1 text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email here..."
            className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-white" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password here..."
            className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black py-2 font-semibold rounded hover:bg-gray-200 transition"
        >
          Log In
        </button>

        <div className="flex gap-4 mt-4">
          <Link
             to="https://github.com/Mark1311"
            className="w-full bg-white/20 text-white py-2 rounded hover:bg-white/40 transition flex items-center justify-center gap-2"
          >
            <FaGithub />
            Github
          </Link>

          <Link
            to="https://www.linkedin.com/in/bittu-kumar09/"
            className="w-full bg-white/20 text-white py-2 rounded hover:bg-white/40 transition flex items-center justify-center gap-2"
          >
            <RxLinkedinLogo />
            Linkedin
          </Link>

        </div>

        <p className="text-center mt-4 text-white text-sm">
          Don't have an account? 
          <br/>
          <Link
            to="/register"
            className="underline text-white hover:text-gray-300"
          >
             Register here..
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
