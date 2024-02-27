import React from "react";

const FareBreakdown = ({ data,payment_status }) => {
  return (
    <div className="box h-[300px] bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className=""
        >
          <path d="M20 10.999c-2.209 0-4 1.792-4 4.001s1.791 4 4 4 4-1.791 4-4-1.791-4.001-4-4.001zm0 7.001c-1.654 0-3-1.346-3-3s1.346-3.001 3-3.001 3 1.347 3 3.001-1.346 3-3 3zm.167-1.351v.351h-.334v-.333c-.344-.006-.702-.088-1-.242l.152-.548c.254.099.574.202.861.202l.213-.022c.383-.086.462-.48.039-.67-.311-.145-1.26-.269-1.26-1.081 0-.455.346-.861.994-.95v-.356h.334v.339c.24.006.512.049.814.141l-.121.548c-.232-.081-.487-.156-.738-.156l-.076.002c-.496.029-.541.459-.193.639.569.268 1.314.467 1.314 1.181.001.573-.446.878-.999.955zm-13.167-5.649c0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3-3 1.344-3 3zm3.883-1.368l-.108.493c-.23-.08-.485-.154-.733-.139-.446.026-.486.413-.174.575.514.242 1.182.42 1.182 1.063.002.515-.401.791-.898.86v.315h-.302v-.299c-.311-.005-.632-.079-.898-.217l.135-.493c.287.11.669.229.968.162.345-.078.415-.433.034-.604-.279-.129-1.133-.242-1.133-.973 0-.409.312-.775.895-.855v-.319h.301v.305c.215.005.459.043.731.126zm4.319 7.368h-15.202v-12h20v4.799c-.709 0-1.384.145-2 .402v-1.219c-.959-.42-1.395-1.023-1.814-1.982h-12.372c-.419.959-.855 1.562-1.814 1.982v4.036c.959.42 1.395 1.022 1.814 1.982h10.986c0 .708.144 1.384.402 2z" />
        </svg>
      </div>
      <div className="w-full flex flex-col items-center gap-[10px] text-center">
        <h2 className="text-[17px] font-semibold">Total Spent</h2>
        <div className="w-[90%] flex flex-col items-center gap-[8px]">
          {data?.length > 0 &&
            data.map(({name, ref, value}, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between text-[14px]"
              >
                <p className="font-[500]">{name}</p>
                <p className="text-primary font-semibold">£{value}</p>
              </div>
            ))}
          {/* <div className="w-full flex items-center justify-between">
            <p>Fare</p>
            <p className="text-primary font-semibold">£71.46</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p>Parking Charge</p>
            <p className="text-primary font-semibold">£2.00</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p>Waiting Charge</p>
            <p className="text-primary font-semibold">£1.00</p>
          </div>
          {serviceType == "history" && (
            <div className="w-full flex items-center justify-between">
              <p>Tips</p>
              <p className="text-primary font-semibold">£5.00</p>
            </div>
          )}
          <div className="w-full flex items-center justify-between">
            <p className="font-[500]">Total</p>
            <p className="text-primary font-semibold">£79.46</p>
          </div> */}
        </div>

        <div
          className={`w-max px-[10px] py-[8px] rounded-[5px] ${
            payment_status == "paid"
              ? "border border-green-700 text-green-700"
              : "border border-primary text-primary"
          }`}
        >
          <p>
            <span className="text-black">Payment satus :</span>
            <span className="">{payment_status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FareBreakdown;
