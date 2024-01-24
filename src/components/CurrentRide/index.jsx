import React from "react";
import { currentRideData } from "../../consts/servicesData";
import ServiceCard from "../Cards/ServiceCard";
import GoogleMapDirection from "./GoogleMap";

const CurrentRide = () => {
  return (
    <div className="w-full h-full bg-white/75 backdrop-blur-sm rounded-[15px] p-[15px] ">
      <h2 className="text-titleSize font-titleFontWeight text-titleColor">Current Ride</h2>

      <div className="mt-[10px] w-full flex flex-col gap-[10px]">
        {currentRideData && (
          <ServiceCard data={currentRideData} serviceType="current" />
        )}
        <GoogleMapDirection />
      </div>
    </div>
  );
};

export default CurrentRide;
