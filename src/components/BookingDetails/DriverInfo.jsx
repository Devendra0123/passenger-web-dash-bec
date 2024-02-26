import React from "react";
import Rating from "../Element/Rating";

const DriverInfo = ({ data }) => {
  return (
    <div
      className="box h-[300px] bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]"
    >
      <div>
        <img
          src="/asset/icons/account.svg"
          alt="person-icon"
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-[10px] text-center">
        <h2 className="text-[17px] font-semibold">Driver Info</h2>
        <div className=" w-[90%] flex flex-col justify-center items-center gap-[10px]">
          <div className="w-full flex items-center gap-[30px] justify-between">
            <img
              src="/asset/person1.webp"
              alt="driver-image"
              className="w-[50px] h-[50px] rounded-full border border-blue-500"
            />
            <Rating
              ratingValue={data.driver?.rating.value}
              NumberOfRating={data.driver?.rating?.numberofRating}
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <p>Name:</p>
            <p>{data.driver?.fName}</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p>Phone Number:</p>
            <p>{data.driver?.phoneNumber}</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p>Driver ID:</p>
            <p>003</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p>TFL License Number:</p>
            <p>95382</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverInfo;
