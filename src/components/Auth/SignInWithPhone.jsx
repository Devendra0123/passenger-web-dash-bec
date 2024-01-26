import React, { useState } from "react";
import OTPVerification from "./OTPVerificationInput";

const SignInWithPhone = () => {
  const [otp, setOtp] = useState();

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex flex-col items-start gap-[20px] mt-[50px]">
      <div
        style={{ transform: otp ? "translateX(-100%)" : "translateX(0%)" }}
        className="w-[100%] flex transition duration-150 ease-in-out"
      >
        <div className={`pl-[50px] min-w-full p-[20px]`}>
          <h2 className="text-[25px] text-start font-semibold">
            Sign in with phone number
          </h2>
          <form onSubmit={handlePhoneNumberSubmit} className="mt-[20px] flex flex-col">
            <label>Enter your phone number:</label>
            <input
              type="number"
              className="w-[300px] bg-light_gray border border-primary px-[10px] py-[8px] mt-[5px] rounded-[4px]"
            />
            <button
              onClick={() => setOtp(123456)}
              className="w-[300px] mt-[20px] bg-blue-500 text-white text-[19px] font-semibold px-[20px] py-[8px] "
            >
              Send OTP
            </button>
          </form>

          <p className="mt-[70px] text-[13px]">
            OTP will be send to your number.
          </p>
        </div>

        <div className={`pl-[50px] min-w-full p-[20px]`}>
          <h2 className="text-[25px] text-start font-semibold">
            OTP Verification
          </h2>
          <p className="mt-[20px]">Enter the OTP code send to your phone number</p>
          <OTPVerification />
        </div>
      </div>
    </div>
  );
};

export default SignInWithPhone;
