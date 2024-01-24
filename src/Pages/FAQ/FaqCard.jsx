import { FaBook } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const FaqCard = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-2 justify-center items-center">
          <FaBook />
          <p>Profile and Account</p>
        </div>
        <div>
          <IoIosArrowForward />
        </div>
      </div>
    </>
  );
};

export default FaqCard;
