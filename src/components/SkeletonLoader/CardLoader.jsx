import React from "react";

const CardLoader = () => {
  return (
    <div class="rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex flex-col space-y-[20px]">
        <div class="w-full flex justify-between">
          <div className="w-[60px] h-[25px] rounded-[5px] bg-slate-400 " />
          <div className="flex space-x-[20px]">
            <div className="w-[60px] h-[25px] rounded-[5px] bg-slate-400 " />
            <div className="w-[60px] h-[25px] rounded-[5px] bg-slate-400 " />
          </div>
        </div>
        <div class="grid grid-cols-4 space-x-[20px]">
          <div class="h-[20px] rounded-[25px] bg-slate-400"></div>
          <div class="h-[20px] rounded-[25px] bg-slate-400"></div>
          <div class="h-[20px] rounded-[25px] bg-slate-400"></div>
          <div class="h-[20px] rounded-[25px] bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
