import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  AddressElement,
} from "@stripe/react-stripe-js";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { useAuthContext } from "../../Context/AuthContext";
import { addCard } from "../../query/BackendPostQuery";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const CardForm = () => {
  const { authToken, setIsAuthenticated } = useAuthContext();

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [billing_details, setBilling_details] = useState({});
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, setIsPending] = useState(false);

  // Handle Stripe form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    if (!cardElement) return;

    if (!hasAgreedToTerms) {
      setErrorMessage(
        "You must agree with our terms and conditions to proceed further."
      );
      return;
    }
    setIsPending(true);
    setErrorMessage("");
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billing_details,
      });

      if (error) {
        setErrorMessage(error.message);
        return;
      }
      console.log("[PaymentMethod]", paymentMethod);

      if (paymentMethod) {
        let token = await stripe
          .createToken(cardElement)
          .then((res) => res.token);
        console.log(token);
        if (token?.id) {
          const {data, message} = await addCard(authToken, token.id);
          console.log(data);
          setIsAuthenticated(true);
          toast.success(message)
          setIsPending(false);
          navigate(`/`);
         
        }
      }
    } catch (error) {
      setIsPending(false);
      const errorCode = error.code || "unknown";
      const errorMessage = error.message || "An error occurred";
      setErrorMessage(errorMessage);
      toast.error(errorMessage)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        Billing Address
        <AddressElement
          options={{
            mode: "shipping",
          }}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={(event) => {
            console.log("Address element [change]", event);
            setBilling_details(event.value);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>

      {errorMessage && (
        <p className="text-red-500 text-[14px]">{errorMessage}</p>
      )}
      <div className="flex mt-5 justify-center items-center gap-4">
        <FaLock className="text-green-500" />
        <p className="w-full text-start text-fontSize_sm">
          {" "}
          Your payment info will be stored securely
        </p>
      </div>

      <div className="flex items-start gap-2 mt-[20px]">
        <input
          id="checkbox"
          type="checkbox"
          checked={hasAgreedToTerms}
          value={hasAgreedToTerms}
          onClick={() => setHasAgreedToTerms((prev) => !prev)}
          className="mt-[4px]"
        />
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
        type="submit"
        disabled={!stripe | isPending | !hasAgreedToTerms}
        className={`mt-[20px] w-[80%] px-[20px] py-[10px] ${(!stripe | isPending | !hasAgreedToTerms) ? "bg-blue-500/50" : "bg-blue-500"} text-white `}
      >
        {isPending ? (
          <span className="flex items-center gap-[3px] justify-center ">
            <svg
              className="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M0 11c.511-6.158 5.685-11 12-11s11.489 4.842 12 11h-2.009c-.506-5.046-4.793-9-9.991-9s-9.485 3.954-9.991 9h-2.009zm21.991 2c-.506 5.046-4.793 9-9.991 9s-9.485-3.954-9.991-9h-2.009c.511 6.158 5.685 11 12 11s11.489-4.842 12-11h-2.009z" />
            </svg>
            Processing...
          </span>
        ) : (
          "Continue"
        )}
      </button>
      {/* <button>
        Pay
      </button> */}
    </form>
  );
};

export default CardForm;
