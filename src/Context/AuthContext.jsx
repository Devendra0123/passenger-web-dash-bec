import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getProfileStatus } from "../query/AuthQuery";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken] = useState("");
  const [uid, setUid] = useState("");
  // Check and set User
  const checkAndSetAuthToken = async () => {
    const auth_token = localStorage.getItem("auth_Token");

    if (
      (auth_token == "undefined") |
      (auth_token == "") |
      (auth_token == null) |
      !auth_token
    ) {
      setAuthToken();
    } else {
      setAuthToken(auth_token);
    }

    if (auth_token) {
      setIsLoading(true);
      try {
        const status = await getProfileStatus(auth_token);
        const { profile_status } = status.data;
        if (profile_status == "required_profile") {
          setIsLoading(false);
          navigate(`/account/add-profile-details?login-type=email`);
        }
        if (profile_status == "required_card") {
          setIsLoading(false);
          navigate(`/account/add-card-details`);
        }
        if (profile_status == "completed") {
          setIsAuthenticated(true);
          setIsLoading(false);
          if (pathname) {
            navigate(`${pathname}`);
          } else {
            navigate("/");
          }
        }
      } catch (error) {
        setIsLoading(false);
        setIsAuthenticated(false)
        localStorage.removeItem('auth_Token')
        navigate('/login')
      }
    } else {
      setIsLoading(false);
      setIsAuthenticated(false)
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
    setUid,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
