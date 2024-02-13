import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");

  // Check and set User
  const checkAndSetAuthToken = () => {
    const auth_token = localStorage.getItem("auth_Token");

    if ((auth_token == "undefined") | (auth_token == "") | (auth_token == null)) {
      setAuthToken();
      setIsAuthenticated(false);
    } else {
      setAuthToken(auth_token);
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAndSetAuthToken();
  }, []);

  console.log(authToken, isAuthenticated);

  const value = {
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    authToken,
    setAuthToken,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
