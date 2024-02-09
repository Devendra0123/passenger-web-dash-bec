import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Element/Rating";
import { IoCall, IoInformationOutline } from "react-icons/io5";
import DriverInfo from "../modal/DriverInfo";
import Overlay from "../Overlay";

const ServiceCard = ({ data, serviceType, doNotShowHoverEffect }) => {
  const [isPriceInfoHovered, setIsPriceInfoHovered] = useState(false);
  const [displayDriverPopup, setDisplayDriverPopup] = useState(false);

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
      <div className="flex justify-end">
        <button onClick={(e)=>{
          e.preventDefault();
          e.stopPropagation()
        }} className=" flex items-center gap-[6px] px-[5px] py-[5px] text-[13px] rounded-[4px] bg-green-800 text-white ">
          <IoCall /> Call Driver
        </button>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="px-[10px] py-[5px] rounded-[25px] bg-light_gray text-center text-[14px] font-[400]">
          BKID : <span>{bkid}</span>
        </p>
        <p className="text-slate-500 text-[13px]">{dateAndTime}</p>
        <p className="text-slate-500 text-[13px]">{distance}</p>
        <div className="relative flex items-center gap-[5px]">
          <p className="text-primary font-semibold">{price}</p>
          <div
            onMouseEnter={() => setIsPriceInfoHovered(true)}
            onMouseLeave={() => setIsPriceInfoHovered(false)}
            className="w-[20px] h-[20px] cursor-pointer rounded-full bg-white text-slate-800 border border-slate-800 flex items-center justify-center "
          >
            <IoInformationOutline />
          </div>

          {isPriceInfoHovered && (
            <div className="w-[200px] flex flex-col gap-[5px] absolute top-full right-0 bg-smoke/[90%] backdrop-blur-sm border border-slate-300 p-[10px] rounded-[5px]">
              <div className="flex items-center justify-between w-full">
                <h3 className="font-semibold text-[15px]">Base Fare:</h3>
                <p>
                  <span className="text-[14px] text-primary font-semibold">
                    £56.46
                  </span>
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between w-full">
                  <h3 className="font-semibold text-[15px]">
                    Additional Fare:
                  </h3>
                  <p>
                    <span className="text-[14px] text-primary font-semibold">
                      £15
                    </span>
                  </p>
                </div>
                <ul className="pl-[5px]">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-[14px]">Parking charge:</p>
                    <p className="text-primary font-semibold text-[10px]">£4</p>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <p className="text-[14px]">Waiting charge</p>
                    <p className="text-primary font-semibold text-[10px]">
                      £11
                    </p>
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
            Registration No. <span>{vehicle.number}</span>
          </p>
        </div>
        <div>
          <div className="flex items-center gap-[5px]">
            <img src="/asset/icons/duration.svg" alt="" className="" />
            <span className="text-[14px]">{duration}</span>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-[20px]">
        <div>
          <p className="text-blue-500 text-[12px] ">Origin</p>
          <p className="text-[14px] ">
            {location.origin.place}
            <span>,{location.origin.country.name}</span>
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="text-blue-500 text-[12px] ">Via</p>
          <p className="text-[14px] ">
            {location.via.place}
            <span>,{location.via.viaPointLocation}</span>
          </p>
        </div>
        <div>
          <p className="flex flex-col justify-end text-end text-blue-500 text-[12px] ">
            Destination
          </p>
          <p className="text-end text-[14px] ">
            {location.destination.place}
            <span>,{location.destination.country.name}</span>
          </p>
        </div>
      </div>

      <div className="relative w-full flex items-center justify-between gap-[10px]">
        {/* Driver info */}
        <div
          onClick={() => setDisplayDriverPopup(true)}
          className={`${
            serviceType == "current" &&
            "hover:bg-light_gray cursor-pointer p-[10px] rounded-[5px]"
          } flex items-center gap-[5px]`}
        >
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
        {displayDriverPopup && (
          <DriverInfo
            handleCross={() => setDisplayDriverPopup(false)}
            data={driver}
          />
        )}
      </div>
      {displayDriverPopup && <Overlay />}
    </Link>
  );
};

export default ServiceCard;
