import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const NavigateBasedOnStatus = () => {

  const {
    profileStatus,
    loginType,
    setIsAuthenticated,
    setIsLoading
  } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  console.log(profileStatus)
  useEffect(() => {
    if (profileStatus || loginType) {
        if (profileStatus == "new") {
            setIsLoading(false);
            if(!loginType){
                navigate(`/account/add-profile-details?login-type=email`);
            }else{
                navigate(`/account/add-profile-details?login-type=${loginType}`);
            }
          
          }
          if (profileStatus == "required_card") {
            setIsLoading(false);
            navigate(`/account/add-card-details`);
          }
          if (profileStatus == "completed") {
            setIsAuthenticated(true);
            setIsLoading(false);
            if (pathname) {
              navigate(`${pathname}`);
            } else {
              navigate("/");
            }
          }
    }
  }, [profileStatus, loginType]);

  return null;
};

export default NavigateBasedOnStatus;
