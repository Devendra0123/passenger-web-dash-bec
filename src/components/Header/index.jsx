import React from "react";
import UserCard from "../Cards/UserCard";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white/75 backdrop-blur-sm rounded-[15px] p-[20px]">
      <div className="flex items-center gap-[20px]">
        <div className="bg-[#F2F2F2] px-[6px] py-[6px] rounded-[25px] flex items-center justify-center border border-slate-300">
          <UserCard name="ABC xyz" image="/asset/logo/BEC_ICON.png" />
        </div>

        <div>
          <p className="px-[15px] py-[6px] bg-[#E2E2E2] rounded-[25px] text-lg ">
            {getCurrentDate()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[20px]">
        <Link to="/support" className="flex items-center gap-[10px] px-[13px] py-[8px] rounded-[25px] hover:bg-[#E2E2E2] cursor-pointer ">
          <img
            src="/asset/icons/support.svg"
            alt="account"
            className="w-[20px] h-[22px"
          />
          <p>Support</p>
        </Link>
        <div className="cursor-pointer relative w-[40px] h-[40px] rounded-full bg-[#F2F2F2] hover:bg-[#E2E2E2] flex items-center justify-center ">
          <img src="/asset/icons/bell.svg" alt="notification-icon" />
          <div className="absolute top-[0px] right-[0px] w-[20px] h-[20px] rounded-full flex items-center justify-center bg-primary text-white">
            <span className="text-[12px]">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
