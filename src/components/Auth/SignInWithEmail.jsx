import React, { useRef, useState, useTransition } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/setup";
import { useToastContext } from "../../Context/ToastContext";
import { loginPassenger } from "../../query/AuthQuery";

const SignInWithEmail = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated, setAuthToken, setUid } = useAuthContext();
  const { setShowToast, setToastMessage } = useToastContext();

  const [isRegisterBtnClicked, setIsRegisterBtnClicked] = useState(false);
  const [displayAddCard, setDisplayAddCard] = useState(false);
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [signInStatus, setSignInStatus] = useState({
    pending: false,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    setAuthErrorMessage("");

    try {
      setSignInStatus({ pending: true });

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const credential = {
        uid: user.uid,
        email,
      };

      // Backend Login logic after successful firebase sign-in
      const res = await loginPassenger(credential);

      const { auth_token, profile_status } = res.data;
      console.log(res);
      setUid(user.uid);
      setAuthToken(auth_token);
      // Save the auth token in localStorage
      localStorage.setItem("auth_Token", auth_token);

      if (profile_status == "required_profile") {
        navigate(`/account/add-profile-details?login-type=email`);
      }
      if (profile_status == "required_card") {
        navigate(`/account/add-card-details`);
      }
      
      setSignInStatus({ pending: false });
      // setIsAuthenticated(true);
      // setShowToast(true);
      // setToastMessage("Logged in successfully!");
      // navigate("/");
      // console.log(user);
    } catch (error) {
      setSignInStatus({ pending: false });

      const errorCode = error.code || "unknown";
      const errorMessage = error.message || "An error occurred";
      setAuthErrorMessage(errorMessage);
      console.error(errorCode, errorMessage);
    }
  };

  return (
    <div className="w-full flex flex-col items-start gap-[20px] mt-[50px]">
      <div
        style={{
          transform:
            isRegisterBtnClicked && !displayAddCard
              ? "translateX(-100%)"
              : displayAddCard
              ? "translateX(-200%)"
              : "translateX(0%)",
        }}
        className="w-[100%] flex transition duration-150 ease-in-out"
      >
        <div className={`pl-[50px] min-w-full p-[20px]`}>
          <h2 className="text-[25px] text-start font-semibold">
            Sign in with Email
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-[75%] flex flex-col gap-[15px] mt-[20px]"
          >
            <div className="flex flex-col gap-[5px]">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleOnChange}
                className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
              />
            </div>
            {authErrorMessage && (
              <p className="text-primary text-[15px] font-[500]">
                {authErrorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={signInStatus.pending}
              className="w-full px-[20px] py-[10px] bg-blue-500 text-white "
            >
              {signInStatus.pending ? (
                <span className="flex items-center gap-[3px] justify-center ">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ..."
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path d="M0 11c.511-6.158 5.685-11 12-11s11.489 4.842 12 11h-2.009c-.506-5.046-4.793-9-9.991-9s-9.485 3.954-9.991 9h-2.009zm21.991 2c-.506 5.046-4.793 9-9.991 9s-9.485-3.954-9.991-9h-2.009c.511 6.158 5.685 11 12 11s11.489-4.842 12-11h-2.009z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          <div className="mt-[40px] w-full flex justify-end text-end">
            <p>
              Don't have account?
              <span
                onClick={() => {
                  setIsRegisterBtnClicked(true);
                  navigate(`/register?registerVia=email`);
                }}
                className="cursor-pointer text-primary pl-[5px]"
              >
                Register
              </span>
            </p>
          </div>
        </div>

        {/* Add Card
        <div
          className={`pl-[50px] mt-[-70px] flex flex-col min-w-full h-[70%] overflow-y-auto p-[20px] pb-[30px]`}
        >
          <h2 className="text-[25px] text-start font-semibold">
            Add Card Details
          </h2>
          <AddCardFields />
        </div> */}
      </div>
    </div>
  );
};

export default SignInWithEmail;
