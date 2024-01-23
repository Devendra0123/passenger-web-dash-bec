import React from "react";

const ServiceCard = ({ data, serviceType }) => {
  const { dateAndTime, price, duration, bkid, vehicle, location, distance } = data;
  return (
    <div className={`cursor-pointer w-full ${serviceType == "current" ? "bg-orange-100 rounded-[15px]" : "border-b border-primary hover:bg-orange-100 hover:rounded-[15px]"} flex flex-col gap-[12px] p-[10px]`}>
      <div className="w-full flex items-center justify-between">
        <p className="text-slate-500 text-[13px]">{dateAndTime}</p>
        <p className="text-slate-500 text-[14px]">{distance}</p>
        <p className="text-primary font-semibold">{price}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px] text-[14px]">
          <p>
            BKID : <span>{bkid}</span>
          </p>
          <div className="flex items-center gap-[5px]">
            <img
              src="./asset/icons/vehicle.svg"
              alt=""
              className="w-[20] h-[20]"
            />
            <span>{vehicle.name}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[5px]">
            <img
              src="./asset/icons/duration.svg"
              alt=""
              className=""
            />
            <span>{duration}</span>
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
          <img src="./asset/icons/arrow.svg" alt="arrow" />
        </div>
        <div>
          <p className="text-end">
            {location.destination.place}
            <span>,{location.destination.country.name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
