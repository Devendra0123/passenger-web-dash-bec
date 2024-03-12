import React from "react";
import Rating from "../Element/Rating";

const DriverInfo = ({ data }) => {
  const { tfl_number, first_name, mobile, id } = data;
  return (
    <div className="box h-[300px] bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]">
      <div>
        <img
          src="/asset/icons/account.svg"
          alt="person-icon"
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-[10px] text-center">
        <h2 className="text-[17px] font-semibold">Driver Info</h2>
        <div className=" w-[90%] flex flex-col justify-center items-center gap-[10px] text-[14px]">
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
          {first_name && (
            <div className="w-full flex items-center justify-between">
              <p className="font-[500]">Name:</p>
              <p>{first_name}</p>
            </div>
          )}

          {mobile && (
            <div className="w-full flex items-center justify-between">
              <p className="font-[500]">Phone Number:</p>
              <p>{mobile}</p>
            </div>
          )}

          {id && (
            <div className="w-full flex items-center justify-between">
              <p className="font-[500]">Driver ID:</p>
              <p>{id}</p>
            </div>
          )}

          {tfl_number && (
            <div className="w-full flex items-center justify-between">
              <p className="font-[500]">TFL License Number:</p>
              <p>{tfl_number}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverInfo;
