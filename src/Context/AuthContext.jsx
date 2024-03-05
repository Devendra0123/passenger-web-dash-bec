import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { getProfileStatus } from "../query/AuthQuery";
import { useLocation, useNavigate } from "react-router-dom";
import $ from "jquery"

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuthToken] = useState("");
  const [uid, setUid] = useState("");
  const [firebaseReferenceID, setFirebaseReferenceID] = useState();
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
        const { profile_status, firebase_reference } = status.data;
        setFirebaseReferenceID(firebase_reference);
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
        setIsAuthenticated(false);
        localStorage.removeItem("auth_Token");
        navigate("/login");
      }
    } else {
      setIsLoading(false);
      setIsAuthenticated(false);
    }
  };

  // Get Passenger Session
  const getSession = async()=>{
    $.ajax({
      method: "GET",
    xhrFields: {
          withCredentials: true
      },
      url: "https://britishexpresscars.test/passenger-session"
    })
    .done(function(data){
      const {auth_token,session} = data;
      console.log(data)
      if(auth_token == null){
        navigate("/login");
      }
    })
    .catch((error) => {
     
    })
    .fail(function(){
      alert("uh oh it failed");
    })
  }

  useEffect(() => {
    getSession()
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
    firebaseReferenceID,
    setFirebaseReferenceID,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
