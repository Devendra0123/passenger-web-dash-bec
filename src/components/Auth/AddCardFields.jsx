import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { FaLock, FaTimes, FaUser } from "react-icons/fa";
import { IoCardOutline, IoInformationCircleOutline } from "react-icons/io5";

const AddCardFields = () => {
  const { setIsAuthenticated } = useAuthContext();
  return (
    <div>
      <div className="">
        <div className="input-group flex mt-3 flex-col gap-4">
          <div className="relative">
            <input
              className=" w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
              placeholder="Enter Card Number"
              name="card-number"
              type="text"
            />
            <IoCardOutline
              size={20}
              className="absolute text-gray-500 right-[10px] top-[50%] translate-y-[-50%] "
            />
          </div>
          <div className="flex relative  gap-2">
            <input
              className="w-[50%] p-2   border-[1px] border-gray-300 outline-none rounded-[8px] "
              type="text"
              id="expiryDate"
              name="expiry-date"
              placeholder="mm/yy"
            />
            <input
              className="w-[50%] p-2  pr-10 border-[1px] border-gray-300 outline-none rounded-[8px] "
              placeholder="CVC"
              name="cvc"
              type="text"
            />
            <IoInformationCircleOutline
              size={20}
              className="absolute text-gray-500 right-[10px] top-[50%] translate-y-[-50%] "
            />
          </div>
          <div className="relative">
            <input
              className="w-full p-2 pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
              placeholder="Name on Card"
              type="text"
            />
            <FaUser
              size={20}
              className="absolute text-gray-500 right-[10px] top-[50%] translate-y-[-50%] "
            />
          </div>
        </div>
        {/* Billing Address */}
        <div className="mt-[20px] ">
          <h2 className="text-[17px] font-[600]">Billing Address</h2>

          <div className="w-full grid grid-cols-2 gap-[20px] mt-[20px]">
            {/* <div className="col-span-1">
                  <input
                    className=" w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
                    placeholder="First Name"
                    name="first-name"
                    type="text"
                  />
                </div>

                <div className="col-span-1">
                  <input
                    className=" w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
                    placeholder="last Name"
                    name="last-name"
                    type="text"
                  />
                </div> */}

            <div className="col-span-1">
              <input
                className=" w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
                placeholder="Country"
                name="country"
                type="text"
              />
            </div>

            <div className="col-span-1">
              <input
                className=" w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
                placeholder="Address Line 1"
                name="address-line-1"
                type="text"
              />
            </div>

            <div className="col-span-1">
              <input
                className=" w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
                placeholder="Address Line 2"
                name="address-line-2"
                type="text"
              />
            </div>

            <div className="col-span-1">
              <input
                className=" w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
                placeholder="Town or City"
                name="Town or City"
                type="text"
              />
            </div>

            <div className="col-span-1">
              <input
                className=" w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
                placeholder="Postal Code"
                name="Postal Code"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-5 justify-center items-center gap-4">
          <FaLock className="text-green-500" />
          <p className="text-fontSize_sm">
            {" "}
            Your payment info will be stored securely
          </p>
        </div>
        <div className="my-5">
          <button sx={{ width: "100%" }} variant="contained">
            save
          </button>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <input id="checkbox" type="checkbox" />
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
