import { Box, Modal, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MdOutlineAddCard } from "react-icons/md";
import AddCardModal from "../../components/modal/AddCardModal";
import { MdDelete } from "react-icons/md";

import PaymentCard from "../../components/Cards/PaymentCard";
import { getPassengerCardData } from "../../query/FirestoreQuery";
import { deleteCard } from "../../query/BackendPostQuery";
import { useAuthContext } from "../../Context/AuthContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PaymentCardList = () => {
  const { authToken } = useAuthContext();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [cardData, setCardData] = useState();

  const fetchCardData = async () => {
    await getPassengerCardData().then((res) => {
      setCardData(res);
    });
  };
  useEffect(() => {
    fetchCardData()
  }, []);

  useEffect(() => {
    if (cardData?.length > 0) {
      const activeCard = cardData.filter((item) => item.data.is_active);
      console.log(activeCard);
    }
  }, [cardData]);

  console.log(cardData);

  const handleDeleteCard = async (cardId) => {
    console.log(authToken, cardId)
    if(!cardId | !authToken) return;
    try{
      await deleteCard(authToken, cardId)
      fetchCardData()
    }catch(err){
      console.log(err)
    }
  };

  return (
    <>
      <div className="  bg-white/75 min-h-[70vh] backdrop-blur-sm w-full p-[15px] rounded-[15px]">
        <div className="flex my-5 w-[50%] justify-between items-center">
          <h2 className="text-titleSize font-titleFontWeight text-titleColor ">
            {" "}
            Cards{" "}
          </h2>
          <button
            onClick={handleOpen}
            className="bg-primary hover:bg-primary text-white  h-max w-max  py-[10px] px-[20px] font-semibold text-sm rounded-[20px] flex justify-between items-center gap-2 shadow-lg "
          >
            {" "}
            <MdOutlineAddCard size={20} /> ADD CARD
          </button>
        </div>

        <AddCardModal
          handleOpen={handleOpen}
          open={open}
          handleClose={handleClose}
        />

        <PaymentCard
          cardNumber="xxxx-xxxx-xxxx-1111"
          isVerified={true}
          cardHolderName="test name"
          cardExpiryDate="03/2025"
          isActive={true}
        />

        {/* --------card-list-------- */}
        <div className="card-list  mt-7">
          <h2 className="font-medium my-5 text-fontSize_lg ">Cards List</h2>
          <div className="flex flex-col gap-6">
            {cardData?.length > 0 &&
              cardData.map(({ data }, index) => (
                <div key={index} className="flex items-start gap-3">
                  <PaymentCard
                    cardNumber={data.card_masked}
                    isVerified={true}
                    isActive={data.is_active}
                    cardHolderName={data.name}
                    cardExpiryDate={`${data.exp_month}/${data.exp_year}`}
                  />
                  <Tooltip
                    arrow={true}
                    sx={{ zIndex: 0 }}
                    leaveDelay={0}
                    title="Delete this payment card"
                  >
                    <div
                      onClick={() => handleDeleteCard(data?.id)}
                      className="cursor-pointer w-[40px] h-[40px] rounded-full bg-light_gray text-primary flex items-center justify-center "
                    >
                      <MdDelete />
                    </div>
                  </Tooltip>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCardList;
