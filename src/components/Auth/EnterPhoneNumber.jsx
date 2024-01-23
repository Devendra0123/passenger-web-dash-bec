import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/setup";
import VerifyOTP from "./VerifyOTP";

const EnterPhoneNumber = () => {
  const [value, setValue] = useState();
  const [confirmationResult, setConfirmationResult] = useState();

  useEffect(() => {
    setupRecaptcha();
  }, []);

  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible", // this property is important otherwise the captcha will be displayed on the screen
      }
    );

    window.recaptchaVerifier.verify();
  };

  const sendOTP = async () => {
    const appVerifier = await window.recaptchaVerifier;
    await signInWithPhoneNumber(auth, value, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOTP = async (value) => {
    console.log(value);
    try {
      await confirmationResult.confirm(value).then((res) => {
        console.log("verified");
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="relative ">
      <div id="recaptcha-container"></div>
      <PhoneInput
        country={"us"}
        value={value}
        onChange={(phone) => setValue("+" + phone)}
      />
      <button onClick={sendOTP}>Send OTP</button>

      <VerifyOTP verifyOtp={verifyOTP} />
    </div>
  );
};

export default EnterPhoneNumber;
