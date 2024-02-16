import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");
  const [uid, setUid] = useState("");
  // Check and set User
  const checkAndSetAuthToken = () => {
    const auth_token = localStorage.getItem("auth_Token");

    if (
      (auth_token == "undefined") |
      (auth_token == "") |
      (auth_token == null)
    ) {
      setAuthToken();
      // setIsAuthenticated(false);
    } else {
      setAuthToken(auth_token);
    }
  };

  useEffect(() => {
    checkAndSetAuthToken();
  }, []);

  const value = {
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    authToken,
    setAuthToken,
    uid,
    setUid
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
