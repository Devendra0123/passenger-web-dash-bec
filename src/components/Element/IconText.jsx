import React from "react";
import { Link } from "react-router-dom";

const IconText = ({ data, handleClick, active }) => {
  const { name, slug } = data;

  return (
    <Link
      to={`/${slug}`}
      onClick={handleClick}
      className={`${
        active && "bg-blue-500 text-white"
      } rounded-[25px] hover:bg-blue-500 hover:text-white py-[10px] px-[10px] flex items-center gap-[10px]`}
    >
      <data.icon alt="icon" className="w-[15px] h-[15px" />
      <p>{name}</p>
    </Link>
  );
};

export default IconText;
