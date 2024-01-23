import React from "react";
import { noticeData } from "../../consts/noticeData";
import NoticeCard from "./NoticeCard";

const Notice = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-white/75 backdrop-blur-sm w-full p-[15px] rounded-[15px] ">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-[600] text-slate-700">Notice</h2>
          <button className="text-blue-500 text-[14px]">View more</button>
        </div>

        <div className="mt-[10px] w-full flex flex-col gap-[10px]">
          {noticeData?.length > 0 &&
            noticeData.map((item, index) => (
              <NoticeCard
                key={index}
                date={item.date}
                description={item.description}
                title={item.title}
              />
            ))}
        </div>
      </div>
      <div className="gradient-circle z-[-1] absolute top-[-20px] left-[-20px] w-[200px] h-[200px] rounded-full " />
    </div>
  );
};

export default Notice;
