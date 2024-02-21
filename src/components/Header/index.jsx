import React from "react";
import UserCard from "../Cards/UserCard";
import { getCurrentDate } from "../../utils/getCurrentDate";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const Header = ({data, notificationCount}) => {
  const { isAuthenticated } = useAuthContext();

  if(!isAuthenticated){
    return null
  }

  return (
    <div className="z-10 sticky top-[0px] w-full flex items-center justify-between bg-white/75 backdrop-blur-sm rounded-[15px] p-[20px]">
      <div className="flex items-center gap-[20px]">
        <div className="bg-[#F2F2F2] p-[6px] rounded-[25px] flex items-center justify-center border border-slate-300">
          <UserCard name={data?.first_name} image={data?.profile_picture_url ? data?.profile_picture_url : ""} />
        </div>

        <div>
          <p className="px-[15px] py-[6px] bg-[#E2E2E2] rounded-[25px] text-lg ">
            {getCurrentDate()}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[20px]">
        <Link
          to="/support"
          className="flex items-center gap-[10px] px-[13px] py-[8px] rounded-[25px] hover:bg-[#E2E2E2] cursor-pointer "
        >
          <img
            src="/asset/icons/support.svg"
            alt="account"
            className="w-[20px] h-[22px"
          />
          <p>Support</p>
        </Link>
        <Link
          to="/notification"
          className="cursor-pointer relative w-[40px] h-[40px] rounded-full bg-[#F2F2F2] hover:bg-[#E2E2E2] flex items-center justify-center "
        >
          <img src="/asset/icons/bell.svg" alt="notification-icon" />
          <div className="absolute top-[0px] right-[0px] w-[20px] h-[20px] rounded-full flex items-center justify-center bg-primary text-white">
            <span className="text-[12px]">{notificationCount}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
