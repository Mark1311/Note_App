import React, { useContext, createContext, useState } from "react";

const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => setUser(user);
  // const logout = () => setUser(null);
  return (
    <authContext.Provider value={{ user, login }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
export default ContextProvider;
