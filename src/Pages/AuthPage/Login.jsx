import React, { useEffect, useState } from "react";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import SignInWithPhone from "../../components/Auth/SignInWithPhone";
import SignInWithEmail from "../../components/Auth/SignInWithEmail";
import { useNavigate, useSearchParams } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const loginWith = searchParams.get("loginWith");

  const [clickedBtnId, setClickedBtnId] = useState("");

  useEffect(() => {
    if (loginWith) {
      setClickedBtnId(loginWith);
    }else{
      setClickedBtnId("")
    }
  }, [loginWith]);

  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full min-h-[100vh] flex flex-col items-center">
      <div className="w-full h-screen flex flex-col items-center justify-center p-[20px]">
        <div className="w-[80%] h-[600px] grid grid-cols-3 shadow-md rounded-lg overflow-hidden ">
          <div className="z-10 col-span-1 h-[600px] bg-slate-200 flex flex-col items-center justify-center p-[20px]">
            <div className="flex flex-col items-center gap-[10px]">
              <img
                src="/asset/logo/BEC_ICON.png"
                alt="logo"
                className="w-[70px] object-contain"
              />
              <h2 className="text-[25px] font-[600]">
                British <span className="text-primary">Express</span> Cars
              </h2>
              <p className="text-center mt-[20px]">
                Offering the best reliable and safest transfer service
              </p>
            </div>
          </div>
          <div className="col-span-2 h-full bg-smoke/75 flex flex-col items-center gap-[20px]">
            <div className={`${!clickedBtnId && "hidden"} w-full flex items-center justify-between p-[20px]`}>
              <div
                onClick={() => {
                  setClickedBtnId("")
                  navigate('/login');
                }}
                className={`cursor-pointer flex items-center gap-[5px] bg-[#1BCD73] text-white px-[20px] py-[8px] rounded-[25px]`}
              >
                <IoChevronBackOutline />
                <p>Go Back</p>
              </div>
            </div>

            {!clickedBtnId && (
              <div className="grow w-full flex flex-col items-center gap-[20px] mt-[50px] p-[20px]">
                <h2 className="w-[70%] text-[25px] text-start font-semibold">
                  Welcome!
                </h2>

                <div className="w-[70%] flex flex-col gap-[20px]">
                  <button
                    onClick={() => {
                      setClickedBtnId("phone");
                      navigate("/login?loginWith=phone");
                    }}
                    className="w-full flex items-center gap-[10px] text-[19px] px-[15px] py-[10px] rounded-[25px] border border-blue-500 text-blue-500"
                  >
                    <BsFillPhoneFill className="" /> Sign in with{" "}
                    <span className="text-primary">Phone Number</span>
                  </button>

                  <button
                    onClick={() => {
                      setClickedBtnId("email");
                      navigate("/login?loginWith=email");
                    }}
                    className="w-full flex items-center gap-[10px] text-[19px] px-[15px] py-[10px] rounded-[25px] border border-blue-500 text-blue-500"
                  >
                    <MdEmail className="" /> Sign in with{" "}
                    <span className="text-primary">Email</span>
                  </button>
                </div>
              </div>
            )}

            {clickedBtnId == "phone" && (
              <div className="w-[100%] flex justify-center">
                <SignInWithPhone />
              </div>
            )}

            {clickedBtnId == "email" && (
              <div className="w-[100%] flex justify-center">
                <SignInWithEmail />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
