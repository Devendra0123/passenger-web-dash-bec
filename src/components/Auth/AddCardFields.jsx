import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import CardForm from "../Stripe/CardForm";

const AddCardFields = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthContext();

  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-[80%]">
        <CardForm />
      </div>
    </div>
  );
};

export default AddCardFields;
