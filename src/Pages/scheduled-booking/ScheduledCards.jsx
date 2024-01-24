import { FaCar } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import { IoHourglassOutline } from "react-icons/io5";
import { BiSolidMap } from "react-icons/bi";







const ScheduledCards = () => {
  return (
    <>
      <div className="scheduled-cards flex flex-col gap-2 py-2 px-2  border border-gray-200   w-full rounded-md h-max ">
        <div className="flex w-full justify-between ">
          <span className=" font-medium text-[#008CCC]">
            09/25/2023 12:55 PM
          </span>
          <span className=" font-medium text-[#008CCC]">$71.46</span>
        </div>
        <div className="flex w-full justify-between ">
          <div className="flex gap-2 ">
            <span>
              BKID: <span className="font-bold">10005</span>
            </span>
            <div className="flex gap-2 items-center " > <FaCar className="text-[#008CCC]" />  Executive Sedan</div>
            <div className="flex gap-2 items-center " > <IoAirplaneSharp className="text-[#008CCC]" /> aa1005</div>
            {/* <span> aa1005</span> */}
          </div>
          <div className="flex gap-2 font-medium items-center " > <IoHourglassOutline  className="text-[#008CCC]" />1hrs,51 mins</div>
        </div>
        <div className="font-medium">
        <div className="flex gap-2 items-center " > <BiSolidMap className="text-[#00D900]" /> New York, Ny, USA</div>
        <div className="flex gap-2 items-center " > <BiSolidMap className="text-[#FE1214]" /> Connecticut, USA</div>
        </div>
      </div>
    </>
  );
};

export default ScheduledCards;
