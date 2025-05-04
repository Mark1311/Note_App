import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../ContextAPI/ContextProvider";
import icon from "../Img/icon.png";
import face from "../Img/face.png";

const NavBar = ({ setQuery }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center flex-wrap">
      <div className="text-xl font-bold flex items-center space-x-2 mb-4 sm:mb-0">
        <Link to="/" className="flex items-center space-x-2">
          <img src={icon} alt="Logo" className="w-8 h-8" />
          <span>NotesApp</span>
        </Link>
      </div>

      {/* Search Input - make it responsive */}
      <input
        type="text"
        placeholder="Search Notes Here...."
        className="bg-gray-900 px-4 py-2 rounded w-full sm:w-80 md:w-96 lg:w-100 mb-4 sm:mb-0"
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Login/Signup or User Info - wrap to new line on small screens */}
      <div className="flex items-center space-x-4 flex-shrink-0 w-full sm:w-auto sm:space-x-4 justify-between sm:justify-start sm:mt-0 mt-4">
        {!user ? (
          <>
            <Link
              to="/login"
              className="bg-blue-500 px-4 py-2 rounded text-sm sm:text-base"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 px-4 py-2 rounded text-sm sm:text-base"
            >
              Signup
            </Link>
          </>
        ) : (
          <div className="flex items-center justify-between w-full max-w-md">
            <img src={face} alt="Logo" className="w-8 h-8" />
            <span className="mx-4 flex-1 text-center text-sm sm:text-base">
              {user.name}
            </span>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
