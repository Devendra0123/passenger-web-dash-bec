import React from "react";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen fixed top-0 right-0 left-0 bottom-0 bg-white flex justify-center items-center">
      <div className="w-[80%] h-[600px] flex flex-col shadow-md rounded-lg overflow-hidden ">
        <div className="z-10 h-[600px] flex flex-col items-center justify-center gap-[30px] p-[20px]">
          <div className="flex flex-col items-center gap-[10px] mt-[-50px]">
            <img
              src="/asset/logo/BEC_ICON.png"
              alt="logo"
              className="w-[70px] object-contain"
            />
            <h2 className="text-[25px] font-[600]">
              British <span className="text-primary">Express</span> Cars
            </h2>
          </div>

          <div>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" fill="red">
              <path d="M0 11c.511-6.158 5.685-11 12-11s11.489 4.842 12 11h-2.009c-.506-5.046-4.793-9-9.991-9s-9.485 3.954-9.991 9h-2.009zm21.991 2c-.506 5.046-4.793 9-9.991 9s-9.485-3.954-9.991-9h-2.009c.511 6.158 5.685 11 12 11s11.489-4.842 12-11h-2.009z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
