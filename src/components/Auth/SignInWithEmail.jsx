import React, { useRef, useState } from "react";
import RegisterViaEmail from "./RegisterViaEmailForm";
import { useAuthContext } from "../../Context/AuthContext";

const SignInWithEmail = () => {
  const { setIsAuthenticated } = useAuthContext();

  const [isRegisterBtnClicked, setIsRegisterBtnClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };
  return (
    <div className="w-full flex flex-col items-start gap-[20px] mt-[50px]">
      <div
        style={{
          transform: isRegisterBtnClicked
            ? "translateX(-100%)"
            : "translateX(0%)",
        }}
        className="w-[100%] flex transition duration-150 ease-in-out"
      >
        <div className={`pl-[50px] min-w-full p-[20px]`}>
          <h2 className="text-[25px] text-start font-semibold">
            Sign in with phone number
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-[75%] flex flex-col gap-[15px] mt-[20px]"
          >
            <div className="flex flex-col gap-[5px]">
              <label>Email:</label>
              <input
                type="email"
                className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border border-primary "
              />
            </div>

            <div className="flex flex-col gap-[5px]">
              <label>Password:</label>
              <input
                type="password"
                className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border border-primary "
              />
            </div>
            <button
              type="submit"
              className="w-full px-[20px] py-[10px] bg-blue-500 text-white "
            >
              Sign in
            </button>
          </form>

          <div className="mt-[40px] w-full lex justify-end text-end">
            <p>
              Don't have account?
              <span
                onClick={() => setIsRegisterBtnClicked(true)}
                className="cursor-pointer text-primary pl-[5px]"
              >
                Register
              </span>
            </p>
          </div>
        </div>

        {/* Register form */}
        <div
          className={`pl-[50px] mt-[-70px] flex flex-col min-w-full h-full overflow-y-scroll p-[20px] pb-[30px]`}
        >
          <h2 className="text-[25px] text-start font-semibold">
            Register Account
          </h2>
          <p className="mt-[20px]">Fill the details to register your account</p>
          <RegisterViaEmail handleRegisterFormSubmit={()=> setIsAuthenticated(true)} />
        </div>
      </div>
    </div>
  );
};

export default SignInWithEmail;