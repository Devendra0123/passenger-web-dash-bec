import { FaUserCircle } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { ImCreditCard } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";

import { Link } from "react-router-dom";
import EditProfileModal from "../../components/modal/EditProfileModal";
import { IconButton, Tooltip } from "@mui/material";

const Account = () => {
  return (
    <>
      <div className=" bg-white/75 min-h-[70vh] backdrop-blur-sm w-full p-[15px] rounded-[15px]">
        <h2 className="text-titleSize font-titleFontWeight text-titleColor " > Profile </h2>
        <div>
          <p className="font-medium my-5 text-fontSize_lg ">Personal Information</p>
          {/* ----personal-information------ */}
          <div className="info-containe ml-5 flex  flex-col gap-4 ">
            <div className="flex gap-3 ">


              <div className="left">
                <FaUserCircle size={30} className="" />
              </div>
              <div className="right">
                <div className="font-bold">Name</div>
                <div>test name</div>
              </div>

              <div className="ml-[200px]">
                <EditProfileModal />
              </div>



            </div>

            <div className="flex gap-3 ">
              <div className="left">
                <IoMailOutline size={30} className="" />
              </div>
              <div className="right">
                <div className="font-bold">Email</div>
                <div>testname@gmail.com</div>
              </div>
            </div>

            <div className="flex gap-3 ">
              <div className="left">
                <BsTelephone size={30} className="" />
              </div>
              <div className="right">
                <div className="font-bold">Phone</div>
                <div>+977 987654321</div>
              </div>
            </div>
          </div>

          {/* ------user-Payment-card-info-------- */}
          <div className="card-section">
            <p className="font-medium my-5 text-fontSize_lg  ">Card</p>

            <Link to={"/account/cards"}>
              <div className="flex ml-5 w-[60%] border-[1px] border-gray-400 bg-light_gray hover:bg-orange-100 cursor-pointer items-center rounded-[10px] py-2 px-2 justify-between">
                <div className="flex gap-2 justify-center items-center">
                  <ImCreditCard size={25} />
                  <p className="font-medium">My Card</p>
                </div>
                <div>
                  <IoIosArrowForward />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
