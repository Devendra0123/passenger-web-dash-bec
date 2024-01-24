import { FaUserCircle } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { ImCreditCard } from "react-icons/im";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <>
      <div className="  bg-white h-[80vh] pl-[50px] p-4 rounded-[10px]  mt-2">
        <h1 className="text-2xl mt-2 mb-4 font-semibold ">Profile</h1>
        <div>
          <p className="font-medium my-5 text-xl ">Personal Information</p>
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
            <p className="font-medium my-5 text-xl ">Card</p>

            <Link to={"/account/cards"}>
              <div className="flex ml-5 w-[60%] hover:bg-[#dfdfdf] cursor-pointer items-center rounded-[10px] py-2 px-2 justify-between">
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
