import React, { useEffect, useState } from "react";
import { navItems } from "../consts/navItems";
import IconText from "./Element/IconText";
import { Link, useLocation } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [activeLink, setActiveLink] = useState();

  const setActivePath = (route) => {
    setActiveLink(route);
  };

  useEffect(() => {
    if (pathname == "/") {
      setActiveLink("/");
    } else {
      setActiveLink(pathname);
    }
  }, [pathname]);

  return (
    <div className="sticky top-[30px] w-full h-[90vh] bg-[#F2F2F2] flex flex-col items-start justify-between p-[20px] rounded-[15px] border border-slate-300 shadow-lg">
      <div className="w-full flex flex-col ">
        <Link to="/" className="w-full flex items-center justify-center">
          <img
            src="/asset/logo/logo.png"
            alt="logo"
            className="h-[100px] object-contain"
          />
        </Link>
        <div className="mt-[20px] flex flex-col gap-[3px]">
          {navItems?.length > 0 &&
            navItems.map((item, index) => (
              <IconText
                key={index}
                data={item}
                handleClick={() => setActivePath(`/${item.slug}`)}
                active={activeLink == `/${item.slug}` ? true : false}
              />
            ))}
        </div>
      </div>

      <div className="w-full bg-gradient-to-r from-white to-slate-100 p-[20px] flex flex-col items-center gap-[12px] rounded-[5px]">
        <p className="text-[19px] font-semibold text-center">Take a ride</p>
        <button className="w-max text-white font-[500] bg-primary px-[20px] py-[8px] rounded-[25px]">
          Book a Ride
        </button>
      </div>

      <div className="w-full flex flex-col gap-[20px]">
        <Link
          to={`/account`}
          onClick={() => setActivePath(`/account`)}
          className={`${
            activeLink === "/account" ? "bg-blue-500 text-white" : ""
          } w-full rounded-[25px] hover:bg-blue-500 hover:text-white py-[10px] px-[10px] flex items-center gap-[10px]`}
        >
          <VscAccount className="w-[15px] h-[15px]" />
          <p>Account</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
