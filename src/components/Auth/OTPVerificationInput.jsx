import React, { useEffect, useRef, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";

const OTPVerification = ({ verifyOtp }) => {
  // Create an array to hold refs for each input box
  const inputRefs = Array(6)
    .fill(0)
    .map((_, i) => useRef(null));

  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  // useEffect(() => {
  //   if(inputRefs[0].current){
  //     inputRefs[0].current.focus();
  //   }
  // }, []);

  // Function to move focus to the next input box
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

  const getOtpString = () => {
    return otpValues.join("");
  };

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
      <button
        onClick={() => {
          const enteredOtp = getOtpString();
          console.log(enteredOtp)
          if (enteredOtp) {
            verifyOtp(enteredOtp);
          }
        }}
        className="w-full px-[20px] py-[10px] bg-blue-500 text-white "
      >
        Submit
      </button>

      <p className="mt-[20px] ">
        Resend OTP in <span className="text-primary">35 sec.</span>
      </p>
    </div>
  );
};

export default OTPVerification;
