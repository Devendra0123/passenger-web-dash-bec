import React from "react";

const NoticeLoader = () => {
  return (
    <div className="rounded-md p-4 max-w-sm w-full">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-400 h-5 w-5"></div>
        <div className="flex-1 space-y-3 py-1">
          <div className="h-4 w-[75%] bg-slate-400 rounded-[25px]"></div>
          <div className="h-4 bg-slate-400 rounded-[25px]"></div>
          <div className="h-[20px] w-[70px] bg-slate-400 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default NoticeLoader;
