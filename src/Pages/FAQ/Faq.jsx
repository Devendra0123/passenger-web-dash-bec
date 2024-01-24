import { FaBook } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <>
      <div className="  bg-white h-[80vh] pl-[50px] p-4 rounded-[10px]  mt-2">
        <h1 className="text-2xl mt-2 mb-4 font-semibold ">FAQs</h1>
        <div className="faq-section w-[60%] flex flex-col gap-2 ">
          <Link to={'/faq/faq-details'} >
            <div className="flex hover:bg-[#dfdfdf] items-center rounded-[10px] py-2 px-1 justify-between">
              <div className="flex gap-2 justify-center items-center">
                <FaBook />
                <p>Profile and Account</p>
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </Link>


          {/* <div className="flex justify-between">
            <div className="flex gap-2 justify-center items-center">
              <FaBook />
              <p>Bookings</p>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div> */}
          {/* <div className="flex justify-between">
            <div className="flex gap-2 justify-center items-center">
              <FaCircleInfo />
              <p>Policies and Other info</p>
            </div>
            <div>
              <IoIosArrowForward />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Faq;
