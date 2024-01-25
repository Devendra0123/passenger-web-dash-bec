import React from "react";
import { useSearchParams } from "react-router-dom";

const SupportDetails = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const title =
    category == "profile-and-account"
      ? "Profile and Account"
      : category == "bookings"
      ? "Bookings"
      : category == "policies-and-other-info"
      ? "Policies and other info"
      : null;
  return (
    <div className="  bg-smoke h-[70vh] p-[15px] rounded-[15px]">
      {title && (
        <h1 className="text-titleSize text-titleColor font-titleFontWeight ">
          Support - {title}
        </h1>
      )}

      <div className="w-full mt-[20px]">
        <p className="italic">Fill the form and submit it.</p>
        <form className="mt-[30px] w-[75%] flex flex-col gap-[10px]">
          <div>
            <label>Subject</label>
            <input
              type="text"
              placeholder=""
              className="w-full p-[8px] rounded-[4px] outline-none bg-light_gray"
            />
          </div>

          <div>
            <label>Booking ID</label>
            <input
              type="text"
              placeholder=""
              className="w-full p-[8px] rounded-[4px] outline-none bg-light_gray"
            />
          </div>

          <div>
            <label>Comment</label>
            <textarea
              placeholder=""
              className="w-full h-[150px] p-[8px] rounded-[4px] outline-none bg-light_gray"
            />
          </div>

          <div>
            <button className="w-max bg-blue-500 text-white px-[12px] py-[8px] rounded-[4px] ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportDetails;
