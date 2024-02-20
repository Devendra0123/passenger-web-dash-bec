import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-[600] text-slate-700">Contact Us</h2>
        <p className="mt-[10px] text-[15px] ">Please contact us for any kind of query.</p>
        <div>
          <div className="whitespace-wrap mt-[40px] w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[20px]">
            <div className="w-full bg-smoke/75 flex flex-col items-center gap-[10px] rounded-[10px] p-[20px]">
              <MdOutlineMail className="text-primary text-[29px] font-[700] " />
              <h1 className="">Send us email</h1>
              <p className="pl-[10px] font-semibold text-lg text-center">
                info@britishexpresscars.co.uk
              </p>
            </div>

            <div class="w-full bg-smoke/75 flex flex-col items-center gap-[10px] rounded-[10px] p-[20px]">
              <IoCallOutline className="text-primary text-[29px] font-[700] " />
              <h1 className="">Call us at</h1>
              <p className="pl-[10px] font-semibold text-lg text-center">
                020 8111 1104
              </p>
            </div>

            <div class="col-span-2 bg-smoke/75 flex flex-col items-center gap-[10px] rounded-[10px] p-[20px]">
              <IoLocationOutline className="text-primary text-[29px] font-[700] " />
              <h1 className="">Our address</h1>
              <p className="pl-[10px] whitespace-wrap font-semibold text-lg text-center">
                {" "}
                Office 12, 450 Bath Road, Heathrow, United Kingdom, UB7 0EB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
