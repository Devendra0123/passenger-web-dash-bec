import { Box, Button, Modal } from "@mui/material";
import { FaLock } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useState } from "react";

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

const AddCardModal = (props) => {
  const { handleClose, handleOpen, open } = props;
  const [expiryDate, setExpiryDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Expiry date change
  const handleExpiryDateChange = (event) => {
    let value = event.target.value;

    // Remove non-numeric characters
    value = value.replace(/\D/g, "");
    // Ensure the first two characters (month) are not greater than 12
    if (value.length >= 2) {
      const month = parseInt(value.substring(0, 2), 10);
      if (month > 12) {
        setErrorMessage("Expiry month can not be greater than 12.");
        return;
      }
    }
    // Ensure the year does not exceed 4 digits
    if (value.length > 4) {
      value = value.substring(0, 4);
    }
    // Add a slash after the first two characters
    if (value.length > 2) {
      value = value.replace(/^(.{2})/, "$1/");
    }
    // Update the state
    setExpiryDate(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add logic for form submission here
    console.log("Submitted:", expiryDate);
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
          <div className="">
            <h2 className="text-titleSize text-center font-titleFontWeight text-titleColor ">
              Add Cards{" "}
            </h2>
            <button
              onClick={handleClose}
              className="absolute top-[20px] right-[20px]"
            >
              <FaTimes className="text-primary" size={20} />
            </button>
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
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
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
              <Button sx={{ width: "100%" }} variant="contained">
                save
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCardModal;
