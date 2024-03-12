import React from "react";
import CardForm from "../Stripe/CardForm";

const AddCardFields = () => {

  return (
    <div className="w-full flex flex-col items-start">
      <div className="w-[80%]">
        <CardForm />
      </div>
    </div>
  );
};

export default AddCardFields;
