import React from "react";
import Singup from "./Pages/Singup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Singup />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
