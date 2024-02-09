import { Box, Modal } from "@mui/material";
import React from "react";
import { FaTimes } from "react-icons/fa";

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

const CancelBookingConfirmation = ({ handleClose, open }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className=" flex flex-col gap-[20px] ">
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-lg font-bold">Cancel Booking</h2>
              <button
                onClick={handleClose}
                className="absolute top-[20px] right-[20px]"
              >
                <FaTimes className="text-primary" size={20} />
              </button>
            </div>
            <h3 className="font-[600] ">
              Are you sure you want to cancel the booking? You may be charged
              some amount for this.
            </h3>

            <div className="flex items-center gap-[20px]">
              <button className="px-[14px] py-[7px] rounded-[4px] bg-blue-500 text-white ">No</button>
              <button className="px-[14px] py-[7px] rounded-[4px] bg-primary text-white ">Yes</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CancelBookingConfirmation;
