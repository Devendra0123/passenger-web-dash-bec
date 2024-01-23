import React from "react";
import { Link } from "react-router-dom";

const IconText = ({ icon, text, link }) => {
  return (
    <Link to={`/${link}`} className="hover:rounded-[25px] hover:bg-orange-100 py-[10px] px-[10px] flex items-center gap-[10px]">
      <img src={icon} alt='icon' className="w-[15px] h-[15px" />
      <p>{text}</p>
    </Link>
  );
};

export default IconText;
