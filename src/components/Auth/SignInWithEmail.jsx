import React, { useRef, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { auth } from "../../firebase/setup";
import { useToastContext } from "../../Context/ToastContext";

const SignInWithEmail = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();
  const { setShowToast, setToastMessage } = useToastContext();

  const [isRegisterBtnClicked, setIsRegisterBtnClicked] = useState(false);
  const [displayAddCard, setDisplayAddCard] = useState(false);
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    console.log(email, password);
    setAuthErrorMessage("");
    
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setIsAuthenticated(true);
        setShowToast(true);
        setAuthErrorMessage("");
        setToastMessage("Logged in successfully!");
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthErrorMessage(errorMessage);
        console.log(errorCode, errorMessage);
      });
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
              className="w-full px-[20px] py-[10px] bg-blue-500 text-white "
            >
              Sign in
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
          className={`pl-[50px] mt-[-70px] flex flex-col min-w-full overflow-auto p-[20px]`}
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
