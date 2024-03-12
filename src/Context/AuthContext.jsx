import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
  getProfileStatus,
  loginPassenger,
  postSession,
} from "../query/AuthQuery";
import { useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../firebase/setup";
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
    console.log('adsdgffd')
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
        console.log(profile_status,"profile status")
        if (profile_status == "new") {
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
        console.log(error,'Auth error')
        setIsLoading(false);
        setIsAuthenticated(false);
        localStorage.removeItem("auth_Token");
        navigate("/login");
      }
    } else {
      // setIsLoading(false);
      // setIsAuthenticated(false);
      getSession();
    }
  };
  // Get Passenger Session
  const getSession = async () => {
    $.ajax({
      method: "GET",
      xhrFields: {
        withCredentials: true,
      },
      url: `${import.meta.env.VITE_SESSION_URL}`,
    })
      .done(function (data) {
        const { auth_token } = data;
        console.log(data);
        if (auth_token == null) {
          setIsLoading(false);
          navigate("/login");
        }
        if (auth_token) {
          // Sign in with custom domain
          signInWithCustomToken(auth, auth_token)
            .then(async (userCredential) => {
              const user = userCredential.user;
              console.log(user);
              if (user?.uid) {
                const userData = {
                  uid: user?.uid,
                  email: user?.email,
                  mobile: user?.phoneNumber,
                };
                // Hit login api
                await loginPassenger(userData).then(async (res) => {
                  if (res?.data) {
                    console.log(res?.data);
                    setIsLoading(false);
                    setUid(user.uid);
                    setAuthToken(res?.data?.auth_token);
                    localStorage.getItem("auth_Token");
                    if (res?.data?.auth_token) {
                      // Check status of user
                      console.log("calling status");
                      await checkAndSetAuthToken();
                      // await postSession(userData,res?.data?.auth_token);
                    }
                  }
                });
              }
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setIsLoading(false);
              setIsAuthenticated(false);
              localStorage.removeItem("auth_Token");
              navigate("/login");
              // ...
            });
        } else {
          setIsLoading(false);
          setIsAuthenticated(false);
          localStorage.removeItem("auth_Token");
          navigate("/login");
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsAuthenticated(false);
        localStorage.removeItem("auth_Token");
        navigate("/login");
      })
      .fail(function () {
        alert("Something went wrong!");
      });
  };
  useEffect(() => {
    console.log('abcdedf')
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





