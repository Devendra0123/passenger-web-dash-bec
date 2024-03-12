import React from "react";
import ServiceCard from "../Cards/ServiceCard";
import { Link } from "react-router-dom";
import CardLoader from "../SkeletonLoader/CardLoader";

const ScheduledBooking = ({ data, pending }) => {
  return (
    <div className="relative">
      <div className="bg-white/75 backdrop-blur-sm w-full min-h-[50vh] p-[15px] rounded-[15px]">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-titleSize font-titleFontWeight text-titleColor">
            Schedule Booking
          </h2>
          <Link
            to="/scheduled-booking"
            className="underline underline-offset-4 decoration-blue-500 text-[14px] hover:bg-light_gray hover:no-underline p-[5px] rounded-[4px]"
          >
            View more
          </Link>
        </div>

        {pending ? (
          <div className="flex flex-col gap-[20px]">
            {Array(2)
              .fill(null)
              .map((item, index) => (
                <div key={index} className="bg-light_gray/50 rounded-[15px] p-[20px]">
                  <CardLoader />
                </div>
              ))}
          </div>
        ) : (
          <div className="mt-[20px] flex flex-col gap-[20px]">
            {data?.length > 0 ?
              data
                .slice(0, 3)
                .map((item, index) => <ServiceCard key={index} data={item} />) : (
                  <div className="w-full h-[80vh] flex flex-col items-center gap-[20px] gradient-circle text-center p-[20px]">
                  <h2 className="text-xl font-[500] ">No Schedule Booking</h2>
                  <p>Can't find any schedule booking. Do you want to book a ride?</p>
                  <Link to={`${import.meta.env.VITE_PASSENGER_FRONTEND_URL}`} target="_blank" className="bg-primary px-[20px] py-[8px] text-white">Book a ride</Link>
                </div>
                )}
          </div>
        )}
      </div>
      <div className="gradient-circle z-[-1] absolute bottom-[20px] right-[20px] w-[300px] h-[300px] rounded-full " />
    </div>
  );
};

export default ScheduledBooking;
