import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../ContextAPI/ContextProvider";
import icon from "../Img/icon.png";

const NavBar = ({ setQuery }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold flex items-center space-x-2">
        <Link to="/" className="flex items-center space-x-2">
          <img src={icon} alt="Logo" className="w-8 h-8" />
          <span>NoteApp</span>
        </Link>
      </div>
      <input
        type="text"
        placeholder="Serach Notes"
        className="bg-gray-900 px-4 py-2 rounded"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {!user ? (
          <>
            <Link to="/login" className="bg-blue-500 px-4 py-2 rounded mr-4">
              Login
            </Link>
            <Link to="/register" className="bg-blue-500 px-4 py-2 rounded mr-4">
              Singup
            </Link>
          </>
        ) : (
          <>
            <span className="mr-4"> {user.name}</span>
            <button className="bg-red-500 px-4 py-2 rounded" onClick={logout}>
              {" "}
              LogOut
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
