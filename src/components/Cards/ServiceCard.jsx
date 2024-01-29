import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Element/Rating";
import { IoInformationOutline } from "react-icons/io5";

const ServiceCard = ({ data, serviceType, doNotShowHoverEffect }) => {
  const [isPriceInfoHovered, setIsPriceInfoHovered] = useState(false);
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
        <div className="relative flex items-center gap-[5px]">
          <p className="text-primary font-semibold">{price}</p>
          <div
            onMouseEnter={() => setIsPriceInfoHovered(true)}
            onMouseLeave={() => setIsPriceInfoHovered(false)}
            className="w-[26px] h-[26px] cursor-pointer rounded-full bg-slate-200 flex items-center justify-center "
          >
            <IoInformationOutline />
          </div>

          {isPriceInfoHovered && (
            <div className="w-[200px] flex flex-col gap-[5px] absolute top-full right-0 bg-smoke/[90%] backdrop-blur-sm border border-slate-300 p-[10px] rounded-[5px]">
              <div className="flex items-center justify-between w-full">
                <h3 className="font-semibold text-[15px]">Base Fare:</h3>
                <p>
                  <span className="text-[14px] text-primary font-semibold">$56.46</span>
                </p>
              </div>
              <div>
              <div className="flex items-center justify-between w-full">
                <h3 className="font-semibold text-[15px]">Additional Fare:</h3>
                <p>
                  <span className="text-[14px] text-primary font-semibold">$15</span>
                </p>
              </div>
                <ul className="pl-[5px]">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[14px]">Parking charge:</p>
                    <p className="text-primary font-semibold text-[10px]">$4</p>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <p className="text-[14px]">Waiting charge</p>
                    <p className="text-primary font-semibold text-[10px]">$11</p>
                  </div>
                </ul>
              </div>
            </div>
          )}
        </div>
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
