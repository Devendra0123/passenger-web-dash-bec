
export const navigateBasedOnStatus = (status,navigate)=>{

  console.log(status)
    if (status) {
        if (status == "new") {
          navigate(`/account/add-profile-details`);
        } else if (status === "required_card") {
          navigate("/account/add-card-details");
        } else if (status === "completed") {
          navigate('/');
        }
      }
}