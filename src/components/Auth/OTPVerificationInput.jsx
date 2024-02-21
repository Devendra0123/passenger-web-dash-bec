import React, { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import Loader2 from "../Element/Loader2";

const OTPVerification = ({
  verifyOtp,
  isPending,
  otpResendTime,
  isBtnDisabled,
  resendOTP,
  isResendingOTP,
  errorMessage
}) => {

  const inputRefs = Array(6)
    .fill(0)
    .map((_, i) => useRef(null));

  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  // Handle Input value change
  const handleInputChange = (index, e) => {
    const value = e.target.value;

    setOtpValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });

    if (index < inputRefs.length - 1 && e.target.value !== "") {
      inputRefs[index + 1].current.focus();
    }
  };

  // Get OTP string
  const getOtpString = () => {
    return otpValues.join("");
  };

  console.log(isResendingOTP)
  return (
    <div className="w-[370px] flex flex-col gap-[20px]">
      <div className="w-full flex items-center justify-between gap-[20px] mt-[10px]">
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            ref={ref}
            type="text"
            maxLength="1"
            onInput={(e) => handleInputChange(index, e)}
            className="w-[40px] h-[40px] rounded-[5px] bg-blue-200 text-center"
          />
        ))}
      </div>

      {
        errorMessage && (
          <p className="text-red-500 text-[14px]">
            {errorMessage}
          </p>
        )
      }
      <button
        onClick={() => {
          const enteredOtp = getOtpString();
          console.log(enteredOtp);
          if (enteredOtp) {
            verifyOtp(enteredOtp);
          }
        }}
        disabled={isPending | !getOtpString()}
        className={`w-full px-[20px] py-[10px] ${(isPending || !getOtpString()) ? "bg-blue-500/75" : "bg-blue-500"} text-white `}
      >
        {isPending ? (
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
          "Verify OTP"
        )}
      </button>
      {(otpResendTime || otpResendTime == 0) && (
        <div className="mt-[20px] flex items-center gap-[10px]">
            <p className=" ">
              Resend OTP in{" "}
              <span className="text-primary">{otpResendTime} sec.</span>
            </p>
            <button disabled={isResendingOTP | isBtnDisabled} className={`${(isResendingOTP | isBtnDisabled) ? "text-blue-500/50" : "text-blue-500"} `} onClick={resendOTP}>
              {isResendingOTP ? <Loader2 /> :`Resend OTP`}
            </button>
        </div>
      )}
    </div>
  );
};

export default OTPVerification;
