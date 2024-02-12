import React, { useEffect, useState } from "react";
import OTPVerification from "./OTPVerificationInput";
import { useAuthContext } from "../../Context/AuthContext";
import RegisterViaPhoneForm from "./RegisterViaPhoneForm";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/setup";

const SignInWithPhone = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [otp, setOtp] = useState();
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState();
  const [hasOtpBeenSent, setHasOtpBeenSent] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true);

  // Handle Phone number submit
  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    setHasOtpBeenSent(false);

    const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });

    await signInWithPhoneNumber(auth, enteredPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        setHasOtpBeenSent(true);
      })
      .catch((error) => {
        console.log(error);
        setHasOtpBeenSent(false);
      });
  };

  // Verify OTP
  const verifyOTP = async (value) => {
    console.log(value);
    try {
      await confirmationResult.confirm(value).then((res) => {
        console.log("verified");
        if (isNewUser) {
          navigate(`/register?registerVia=phone`);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex flex-col items-start gap-[20px] mt-[50px]">
      <div id="recaptcha-container"></div>
      <div
        style={{
          transform:
            hasOtpBeenSent && !isOtpVerified
              ? "translateX(-100%)"
              : isOtpVerified
              ? "translateX(-200%)"
              : "translateX(0%)",
        }}
        className="w-[100%] flex transition duration-150 ease-in-out"
      >
        <div className={`pl-[50px] min-w-full p-[20px]`}>
          <h2 className="text-[25px] text-start font-semibold">
            Sign in with phone number
          </h2>

          <form
            onSubmit={handlePhoneNumberSubmit}
            className="mt-[20px] flex flex-col"
          >
            <label>Enter your phone number:</label>
            <PhoneInput
              country={"us"}
              value={enteredPhoneNumber}
              onChange={(phone) => setEnteredPhoneNumber("+" + phone)}
              className="w-[300px] bg-light_gray border border-primary mt-[5px] rounded-[4px]"
            />

            <button
              onClick={() => {
                navigate(`/login?loginWith=phone&step=verify-otp`);
              }}
              className="w-[300px] mt-[20px] bg-blue-500 text-white text-[19px] font-semibold px-[20px] py-[8px] "
            >
              Send OTP
            </button>
          </form>

          <p className="mt-[70px] text-[13px]">
            OTP will be send to your number.
          </p>
        </div>

        {/* Otp verification */}
        <div className={`pl-[50px] min-w-full p-[20px]`}>
          <h2 className="text-[25px] text-start font-semibold">
            OTP Verification
          </h2>
          <p className="mt-[20px]">
            Enter the OTP code send to your phone number
          </p>
          <OTPVerification verifyOtp={(otpValue) => verifyOTP(otpValue)} />
        </div>

        {/* Register form */}
        <div
          className={`pl-[50px] mt-[-70px] flex flex-col min-w-full overflow-auto p-[20px]`}
        >
          <h2 className="text-[25px] text-start font-semibold">
            Register Account
          </h2>
          <p className="mt-[20px]">Fill the details to register your account</p>
          <RegisterViaPhoneForm
            handleRegisterFormSubmit={() => {
              setIsAuthenticated(true);
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInWithPhone;
