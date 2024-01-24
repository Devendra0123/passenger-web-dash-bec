import React from "react";
import { scheduledBookingData } from "../../consts/servicesData";
import ServiceCard from "../Cards/ServiceCard";

const ScheduledBooking = () => {
  return (
    <div className="relative">
      <div className="bg-white/75 backdrop-blur-sm w-full p-[15px] rounded-[15px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-titleSize font-titleFontWeight text-titleColor">
            Schedule Booking
          </h2>
          <button className="text-blue-500 text-[14px]">View more</button>
        </div>

        <div className="mt-[10px] flex flex-col gap-[10px]">
          {scheduledBookingData?.length > 0 &&
            scheduledBookingData
              .slice(0, 2)
              .map((item, index) => <ServiceCard key={index} data={item} />)}
        </div>
      </div>
      <div className="gradient-circle z-[-1] absolute bottom-[20px] right-[20px] w-[300px] h-[300px] rounded-full " />
    </div>
  );
};

export default ScheduledBooking;
