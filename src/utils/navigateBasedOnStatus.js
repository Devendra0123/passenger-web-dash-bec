
export const navigateBasedOnStatus = (status,loginType,navigate)=>{

  console.log(status, loginType)
    if (status || loginType) {
        if (status == "new") {
          const targetPath = loginType
            ? `/account/add-profile-details?login-type=${loginType}`
            : "/account/add-profile-details?login-type=email";
            console.log(targetPath)
          navigate(targetPath);
        } else if (status === "required_card") {
          navigate("/account/add-card-details");
        } else if (status === "completed") {
          navigate('/');
        }
      }
}