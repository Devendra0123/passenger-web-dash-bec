import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const INITIAL_STATE = {
  user: null,
  token: "",
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false,
};

const AuthContext = createContext(INITIAL_STATE);

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check and set User
  const checkAndSetUser = ()=>{
    const currentAccount = localStorage.getItem("user");

    if (currentAccount === "undefined") {
      localStorage.removeItem("user");
      setUser();
      setIsAuthenticated(false);
    }
    if (currentAccount && currentToken) {
      setUser(JSON.parse(currentAccount));
      setIsAuthenticated(true)
    };
  }
  
  useEffect(() => {
    checkAndSetUser()
  }, []);

  // Check auth user
  const checkAuthUser = () => {
    setIsLoading(true);
    try {
      const currentAccount = localStorage.getItem("user");

      if (currentAccount && currentToken) {
        const user = JSON.parse(currentAccount);
        setUser(user);
        setIsAuthenticated(true);
        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // Logout user
  const removeUser = async () => {
    localStorage.removeItem("user");
    setUser();
    setIsAuthenticated(false);
  };

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
    removeUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);