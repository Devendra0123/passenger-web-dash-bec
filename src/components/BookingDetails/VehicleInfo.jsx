import React from "react";

const VehicleInfo = ({ vehicleInfo }) => {
  return (
    <div className="box h-[300px] bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]">
      <div>
        <img
          src="/asset/icons/vehicle.svg"
          alt="vehicle-icon"
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-[10px] text-center">
        <h2 className="text-[17px] font-semibold">Vehicle Info</h2>
        <div className="flex flex-col items-center text-[14px]">
          {vehicleInfo?.image_url && (
            <img
              src={vehicleInfo?.image_url}
              alt="car"
              className="w-[250px] h-auto object-contain"
            />
          )}

          <p className="font-[500]">{vehicleInfo?.name}</p>

          {vehicleInfo?.registration_no && (
            <div className="w-full flex items-center justify-center gap-[10px]">
              <p className="font-[500]">Registration Number:</p>
              <p className="text-blue-500">{vehicleInfo?.registration_no}</p>
            </div>
          )}
          {vehicleInfo?.make && (
            <div className="w-full flex items-center justify-center gap-[10px]">
              <p className="font-[500]">Make:</p>
              <p className="text-blue-500">{vehicleInfo?.make}</p>
            </div>
          )}
          {vehicleInfo?.modal && (
            <div className="w-full flex items-center justify-center gap-[10px]">
              <p className="font-[500]">Model:</p>
              <p className="text-blue-500">{vehicleInfo?.modal}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleInfo;
