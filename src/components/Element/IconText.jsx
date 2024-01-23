import React from "react";
import { Link } from "react-router-dom";

const IconText = ({ icon, text, link }) => {
  return (
    <Link to={`/${link}`} className="flex items-center gap-[10px]">
      {icon}
      <p>{text}</p>
    </Link>
  );
};

export default IconText;
