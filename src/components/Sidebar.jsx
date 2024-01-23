import React from "react";
import { navItems } from "../consts/navItems";
import IconText from "./element/IconText";

const Sidebar = () => {
  return (
    <div className="w-full h-[80vh] bg-white flex flex-col items-start justify-start p-[20px] rounded-[15px] border border-slate-300 shadow-lg">
      <div className="w-full flex items-center justify-center">
        <img src="./asset/logo/1.png" alt="logo" className="h-[100px] object-contain" />
      </div>
      <div className="flex flex-col gap-[20px]">
        {
            navItems?.length > 0 && navItems.map(({icon,name,slug},index)=>(
                <IconText key={index} text={name} link={slug} />
            ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
