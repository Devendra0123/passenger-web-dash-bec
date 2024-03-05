import React from "react";

const CardLoader = () => {
  return (
    <div className="rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col space-y-[20px]">
        <div className="w-full flex justify-between">
          <div className="w-[60px] h-[25px] rounded-[5px] bg-slate-400 " />
          <div className="flex space-x-[20px]">
            <div className="w-[60px] h-[25px] rounded-[5px] bg-slate-400 " />
            <div className="w-[60px] h-[25px] rounded-[5px] bg-slate-400 " />
          </div>
        </div>
        <div className="grid grid-cols-4 space-x-[20px]">
          <div className="h-[20px] rounded-[25px] bg-slate-400"></div>
          <div className="h-[20px] rounded-[25px] bg-slate-400"></div>
          <div className="h-[20px] rounded-[25px] bg-slate-400"></div>
          <div className="h-[20px] rounded-[25px] bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
