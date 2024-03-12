import React from "react";

const LocationInformation = ({ data }) => {
  const {
    title,
    after_name,
    location_after,
    date_name,
    location_date,
    from_name,
    location_from,
    number_name,
    location_number,
    time_name,
    location_time,
  } = data;
  return (
    <div className="box h-[300px] bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]">
      <div>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className=""
        >
          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 2c5.519 0 10 4.481 10 10s-4.481 10-10 10-10-4.481-10-10 4.481-10 10-10zm-4.809 11.077l3.627-1.796-3.717-3.17 1.149-.569 6.017 2.031 2.874-1.423c.757-.38 2.009-.278 2.294.296.045.092.065.195.065.306-.002.586-.59 1.381-1.221 1.698l-2.874 1.423-2.031 6.016-1.15.569-.268-4.878-3.626 1.796-.749 1.802-.804.398-.281-2.724-1.996-1.874.804-.399 1.887.498z" />
        </svg>
      </div>
      <div className="w-full flex flex-col items-center gap-[10px] text-center">
        {title && <h2 className="text-[17px] font-semibold">{title}</h2>}

        <div className="w-[90%] flex flex-col items-center gap-[10px] text-[14px] ">
          {number_name && location_number && (
            <div className="w-full flex items-center justify-between">
              <p className="text-start font-[500]">{number_name}</p>
              <p className="text-[14px] text-blue-500 text-end">
                {location_number}
              </p>
            </div>
          )}
          {date_name && location_date && (
            <div className="w-full flex items-center justify-between">
              <p className="text-start font-[500]">{date_name}</p>
              <p className="text-[14px] text-blue-500 text-end">
                {location_date}
              </p>
            </div>
          )}

          {time_name && location_time && (
            <div className="w-full flex items-center justify-between">
              <p className="text-start font-[500]">{time_name}</p>
              <p className="text-[14px] text-blue-500 text-end">
                {location_time}
              </p>
            </div>
          )}
          {from_name && location_from && (
            <div className="w-full flex items-center justify-between">
              <p className="text-start font-[500]">{from_name}</p>
              <p className="text-[14px] text-blue-500 text-end">
                {location_from}
              </p>
            </div>
          )}
          {after_name && location_after && (
            <div className="w-full flex items-center justify-between">
              <p className="text-start font-[500]">{after_name}</p>
              <p className="text-[14px] text-blue-500 text-end">
                {location_after}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationInformation;
