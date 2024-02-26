import React from "react";

const FlightInformation = ({data}) => {
  return (
    <div className="box bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]">
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
        <h2 className="text-[17px] font-semibold">Flight Information</h2>

        <div className="w-[90%] flex flex-col items-center gap-[10px] ">
          <div className="w-full flex items-center justify-between">
            <p className="text-start">Flight Number</p>
            <p className="text-[14px] text-blue-500 text-end">10004</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-start">Landing date</p>
            <p className="text-[14px] text-blue-500 text-end">23/05/2024</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-start">Landing time</p>
            <p className="text-[14px] text-blue-500 text-end">13:20</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-start">Coming from</p>
            <p className="text-[14px] text-blue-500 text-end">
              {data.location.origin.pickupLocation},{" "}
              {data.location.origin.country.name}
            </p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-start">Pickup time after landing</p>
            <p className="text-[14px] text-blue-500 text-end">after 15 mins.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInformation;
