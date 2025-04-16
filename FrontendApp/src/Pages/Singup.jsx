import React, { useState } from "react";
import axios from 'axios';

const Singup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            const response = await axios.post('http://localhost:5000/api/auth/register', {name,email,password});
            console.log(response)
        }catch(error){
            console.log(error)

        }
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Singup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700"> Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              className="w-full px-3 py-2 border"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700"> Name</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full px-3 py-2 border"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700"> Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-3 py-2 border"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2"
            >
              Singup
            </button>
            <p className="text-center">
              Alredy Have a Account <a href="">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;
