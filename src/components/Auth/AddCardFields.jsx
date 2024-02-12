import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const AddCardFields = () => {
  const { setIsAuthenticated } = useAuthContext();
  return (
    <div>
      <div className="w-full flex flex-col items-center gap-[20px]">
        {/* Credit card Image */}
        <div className="w-full flex justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="104"
            viewBox="0 0 24 24"
          >
            <path d="M0 8v-3c0-1.105.895-2 2-2h20c1.104 0 2 .895 2 2v3h-24zm24 3v8c0 1.104-.896 2-2 2h-20c-1.105 0-2-.896-2-2v-8h24zm-15 6h-6v1h6v-1zm3-2h-9v1h9v-1zm9 0h-3v1h3v-1z" />
          </svg>
        </div>
        <div className="w-full grid grid-cols-2 gap-[20px] ">
          <input type="number" placeholder="Card Number" className="col-span-2 p-[5px] rounded-[4px] bg-light_gray " />
          <input type="text" placeholder="Cardholder Name" className="col-span-2 p-[5px] rounded-[4px] bg-light_gray " />
          <input type="text" placeholder="Expiry Date" className="col-span-1 p-[5px] rounded-[4px] bg-light_gray " />
          <input type="number" placeholder="CVC" className="col-span-1 p-[5px] rounded-[4px] bg-light_gray " />
        </div>

        {/* Accept Terms and condition */}
        <div className="flex items-start gap-1">
          <input id="checkbox" type="checkbox" className="mt-[5px]" />
          <label htmlFor="checkbox">
            I agree to the{" "}
            <Link to="/terms-and-conditions" className="text-blue-500">
              terms and condition
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="text-blue-500">
              privacy policy
            </Link>
            .
          </label>
        </div>
      </div>

      <button
        onClick={() => {
          setIsAuthenticated(true);
        }}
        className="mt-[20px] w-full px-[20px] py-[10px] bg-blue-500 text-white "
      >
        Continue
      </button>
    </div>
  );
};

export default AddCardFields;
