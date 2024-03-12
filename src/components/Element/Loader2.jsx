import React from "react";

const Loader2 = () => {
  return (
    <div className="flex items-center gap-[3px]">
      <div className="loader-circle loader-circle-1 w-[6px] h-[6px] rounded-full bg-blue-500 " />
      <div className="loader-circle loader-circle-2 w-[6px] h-[6px] rounded-full bg-blue-500 " />
      <div className="loader-circle loader-circle-3 w-[6px] h-[6px] rounded-full bg-blue-500 " />
    </div> 
  );
};

export default Loader2;
