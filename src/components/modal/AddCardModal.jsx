import { Box, Button, Modal } from "@mui/material";
import { FaLock } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  AddressElement,
} from "@stripe/react-stripe-js";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "600px",
  minHeight: "400px",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

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

const AddCardModal = (props) => {
  const { handleClose, handleOpen, open } = props;
  const [expiryDate, setExpiryDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { authToken, setIsAuthenticated } = useAuthContext();

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [isPending, setIsPending] = useState(false);
  const [billing_details, setBilling_details] = useState({});

  // // Handle Expiry date change
  // const handleExpiryDateChange = (event) => {
  //   let value = event.target.value;

  //   // Remove non-numeric characters
  //   value = value.replace(/\D/g, "");
  //   // Ensure the first two characters (month) are not greater than 12
  //   if (value.length >= 2) {
  //     const month = parseInt(value.substring(0, 2), 10);
  //     if (month > 12) {
  //       setErrorMessage("Expiry month can not be greater than 12.");
  //       return;
  //     }
  //   }
  //   // Ensure the year does not exceed 4 digits
  //   if (value.length > 4) {
  //     value = value.substring(0, 4);
  //   }
  //   // Add a slash after the first two characters
  //   if (value.length > 2) {
  //     value = value.replace(/^(.{2})/, "$1/");
  //   }
  //   // Update the state
  //   setExpiryDate(value);
  // };

  // Handle Stripe form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    if (!cardElement) return;

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
          const apiTokenResponse = await addCard(authToken, token.id);
          console.log(apiTokenResponse);
          setIsAuthenticated(true);
          navigate(`/`);
          setIsPending(false);
        }
      }
    } catch (error) {
      setIsPending(false);
      const errorCode = error.code || "unknown";
      const errorMessage = error.message || "An error occurred";
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            onSubmit={handleSubmit}
            className="max-h-[85vh] overflow-y-auto"
          >
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

            <button
              type="submit"
              disabled={!stripe | isPending}
              className="mt-[20px] w-[80%] px-[20px] py-[10px] bg-blue-500 text-white "
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
        </Box>
      </Modal>
    </div>
  );
};

export default AddCardModal;
