import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { scheduledBookingData } from "../consts/servicesData";
import ServiceCard from "../components/Cards/ServiceCard";

const ServiceDetails = () => {
  const { slug } = useParams();

  const [data, setData] = useState();
  useEffect(() => {
    const filteredData = scheduledBookingData?.filter(
      (item) => item.bkid === slug
    );
    if (filteredData.length) {
      setData(filteredData[0]);
    }
  }, []);

  if (!data) {
    return <span>No Data Found</span>;
  }
  return (
    <div>
      <div>
        <h2 className="text-xl font-[600] text-slate-700">Service Details</h2>

        <div className="mt-[10px] flex flex-col gap-[20px]">
          <div>
            <ServiceCard data={data} doNotShowHoverEffect={true} />
          </div>
          <div className="w-full grid grid-cols-2 gap-[30px]">
            {/* Passenger Info */}
            <div className="bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-400 p-[15px] rounded-[10px]">
              <div>
                <img
                  src="/asset/icons/account.svg"
                  alt="person-icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div className="w-full flex flex-col items-center gap-[10px] text-center">
                <h2 className="text-[17px] font-semibold">Lead Passenger</h2>
                <div className="grow w-full flex flex-col justify-center items-center">
                  <p>
                    Name : <span>Alex Smith</span>
                  </p>
                  <p>
                    Contact : <span>+97713583503</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Vehicle Info */}
            <div className="bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-400 p-[15px] rounded-[10px]">
              <div>
                <img
                  src="/asset/icons/vehicle.svg"
                  alt="vehicle-icon"
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div className="w-full flex flex-col items-center gap-[10px] text-center">
                <h2 className="text-[17px] font-semibold">Vehicle Info</h2>
                <div className="flex flex-col items-center">
                  <img
                    src="/asset/car1.png"
                    alt="car"
                    className="w-[250px] h-auto object-contain"
                  />
                  <p>Sedan Executive</p>
                </div>
              </div>
            </div>
          </div>
          {/* Other Details */}
          <div className="w-full grid grid-cols-2 gap-[30px]">
            {/* capacity */}
            <div className="bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-400 p-[15px] rounded-[10px]">

            </div>
            {/* distance && duration info */}
            <div className="bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-400 p-[15px] rounded-[10px]">
              
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
