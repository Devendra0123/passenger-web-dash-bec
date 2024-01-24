import React from "react";
import { Link } from "react-router-dom";

const IconText = ({ icon, text, link, handleClick, active }) => {
  return (
    <Link to={`/${link}`} onClick={handleClick} className={`${active && "bg-blue-500 text-white"} rounded-[25px] hover:bg-blue-500 hover:text-white py-[10px] px-[10px] flex items-center gap-[10px]`}>
      <img src={icon} alt='icon' className="w-[15px] h-[15px" />
      <p>{text}</p>
    </Link>
  );
};

export default IconText;
