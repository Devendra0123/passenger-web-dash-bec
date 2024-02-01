import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const PaymentCard = ({
  cardNumber,
  isVerified,
  cardHolderName,
  cardExpiryDate,
  isActive,
}) => {
  return (
    <div className="bg-[#b8b7b7]  border-[1px] border-gray-200 shadow-lg shadow-slate-400/50 bg-gradient-to-tr from-blue-200 to-slate-200 flex flex-col justify-between p-3 rounded-[10px] w-[500px] min-h-[200px] ">
      <div className="flex items-center justify-between">
        <p className=" text-xl font-semibold">{cardNumber}</p>
        <div className="flex items-center gap-3">
          {isVerified && (
            <div className="text-green-800 flex items-center gap-1 px-[13px] py-[6px] rounded-[25px] bg-white ">
              <IoCheckmarkCircleOutline className="" />
              <p>verified</p>
            </div>
          )}
          {isActive && (
            <div className="text-green-800 flex items-center gap-1 px-[13px] py-[6px] rounded-[25px] bg-white ">
              <p>Active</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-[70px]">
        <div>
          <p className="font-medium">HOLDER&rsquo;S NAME</p>
          <p className="font-semibold">{cardHolderName}</p>
        </div>

        <div>
          <p className="font-medium">CARD EXPIRY</p>
          <p className="font-semibold">{cardExpiryDate}</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
