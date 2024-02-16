import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { IoCardOutline, IoInformationCircleOutline } from "react-icons/io5";
import { FaLock, FaTimes, FaUser } from "react-icons/fa";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import CardForm from "../Stripe/CardForm";

const AddCardFields = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();

  const stripe = useStripe();
  const elements = useElements();

  const [number, setNumber] = useState("");
  const [exp_date, setExp_date] = useState();
  const [cvc, setCvc] = useState("");
  const [exp_month, setExp_month] = useState(""); // New state for exp_month
  const [exp_year, setExp_year] = useState("");

  useEffect(() => {
    if (exp_date) {
      setExp_month(exp_date.replace(/\//g, "").substring(0, 2));
      setExp_year(exp_date.replace(/\//g, "").substring(2, 4));
    }
  }, [exp_date]);

  // expiry date format
  const expriy_format = (value) => {
    const expdate = value;

    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };

  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-[80%]">
        <CardForm />
        <div className="input-group flex mt-3 flex-col gap-4">
          <button>Get Card Token</button>
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
          navigate("/");
        }}
        className="mt-[20px] w-[80%] px-[20px] py-[10px] bg-blue-500 text-white "
      >
        Continue
      </button>
    </div>
  );
};

export default AddCardFields;
