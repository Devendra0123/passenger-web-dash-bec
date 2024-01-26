import React, { useRef } from "react";
import { useAuthContext } from "../../Context/AuthContext";

const OTPVerification = () => {
  const { setIsAuthenticated } = useAuthContext();

  // Create an array to hold refs for each input box
  const inputRefs = Array(6)
    .fill(0)
    .map((_, i) => useRef(null));

  // Function to move focus to the next input box
  const handleInputChange = (index, e) => {
    if (index < inputRefs.length - 1 && e.target.value !== "") {
      inputRefs[index + 1].current.focus();
    }
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
            className="w-[40px] h-[40px] rounded-[5px] bg-light_gray text-center border border-primary "
          />
        ))}
      </div>
      <button
        onClick={() => {
          setIsAuthenticated(true);
        }}
        className="w-full px-[20px] py-[10px] bg-blue-500 text-white "
      >
        Submit
      </button>
    </div>
  );
};

export default OTPVerification;
