import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

const AddCardFields = () => {
  const { setIsAuthenticated } = useAuthContext();
  return (
    <div>
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
