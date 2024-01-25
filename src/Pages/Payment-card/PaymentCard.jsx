import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { MdOutlineAddCard } from "react-icons/md";
import AddCardModal from "../../components/modal/AddCardModal";
import CardList from "./CardList";
// import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const PaymentCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="  bg-white/75 min-h-[70vh] backdrop-blur-sm w-full p-[15px] rounded-[15px]">
        <div className="flex my-2 w-[50%] justify-between items-center">
          <h2 className="text-titleSize font-titleFontWeight text-titleColor " > Cards </h2>
          <button onClick={handleOpen} className="bg-primary hover:bg-primary text-white  h-max w-max  py-[10px] px-[20px] font-semibold text-sm rounded-[20px] flex justify-between items-center gap-2 shadow-lg ">
            {" "}
            <MdOutlineAddCard size={20} /> ADD CARD
          </button>
        </div>

        <AddCardModal handleOpen={handleOpen} open={open} handleClose={handleClose} />



        <div className="bg-[#b8b7b7]  border-[1px] border-gray-400  bg-gradient-to-tr from-gray-500 to-bg-[#b8b7b7] flex flex-col justify-between p-3 rounded-[10px] w-[500px] min-h-[200px] ">
          <p className="text-white text-xl font-semibold">
            xxxx-xxxx-xxxx-1111
          </p>

          <div className="flex text-white gap-[70px]">
            <div>
              <p className="font-medium">HOLDER&rsquo;S NAME</p>
              <p className="font-semibold">test name</p>
            </div>

            <div>
              <p className="font-medium">CARD EXPIRY</p>
              <p className="font-semibold">03/2025</p>
            </div>
          </div>
        </div>

        {/* --------card-list-------- */}
        <div className="card-list  mt-7">
          <h2 className="font-medium my-5 text-fontSize_lg ">Cards List</h2>

          <div className="" >
            <CardList />
            <CardList />
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
