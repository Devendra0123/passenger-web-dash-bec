import React, { useState } from "react";

const VerifyOTP = ({verifyOtp}) => {
    const [enteredOTP, setEnteredOTP] = useState()
  return (
    <div>
      <input type="text" value={enteredOTP} onChange={(e)=> setEnteredOTP(e.target.value)} />
      <button onClick={()=> verifyOtp(enteredOTP)}>Verify OTP</button>
    </div>
  );
};

export default VerifyOTP;
