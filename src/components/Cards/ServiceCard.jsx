import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../Element/Rating";
import { IoCall, IoInformationOutline } from "react-icons/io5";
import DriverInfo from "../modal/DriverInfo";
import Overlay from "../Overlay";
import CancelBookingConfirmation from "../modal/CancelBookingConfirmation";

const ServiceCard = ({
  data,
  serviceType,
  doNotShowHoverEffect,
  isHistory,
  isMainCard,
}) => {
  const [isPriceInfoHovered, setIsPriceInfoHovered] = useState(false);
  const [displayDriverPopup, setDisplayDriverPopup] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    trip_type,
    payment_status,
    payment_status_class,
    status_class,
    status,
    fare_breakdown,
    duration,
    id,
    fleet,
    pickup,
    pickup_date_time,
    via,
    drop,
    distance,
    driver,
    dropOffTime,
  } = data;

  const [totalPrice, setTotalPrice] = useState();

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
  };

  useEffect(() => {
    if (fare_breakdown?.length > 0) {
      const total = fare_breakdown.reduce(
        (accumulator, item) => accumulator + parseInt(item.value),
        0
      );
      setTotalPrice(total);
    }
  }, [fare_breakdown]);

  return (
    <Link
      to={
        doNotShowHoverEffect || serviceType == "current"
          ? ""
          : isHistory
          ? `/service-details/${id}?service-type=history`
          : `/service-details/${id}`
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
      <div className="flex justify-between">
        <div>
          <p className="text-primary font-[500] tracking-wider text-[14px] px-[10px] py-[6px] bg-white rounded-[4px] ">
            {trip_type}
          </p>
        </div>

        {!isHistory && (
          <div className="flex items-center gap-[10px]">
            {driver && driver?.length !== 0 && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                className=" flex items-center gap-[6px] px-[5px] py-[5px] text-[13px] rounded-[4px] bg-green-800 text-white "
              >
                <IoCall /> Call Driver
              </button>
            )}

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(true);
              }}
              className={`flex items-center gap-[6px] px-[5px] py-[5px] text-[13px] rounded-[4px] ${
                isMainCard ? " bg-primary" : " bg-red-500"
              } text-white`}
            >
              Cancel Booking
            </button>
          </div>
        )}
      </div>

      {/* Cancel booking popup */}
      <CancelBookingConfirmation open={open} handleClose={handleClose} />

      <div className="w-full flex items-center justify-between gap-[5px]">
        <p className="px-[5px] py-[5px] rounded-[25px] bg-white text-center text-[14px] font-[400]">
          BKID : <span>{id}</span>
        </p>
        {pickup_date_time && (
          <p className="text-slate-500 text-[13px] px-[5px] py-[5px] rounded-[25px] bg-white text-center">
            {pickup_date_time}
          </p>
        )}

        {distance && (
          <p className="text-slate-500 text-[13px] px-[5px] py-[5px] rounded-[25px] bg-white text-center">
            {distance}
          </p>
        )}

        <div className="relative flex items-center gap-[5px]">
          {totalPrice && (
            <p className="text-primary font-semibold">£{totalPrice}</p>
          )}

          <div
            onMouseEnter={() => setIsPriceInfoHovered(true)}
            onMouseLeave={() => setIsPriceInfoHovered(false)}
            className="w-[20px] h-[20px] cursor-pointer rounded-full bg-white text-slate-800 border border-slate-800 flex items-center justify-center "
          >
            <IoInformationOutline />
          </div>

          {isPriceInfoHovered && (
            <div className="z-10 w-[200px] flex flex-col gap-[5px] absolute top-full right-0 bg-smoke/[90%] backdrop-blur-sm border border-slate-300 p-[10px] rounded-[5px]">
              {fare_breakdown?.length > 0 &&
                fare_breakdown.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between w-full"
                  >
                    <h3 className="font-semibold text-[15px]">{item?.name}:</h3>
                    <p>
                      <span className="text-[14px] text-primary font-semibold">
                        £{item?.value}
                      </span>
                    </p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      {dropOffTime && (
        <div>
          <p className="w-max text-[14px] px-[10px] py-[6px] rounded-[25px] bg-white ">
            Drop Off Time : <span>{dropOffTime}</span>
          </p>
        </div>
      )}

      {/* Fleet Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px] text-[14px]">
          <div className="flex items-center gap-[5px]">
            {fleet?.image_url && (
              <img
                src={fleet.image_url}
                alt=""
                className="w-[30px] h-[30px] object-contain"
              />
            )}
            {fleet?.name && <p>{fleet.name}</p>}
          </div>
        </div>
        {fleet?.registration_no && (
          <div>
            <p className="text-[14px]">
              Registration No. <span>{fleet?.registration_no}</span>
            </p>
          </div>
        )}
        {duration && (
          <div>
            <div className="flex items-center gap-[5px]">
              <img src="/asset/icons/duration.svg" alt="" className="" />
              <span className="text-[14px]">{duration}</span>
            </div>
          </div>
        )}
      </div>

      <div className="w-full grid grid-cols-3 gap-[20px]">
        {pickup?.name && (
          <div>
            <p className="text-blue-500 text-[12px] ">Origin</p>
            <p className="text-[14px] ">
              {pickup?.name && (
                <span>
                  {pickup?.name?.length > 20
                    ? pickup?.name.substring(0, 20) + "..."
                    : pickup?.name}
                </span>
              )}
            </p>
          </div>
        )}
        <div>
          {/* Via point */}
          {via?.length > 0 && (
            <div className="flex flex-col items-center text-center">
              <p className="text-blue-500 text-[12px] ">Via</p>
              <p className="text-[14px] ">{via[0].name}</p>
            </div>
          )}
        </div>
        {drop?.name && (
          <div>
            <p className="flex flex-col justify-end text-end text-blue-500 text-[12px] ">
              Destination
            </p>
            <p className="text-end text-[14px] ">
              {drop?.name && (
                <span>
                  {drop?.name?.length > 20
                    ? drop?.name.substring(0, 20) + "..."
                    : drop?.name}
                </span>
              )}
            </p>
          </div>
        )}
      </div>

      <div className="relative w-full flex items-center justify-between gap-[10px]">
        {/* Driver info */}
        {driver && driver?.length !== 0 && (
          <div
            onClick={() => setDisplayDriverPopup(true)}
            className={`${
              serviceType == "current" &&
              "hover:bg-light_gray cursor-pointer p-[10px] rounded-[5px]"
            } flex items-center gap-[5px]`}
          >
            {driver?.image_url && (
              <img
                src={driver?.image_url}
                alt={driver?.first_name}
                className="w-[37px] h-[37px] rounded-full border border-blue-400 "
              />
            )}

            <div>
              {/* Make sure to use only first name */}
              {driver?.first_name && (
                <p className="text-slate-500 text-[13px]">
                  {driver?.first_name}
                </p>
              )}
              {/* Driver Rating */}
              {/* <Rating
                ratingValue={driver.rating?.value}
                NumberOfRating={driver.rating.numberofRating}
              /> */}
            </div>
          </div>
        )}

        <div className="flex items-center gap-[10px]">
          <p
            className={`${
              status_class == "confirmed"
                ? "text-green-700 border border-green-700"
                : status_class == "pending"
                ? "text-yellow-600 border border-yellow-600"
                : "text-primary border border-primary"
            } px-[10px] py-[3px] rounded-[25px]`}
          >
            {status}
          </p>
          <p
            className={`${
              payment_status_class == "paid"
                ? "text-green-700 border border-green-700"
                : "text-primary border border-primary"
            } px-[10px] py-[3px] rounded-[25px]`}
          >
            {payment_status}
          </p>
        </div>
        {displayDriverPopup && driver && (
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
