import React, { useRef, useState, useTransition } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/setup";
import {
  getProfileStatus,
  loginPassenger,
  postSession,
} from "../../query/AuthQuery";
import { FaTimes } from "react-icons/fa";
import { Box, Modal } from "@mui/material";
import { navigateBasedOnStatus } from "../../utils/navigateBasedOnStatus";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "600px",
  minHeight: "400px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const SignInWithEmail = () => {
  const navigate = useNavigate();
  const {
    setIsAuthenticated,
    setAuthToken,
    setUid,
    setFirebaseReferenceID,
    loginType,
  } = useAuthContext();

  const [isRegisterBtnClicked, setIsRegisterBtnClicked] = useState(false);
  const [displayAddCard, setDisplayAddCard] = useState(false);
  const [open, setOpen] = useState(false);
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const [passwordResetEmail, setPasswordResetEmail] = useState("");
  const [passwordResetFormStatus, setPasswordResetFormStatus] = useState({
    pending: false,
    message: "",
    error: "",
  });
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

  // Handle Submit
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

      const { auth_token } = res.data;

      setUid(user.uid);
      setAuthToken(auth_token);
      // Save the auth token in localStorage
      localStorage.setItem("auth_Token", auth_token);

      // Get Profile Status
      const status = await getProfileStatus(auth_token);
      const { profile_status, firebase_reference } = status.data;

      setFirebaseReferenceID(firebase_reference);

      // Session post
      await postSession(credential, auth_token);

      setSignInStatus({ pending: false });
      if (profile_status == "completed") {
        setIsAuthenticated(true);
      }
      navigateBasedOnStatus(profile_status, navigate);
    } catch (error) {
      setSignInStatus({ pending: false });

      const errorCode = error.code || "unknown";
      const errorMessage = error.message || "An error occurred";
      setAuthErrorMessage(errorMessage);
      console.error(errorCode, errorMessage);
    }
  };

  // Handle Password Reset
  const handlePasswordReset = async () => {
    if (!passwordResetEmail) return;
    setPasswordResetFormStatus({
      pending: true,
      message: "",
      error: "",
    });
    try {
      await sendPasswordResetEmail(auth, passwordResetEmail).then((res) => {
        setPasswordResetFormStatus({
          pending: false,
          message:
            "Password reset email sent! Check your mail to reset password.",
          error: "",
        });
      });
    } catch (error) {
      setPasswordResetFormStatus({
        pending: false,
        message: "",
        error: error.message,
      });
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
                required
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
                required
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

            <div className="w-full flex justify-end ">
              <button
                type="button"
                onClick={(e) => {
                  setOpen(true);
                }}
                className="bg-none text-[12px] text-slate-700"
              >
                Forgot Password?
              </button>
            </div>
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
      </div>

      {/* Forgot Password modal */}
      {open && (
        <div>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className=" flex flex-col gap-[20px] ">
                <div className="flex items-center justify-between">
                  <h2 className="text-primary text-lg font-bold">
                    Forgot Password?
                  </h2>
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-[20px] right-[20px]"
                  >
                    <FaTimes className="text-primary" size={20} />
                  </button>
                </div>
                <h3 className="font-[600] w-full md:w-[75%] ">
                  Did you forget your password? Enter your email id to reset
                  your password.
                </h3>

                <div className="w-full lg:w-[300px] flex flex-col gap-[10px]">
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    value={passwordResetEmail}
                    onChange={(e) => setPasswordResetEmail(e.target.value)}
                    className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
                  />
                  <button
                    type="button"
                    onClick={handlePasswordReset}
                    disabled={
                      !passwordResetEmail || passwordResetFormStatus?.pending
                    }
                    className={`${
                      !passwordResetEmail || passwordResetFormStatus?.pending
                        ? "bg-blue-500/50"
                        : "bg-blue-500"
                    } px-[20px] py-[7px] text-white rounded-[4px]`}
                  >
                    {passwordResetFormStatus.pending ? (
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
                      "Submit"
                    )}
                  </button>

                  {passwordResetFormStatus.message && (
                    <p className="text-green-500 text-[14px]">{passwordResetFormStatus.message}</p>
                  )}

                  {passwordResetFormStatus.error && (
                    <p className="text-red-500 text-[14px]">{passwordResetFormStatus.error}</p>
                  )}
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default SignInWithEmail;
