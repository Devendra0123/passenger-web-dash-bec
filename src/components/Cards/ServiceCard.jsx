import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Element/Rating";

const ServiceCard = ({ data, serviceType, doNotShowHoverEffect }) => {
  const {
    dateAndTime,
    bookingStatus,
    paymentStatus,
    price,
    duration,
    bkid,
    vehicle,
    location,
    distance,
    driver,
  } = data;
  return (
    <Link
      to={
        doNotShowHoverEffect || serviceType == "current"
          ? ""
          : `/service-details/${bkid}`
      }
      className={`cursor-pointer w-full ${
        serviceType == "current"
          ? "cursor-text bg-orange-100 rounded-[15px]"
          : `border-b border-primary ${
              doNotShowHoverEffect
                ? ""
                : "bg-light_gray/50 hover:bg-orange-100 rounded-[15px]"
            }`
      } flex flex-col gap-[12px] p-[10px]`}
    >
      <div className="w-full flex items-center justify-between">
        <p className="px-[10px] py-[5px] rounded-[25px] bg-light_gray text-[14px] font-[400]">
          BKID : <span>{bkid}</span>
        </p>
        <p className="text-slate-500 text-[13px]">{dateAndTime}</p>
        <p className="text-slate-500 text-[13px]">{distance}</p>
        <p className="text-primary font-semibold">{price}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px] text-[14px]">
          <div className="flex items-center gap-[5px]">
            <img
              src="/asset/icons/vehicle.svg"
              alt=""
              className="w-[20] h-[20]"
            />
            <p>{vehicle.name}</p>
          </div>
        </div>

        <div>
          <p className="text-[14px]">
            Vehicle No. <span>{vehicle.number}</span>
          </p>
        </div>
        <div>
          <div className="flex items-center gap-[5px]">
            <img src="/asset/icons/duration.svg" alt="" className="" />
            <span className="text-[14px]">{duration}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[10px]">
        <div>
          <p>
            {location.origin.place}
            <span>,{location.origin.country.name}</span>
          </p>
        </div>
        <div>
          <img src="/asset/icons/arrow.svg" alt="arrow" />
        </div>
        <div>
          <p className="text-end">
            {location.destination.place}
            <span>,{location.destination.country.name}</span>
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-[10px]">
        <div className="flex items-center gap-[5px]">
          <img
            src={driver?.image}
            alt={driver?.name}
            className="w-[37px] h-[37px] rounded-full border border-blue-400 "
          />
          <div>
            <p className="text-slate-500 text-[13px]">{driver?.name}</p>
            <Rating
              ratingValue={driver.rating?.value}
              NumberOfRating={driver.rating.numberofRating}
            />
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <p
            className={`${
              bookingStatus == "confirmed"
                ? "text-green-700 border border-green-700"
                : bookingStatus == "pending"
                ? "text-yellow-600 border border-yellow-600"
                : "text-primary border border-primary"
            } px-[10px] py-[3px] rounded-[25px]`}
          >
            {bookingStatus}
          </p>
          <p
            className={`${
              paymentStatus == "paid"
                ? "text-green-700 border border-green-700"
                : "text-primary border border-primary"
            } px-[10px] py-[3px] rounded-[25px]`}
          >
            {paymentStatus}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
