import React, { useEffect, useState } from "react";
import OTPVerification from "./OTPVerificationInput";
import { useAuthContext } from "../../Context/AuthContext";
import RegisterViaPhoneForm from "./RegisterViaPhoneForm";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/setup";
import { loginPassenger } from "../../query/AuthQuery";

const SignInWithPhone = () => {
  const navigate = useNavigate();

  const { setIsAuthenticated, setAuthToken, setUid } = useAuthContext();
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState();
  const [hasOtpBeenSent, setHasOtpBeenSent] = useState(false);
  const [phoneNumberSubmitStatus, setPhoneNumberSubmitStatus] = useState({
    pending: false,
  });
  const [otpVerificationStatus, setOtpVerificationStatus] = useState({
    pending: false,
  });
  const [phoneNumberSubmitError, setPhoneNumberSubmitError] = useState("");
  const [otpVerificationError, setOtpVerificationError] = useState("");
  const [otpResendTime, setOtpResendTime] = useState();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isResendingOtp, setIsResendingOtp] = useState(false);

  // Start resend otp countdown
  const startCountdown = () => {
    const countdownInterval = setInterval(() => {
      setOtpResendTime((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(countdownInterval);
          setIsButtonDisabled(false);
          return 0;
        } else {
          return prevCountdown - 1;
        }
      });
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearInterval(otpResendTime);
    };
  }, []);

  // Handle Phone number submit
  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);
    setPhoneNumberSubmitError();
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
    }

    const appVerifier = window.recaptchaVerifier;

    recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });

    setPhoneNumberSubmitStatus({
      pending: true,
    });

    await signInWithPhoneNumber(auth, enteredPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        setPhoneNumberSubmitStatus({
          pending: false,
        });
        setConfirmationResult(confirmationResult);
        setHasOtpBeenSent(true);
        setOtpResendTime(70);
        startCountdown();
        navigate(`/login?loginWith=phone&step=verify-otp`);
      })
      .catch((error) => {
        console.log(error);
        setPhoneNumberSubmitStatus({
          pending: false,
        });

        const errorCode = error.code;
        const errorMessage = error.message;
        setPhoneNumberSubmitError(errorMessage);
        setOtpResendTime();
      });
  };

  // Verify OTP
  const verifyOTP = async (value) => {
    console.log(value);
    setOtpVerificationError("");
    try {
      setOtpVerificationStatus({ pending: true });
      const userCredential = await confirmationResult.confirm(value);
      const { uid } = userCredential.user;

      const credential = {
        uid: uid,
        mobile: enteredPhoneNumber,
      };
      const res = await loginPassenger(credential);
      const { auth_token, profile_status } = res.data;
      console.log(res);
      setUid(uid);
      setAuthToken(auth_token);
      // Save the auth token in localStorage
      localStorage.setItem("auth_Token", auth_token);
      setOtpVerificationStatus({ pending: false });
      if (profile_status == "required_profile") {
        navigate(`/account/add-profile-details?login-type=mobile`);
      }
      if (profile_status == "required_card") {
        navigate(`/account/add-card-details`);
      }
      if (profile_status == "completed") {
        setIsAuthenticated(true);
        navigate("/");
      }
    } catch (error) {
      setOtpVerificationStatus({ pending: false });
      const errorCode = error.code;
      const errorMessage = error.message;
      setOtpVerificationError(errorMessage);
    }
  };

  console.log(isResendingOtp);
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
                  border: "none",
                }}
              />
            </div>
            {phoneNumberSubmitError && (
              <p className="text-primary text-[15px] font-[500]">
                {phoneNumberSubmitError}
              </p>
            )}
            <button
              disabled={
                phoneNumberSubmitStatus.pending |
                (enteredPhoneNumber?.length < 5) |
                isButtonDisabled
              }
              className={`w-[300px] mt-[20px] ${
                isButtonDisabled | phoneNumberSubmitStatus.pending
                  ? "bg-blue-500/50"
                  : "bg-blue-500"
              } text-white text-[17px] font-semibold px-[20px] py-[8px] `}
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
        <div
          className={`${
            !hasOtpBeenSent && "hidden"
          } pl-[50px] min-w-full p-[20px]`}
        >
          <h2 className="text-[25px] text-start font-semibold">
            OTP Verification
          </h2>
          <p className="mt-[20px]">
            Enter the OTP code send to your phone number
          </p>
          <OTPVerification
            verifyOtp={(otpValue) => verifyOTP(otpValue)}
            isPending={otpVerificationStatus.pending}
            otpResendTime={otpResendTime}
            isBtnDisabled={isButtonDisabled}
            resendOTP={async (e) => {
              setIsResendingOtp(true);
              setOtpVerificationError('');
              setPhoneNumberSubmitError('')
              await handlePhoneNumberSubmit(e);
              setIsResendingOtp(false);
            }}
            isResendingOTP={isResendingOtp}
            errorMessage={otpVerificationError ? otpVerificationError : phoneNumberSubmitError}
          />
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
