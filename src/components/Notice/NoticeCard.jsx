import React from "react";

const NoticeCard = ({ title, date, description }) => {
  return (
    <div className="flex items-start gap-[5px]">
      <div className="mt-[3px]">
        <img src="./asset/icons/bell.svg" alt="notice-icon" className="w-[15px] h-[15px]" />
      </div>
      <div>
        <p className="text-[15px] font-[500] ">{title}</p>
        <p className="text-[13px] text-slate-500">{date}</p>
        <p className="text-[14px] text-slate-500 ">{description}</p>
      </div>
    </div>
  );
};

export default NoticeCard;
