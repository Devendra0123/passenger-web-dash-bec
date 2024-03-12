import React from "react";

const CardInfo = ({ data }) => {
  const { brand, brand_image, card_masked, exp_month, exp_year, is_active } = data;

  return (
    <div
      data-id="9"
      className="box h-[300px] bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M21.5 6c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19zm2.5 0c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12zm-14 7c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c.484 0 .936.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.326 1.571.857 2.123-.384.239-.836.377-1.32.377zm1.5-2.5c0-1.381 1.119-2.5 2.5-2.5 1.383 0 2.5 1.119 2.5 2.5s-1.117 2.5-2.5 2.5c-1.381 0-2.5-1.119-2.5-2.5zm-4.5 4.5h-3v1h3v-1zm4 0h-3v1h3v-1zm5 0h-3v1h3v-1zm4 0h-3v1h3v-1z" />
        </svg>
      </div>
      <div className="w-full flex flex-col items-center gap-[10px] text-center">
        <h2 className="text-[17px] font-semibold">Payment Card</h2>

        <div>
          <div className="flex items-center gap-[10px] px-[10px] py-[8px] rounded-[5px] border border-blue-500">
           {
            brand_image && (
              <img src={brand_image} alt="brand" className="w-[30px] h-[30px] object-contain " />
            )
           }
            {card_masked && <p>{card_masked}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
