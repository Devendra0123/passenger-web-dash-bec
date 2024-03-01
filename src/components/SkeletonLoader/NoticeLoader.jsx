import React from "react";

const NoticeLoader = () => {
  return (
    <div class="rounded-md p-4 max-w-sm w-full">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-400 h-5 w-5"></div>
        <div class="flex-1 space-y-3 py-1">
          <div class="h-4 w-[75%] bg-slate-400 rounded-[25px]"></div>
          <div class="h-4 bg-slate-400 rounded-[25px]"></div>
          <div class="h-[20px] w-[70px] bg-slate-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default NoticeLoader;
