import React from "react";
import { currentRideData } from "../../consts/servicesData";
import ServiceCard from "../Cards/ServiceCard";
import GoogleMapDirection from "./GoogleMap";

const CurrentRide = () => {
  return (
    <div className="relative w-full h-full bg-white/75 backdrop-blur-sm rounded-[15px] p-[15px] ">
      <h2 className="text-titleSize font-titleFontWeight text-titleColor">
        Current Ride
      </h2>

      <div className="mt-[10px] w-full flex flex-col gap-[10px] pt-[10px]">
        <div className="absolute top-[15px] right-[15px] w-full flex items-center justify-end">
          <div>
            <div className="bg-blue-500 text-white flex items-center gap-[3px] rounded-[25px] border border-blue-500 px-[15px] py-[5px]">
              <img
                src="/asset/icons/passenger.svg"
                alt="passenger"
                className="w-[16px] h-[16px]"
              />
              <p className="">POB</p>
            </div>
          </div>
        </div>
        {currentRideData && (
          <ServiceCard data={currentRideData} serviceType="current" isMainCard={true} />
        )}

        <div className="w-full flex flex-col items-center gap-[10px] text-center">
          <h2 className="w-full text-[15px] font-semibold text-start">Flight Information</h2>

          <div className="w-[100%] flex items-center gap-[10px] flex-wrap ">
            <div className=" text-[12px] w-max border border-blue-500 px-[13px] py-[7px] rounded-[25px] flex items-center justify-between">
              <p>Flight Number: </p>
              <p className="text-[14px] text-blue-500 ml-[4px]"> 10004</p>
            </div>
            <div className=" text-[12px] w-max border border-blue-500 px-[13px] py-[7px] rounded-[25px] flex items-center justify-between">
              <p>Landing date: </p>
              <p className="text-[14px] text-blue-500 ml-[4px]"> 23/05/2024</p>
            </div>
            <div className=" text-[12px] w-max border border-blue-500 px-[13px] py-[7px] rounded-[25px] flex items-center justify-between">
              <p>Landing time: </p>
              <p className="text-[14px] text-blue-500 ml-[4px]"> 13:20</p>
            </div>
            <div className=" text-[12px] w-max border border-blue-500 px-[13px] py-[7px] rounded-[25px] flex items-center justify-between">
              <p>Coming from: </p>
              <p className="text-[14px] text-blue-500 ml-[4px]">
                {currentRideData?.location.via.place},{" "}
                {currentRideData?.location.via.viaPointLocation}
              </p>
            </div>
            <div className=" text-[12px] w-max border border-blue-500 px-[13px] py-[7px] rounded-[25px] flex items-center justify-between">
              <p>Pickup time after landing:</p>
              <p className="text-[14px] text-blue-500 ml-[4px]"> after 15 mins.</p>
            </div>
          </div>
        </div>
        <GoogleMapDirection />
      </div>
    </div>
  );
};

export default CurrentRide;
