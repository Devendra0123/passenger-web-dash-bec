import React from "react";
import NoticeSlider from "../slider/NoticeSlider";

const Notice = ({data}) => {
  console.log(data)
  return (
    <div className="relative w-full overflow-hidden">
      <div className="bg-white/75 backdrop-blur-sm w-full p-[15px] rounded-[15px] ">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-titleSize font-titleFontWeight text-titleColor">Notice</h2>
          {/* <Link to="/notice" className="text-blue-500 text-[14px]">View more</Link> */}
        </div>

        <div className="mt-[10px] w-full flex flex-col">
          <NoticeSlider data={data} />
        </div>
      </div>
      <div className="gradient-circle z-[-1] absolute top-[-20px] left-[-20px] w-[200px] h-[200px] rounded-full " />
    </div>
  );
};

export default Notice;
