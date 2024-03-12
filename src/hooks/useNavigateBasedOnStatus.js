import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

const useNavigationBasedOnStatus = () => {
  const {
    profileStatus,
    loginType,
    setIsAuthenticated,
    setIsLoading
  } = useAuthContext();

  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  useEffect(() => {
    const handleNavigation = () => {
      if (profileStatus || loginType) {
        if (profileStatus === "new") {
          setIsLoading(false);
          const targetPath = loginType
            ? `/account/add-profile-details?login-type=${loginType}`
            : "/account/add-profile-details?login-type=email";
          navigate(targetPath);
        } else if (profileStatus === "required_card") {
          setIsLoading(false);
          navigate("/account/add-card-details");
        } else if (profileStatus === "completed") {
          setIsAuthenticated(true);
          setIsLoading(false);
          const targetPath = pathname ? `${pathname}` : "/";
          navigate(targetPath);
        }
      }
    };

    handleNavigation();
  }, [profileStatus, loginType, setIsAuthenticated, setIsLoading, navigate, pathname]);

  return null;
};

export default useNavigationBasedOnStatus;
