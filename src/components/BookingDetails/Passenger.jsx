import React from "react";

const Passenger = ({ passengerInfo }) => {
  return (
    <div
      data-id="2"
      className="box h-[300px] bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]"
    >
      <div>
        <img
          src="/asset/icons/account.svg"
          alt="person-icon"
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-[5px] text-center">
        <h2 className="text-[17px] font-semibold">Passenger</h2>
        <div className=" w-[90%] flex flex-col justify-center items-center gap-[5px] text-[14px]">
          <div className="w-full flex items-center justify-between">
            <p className="font-[500]">Name:</p>
            <p>{passengerInfo?.name}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p className="font-[500]">Contact:</p>
            <p>{passengerInfo?.mobile}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p className="font-[500]">Email:</p>
            <p>{passengerInfo?.email}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p className="font-[500]">Passenger ID:</p>
            <p>{passengerInfo?.id}</p>
          </div>
        </div>
        {passengerInfo?.has_lead_passenger && (
          <div className=" w-[90%] flex flex-col gap-[5px] text-[14px]">
            <h2 className="w-max text-start text-[15px] font-semibold ">
              Lead Passenger
            </h2>
            <div className="flex flex-col gap-[10px]">
              <div className="w-full flex items-center justify-between">
                <p className="font-[500]">Name:</p>
                <p>{passengerInfo?.passenger_name}</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="font-[500]">Contact:</p>
                <p>{passengerInfo?.passenger_mobile}</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="font-[500]">Email:</p>
                <p>{passengerInfo?.passenger_email}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Passenger;
