import axios from "axios";
import React, { useContext, createContext, useState, useEffect } from "react";

const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // const login = (user) => setUser(user);
  const login = (userData, token) => {
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("token");

      // Token null ho toh verify request mat bhejo
      if (!token) {
        console.log("No token found in localStorage");
        setUser(null);
        return;
      }

      try {
        const res = await axios.get(
          "https://note-app-l2da.onrender.com/api/auth/verify",
          {
            // const res = await axios.get("http://localhost:5000/api/auth/verify", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log("Token:", token); // Debug ke liye

        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Verify error:", error); // Error clearly dikhaye console me
        setUser(null);
      }
    };

    verifyUser();
  }, []);

  return (
    <authContext.Provider value={{ user, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
export default ContextProvider;
