import React from "react";
import AddCardFields from "../../components/Auth/AddCardFields";
import StepWiseAuthenticationTab from "../../components/Tab/StepWiseAuthenticationTab";
import { PaymentElement } from "@stripe/react-stripe-js";
import {Elements} from '@stripe/react-stripe-js';

const AddCardDetails = () => {

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex flex-col items-center justify-center p-[20px]">
      <div className="w-[80%] h-[600px] grid grid-cols-3 shadow-md rounded-lg overflow-hidden ">
        <div className="z-10 col-span-1 h-[600px] bg-slate-200 flex flex-col items-center justify-center p-[20px]">
          <div className="flex flex-col items-center gap-[10px]">
            <img
              src="/asset/logo/BEC_ICON.png"
              alt="logo"
              className="w-[70px] object-contain"
            />
            <h2 className="text-[25px] font-[600]">
              British <span className="text-primary">Express</span> Cars
            </h2>
            <p className="text-center mt-[20px]">
              Offering the best reliable and safest transfer service
            </p>
          </div>
        </div>

        <div className="col-span-2 h-[95%] overflow-y-auto bg-smoke/75 flex flex-col items-center gap-[20px] p-[20px]">
          <StepWiseAuthenticationTab activeTab="required_card" />
          <h2 className="w-full text-start font-semibold text-[25px] mt-[50px]">
            Add Card Details
          </h2>

          <AddCardFields />
        </div>
      </div>
    </div>
  );
};

export default AddCardDetails;
