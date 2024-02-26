import React from "react";

const Passenger = ({ passengerInfo }) => {

  return (
    <div
      data-id="2"
      className="box bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]"
    >
      <div>
        <img
          src="/asset/icons/account.svg"
          alt="person-icon"
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-[10px] text-center">
        <h2 className="text-[17px] font-semibold">Passenger</h2>
        <div className=" w-[90%] flex flex-col justify-center items-center gap-[10px]">
          <div className="w-full flex items-center justify-between">
            <p>Name:</p>
            <p>{passengerInfo?.name}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p>Contact:</p>
            <p>{passengerInfo?.mobile}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p>Email:</p>
            <p>{passengerInfo?.email}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p>Passenger ID:</p>
            <p>{passengerInfo?.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passenger;
