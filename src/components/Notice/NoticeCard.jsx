import React from "react";

const NoticeCard = ({data}) => {

  const { title, message, type } = data
  return (
    <div className="w-full flex items-start gap-[7px]">
      <div className="mt-[3px]">
        <img src="./asset/icons/bell.svg" alt="notice-icon" className="w-[15px] h-[15px]" />
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="text-[15px] font-[500] ">{title}</p>
        <p className="text-[14px] text-slate-500 ">{message}</p>
        {
          type == "no-card" && (
            <button className="w-max bg-blue-300 p-[5px] rounded-[4px] text-[13px]">
              Add Card
            </button>
          )
        }
      </div>
    </div>
  );
};

export default NoticeCard;
