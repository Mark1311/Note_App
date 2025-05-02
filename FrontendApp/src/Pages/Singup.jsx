import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Singup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://note-app-l2da.onrender.com/api/auth/register",
        // "http://localhost:5000/api/auth/register",
        { name, email, password }
      );
      console.log(response);
      if (response.data.success) {
        navigate("/login");
      }
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
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <div className="mb-4">
          <label className="block mb-1 text-white" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name here..."
            className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-white" htmlFor="email">
            Email
          </label>
          <input
            type="email"
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
          Signup
        </button>

        <p className="text-center mt-4 text-white text-sm">
          Already have an account?
          <Link
            to="/login"
            className="underline text-white hover:text-gray-300"
          >
            <br/>
            Login here...
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Singup;
