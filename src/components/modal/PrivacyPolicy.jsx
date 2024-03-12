import React from "react";
import { RxCross2 } from "react-icons/rx";

const PrivacyPolicy = ({handleCross}) => {
  return (
    <div className="z-10 fixed top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] bg-white p-[20px] rounded-[5px] ">
      <div className="w-full flex justify-end">
        <div
          onClick={handleCross}
          className="cursor-pointer bg-light_gray w-[35px] h-[35px] rounded-full flex justify-center items-center "
        >
          <RxCross2 />
        </div>
      </div>

      <p>Privacy Policy</p>
    </div>
  );
};

export default PrivacyPolicy;
