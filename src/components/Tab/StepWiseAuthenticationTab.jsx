import React from "react";
import { GoDotFill, GoDot } from "react-icons/go";
import { IoIosCheckmark } from "react-icons/io";

const StepWiseAuthenticationTab = ({ activeTab }) => {
  return (
    <div className="w-full ">
      <div className="w-full flex items-center justify-start gap-[5px] ">
        {/* required_profile tab */}
        <div className="relative">
          {activeTab == "new" ? (
            <GoDotFill className="text-blue-500 text-[21px]" />
          ) : activeTab == "required_card" ? (
            <IoIosCheckmark className="text-green-500 text-[21px]" />
          ) : null}

          <div className="absolute top-[20px] left-0 w-max">
            <p className="text-[12px] text-slate-400 ">Step 1</p>
            <h3 className="text-[14px] text-slate-800 font-semibold ">
              Add Profile Details
            </h3>
          </div>
        </div>
        {/* Horizontal Line */}
        <div className="w-[200px] h-[5px] bg-blue-300 rounded-[25px] " />
        {/* required_card tab */}
        <div className="relative">
          {activeTab == "new" ? (
            <GoDot className="text-gray-500 text-[21px]" />
          ) : activeTab == "required_card" ? (
            <GoDotFill className="text-blue-500 text-[21px]" />
          ) : null}
          <div className="absolute top-[20px] left-0 w-max">
            <p className="text-[12px] text-slate-400 ">Step 2</p>
            <h3 className="text-[14px] text-slate-800 font-semibold ">
              Add Card Details
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepWiseAuthenticationTab;
