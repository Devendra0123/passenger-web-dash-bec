import React, { useEffect, useState } from "react";
import OTPVerification from "./OTPVerificationInput";
import { useAuthContext } from "../../Context/AuthContext";
import RegisterViaPhoneForm from "./RegisterViaPhoneForm";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
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
  const [phoneNumberSubmitStatus, setPhoneNumberSubmitStatus] = useState({
    pending: false,
  });
  const [phoneNumberSubmitError, setPhoneNumberSubmitError] = useState("");

  // Handle Phone number submit
  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    setHasOtpBeenSent(false);

    const appVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
      size: "invisible",
    });
    setPhoneNumberSubmitStatus({
      pending: true,
    });

    console.log(enteredPhoneNumber)
    await signInWithPhoneNumber(auth, enteredPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        setPhoneNumberSubmitStatus({
          pending: false,
        });
        setConfirmationResult(confirmationResult);
        setHasOtpBeenSent(true);
      })
      .catch((error) => {
        console.log(error);
        setPhoneNumberSubmitStatus({
          pending: false,
        });

        const errorCode = error.code;
        const errorMessage = error.message;
        setPhoneNumberSubmitError(errorMessage);
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
            <div>
              <label>Enter your phone number:</label>
              <PhoneInput
                defaultCountry="gb"
                value={enteredPhoneNumber}
                onChange={(phone) => setEnteredPhoneNumber(phone)}
                className="w-[300px] mt-[5px] rounded-[4px] bg-white"
                inputStyle={{
                  border: "none"
                }}
              />
            </div>
            {phoneNumberSubmitError && (
              <p className="text-primary text-[15px] font-[500]">
                {phoneNumberSubmitError}
              </p>
            )}
            <button
              onClick={() => {
                navigate(`/login?loginWith=phone&step=verify-otp`);
              }}
              disabled={phoneNumberSubmitStatus.pending | (enteredPhoneNumber?.length < 5)}
              className="w-[300px] mt-[20px] bg-blue-500 text-white text-[17px] font-semibold px-[20px] py-[8px] "
            >
              {phoneNumberSubmitStatus.pending ? (
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
                "Send OTP"
              )}
            </button>
          </form>

          <p className="mt-[70px] text-[13px]">
            OTP will be send to your number.
          </p>
        </div>

        {/* Otp verification */}
        <div className={`${!hasOtpBeenSent && "hidden"} pl-[50px] min-w-full p-[20px]`}>
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
