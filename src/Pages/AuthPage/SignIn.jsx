import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center">
      <div className="w-full flex flex-col items-center p-[20px]">
        {/* Logo */}
        <Link to="/" className="w-full flex items-center justify-center">
          <img
            src="/asset/logo/logo.png"
            alt="logo"
            className="w-[350px] object-contain"
          />
        </Link>

        <div className="w-[80%] ">

        </div>
      </div>
    </div>
  );
};

export default SignIn;
