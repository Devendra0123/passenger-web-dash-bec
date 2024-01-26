import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SignInWithPhone from "./SignInWithPhone";
import { IoChevronBackOutline } from "react-icons/io5";

const Auth = () => {
  const [clickedBtnId, setClickedBtnId] = useState("");

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-screen flex flex-col items-center justify-center p-[20px]">
        <div className="w-[80%] h-[600px] grid grid-cols-3 shadow-md rounded-lg overflow-hidden ">
          <div className="z-10 col-span-1 bg-slate-200 flex flex-col items-center justify-center p-[20px]">
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
          <div className="col-span-2 bg-smoke/75 flex flex-col items-center gap-[20px]">
            <div className="w-full flex items-center justify-between p-[20px]">
              <div onClick={()=> setClickedBtnId('')} className={`${!clickedBtnId && "pointer-events-none opacity-0"} cursor-pointer flex items-center gap-[5px] bg-light_gray px-[20px] py-[8px] rounded-[25px]`}>
                <IoChevronBackOutline />
                <p>Go Back</p>
              </div>
              <p className="text-end">Need help?</p>
            </div>

            {!clickedBtnId && (
              <div className="grow w-full flex flex-col items-center gap-[20px] mt-[50px] p-[20px]">
                <h2 className="w-[70%] text-[25px] text-start font-semibold">
                  Welcome!
                </h2>

                <div className="w-[70%] flex flex-col gap-[20px]">
                  <button
                    onClick={(e) => setClickedBtnId("phone")}
                    className="w-full flex items-center gap-[10px] text-[19px] px-[15px] py-[10px] rounded-[25px] border border-blue-500 text-blue-500"
                  >
                    <BsFillPhoneFill className="" /> Sign in with{" "}
                    <span className="text-primary">Phone Number</span>
                  </button>

                  <button
                    onClick={(e) => setClickedBtnId("email")}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
