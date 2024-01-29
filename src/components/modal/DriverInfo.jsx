import React from "react";
import { RxCross2 } from "react-icons/rx";

const DriverInfo = ({ handleCross, data }) => {
  const { name, image, rating, email, phoneNumber } = data;
  return (
    <div className="z-10 w-[90%] absolute top-[20%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white p-[15px] rounded-[5px] ">
      <div className="w-full flex justify-end">
        <div
          onClick={handleCross}
          className="cursor-pointer bg-light_gray w-[35px] h-[35px] rounded-full flex justify-center items-center "
        >
          <RxCross2 />
        </div>
      </div>
      <h3 className="w-full text-[15px] text-center font-semibold">Driver Details</h3>
      <div className="flex flex-col items-center gap-[10px] mt-[20px]">
        <img
          src={image}
          alt={name}
          className="w-[70px] h-[70px] rounded-full border border-blue-400 "
        />
        <p>{name}</p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
      </div>
    </div>
  );
};

export default DriverInfo;
