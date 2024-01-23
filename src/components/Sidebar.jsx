import React from "react";
import { navItems } from "../consts/navItems";
import IconText from "./element/IconText";

const Sidebar = () => {
  return (
    <div className="sticky top-[50px] w-full h-[85vh] bg-[#F2F2F2] flex flex-col items-start justify-between p-[20px] rounded-[15px] border border-slate-300 shadow-lg">
      <div className="w-full flex flex-col ">
        <div className="w-full flex items-center justify-center">
          <img
            src="./asset/logo/logo.png"
            alt="logo"
            className="h-[100px] object-contain"
          />
        </div>
        <div className="mt-[20px] flex flex-col">
          {navItems?.length > 0 &&
            navItems.map(({ icon, name, slug }, index) => (
              <IconText key={index} text={name} icon={icon} link={slug} />
            ))}
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-white to-slate-100 p-[20px] flex flex-col items-center gap-[12px] rounded-[5px]">
        <p className="text-[19px] font-semibold text-center">
          Take a ride
        </p>
        <button className="w-max text-white font-[500] bg-primary px-[20px] py-[8px] rounded-[25px]">
          Book a Ride
        </button>
      </div>

      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center gap-[10px]">
          <img src="./asset/icons/account.svg" alt="account" className="w-[20px] h-[22px"  />
          <p>Account</p>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
