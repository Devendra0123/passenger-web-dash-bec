
import React from "react";
import { FaRegStar, FaUserCircle } from "react-icons/fa";
import { ImCreditCard } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Rating from "../Element/Rating";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";

const ProfileData = ({data}) => {

    console.log(data)
  return (
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
            <div>{data?.name}</div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div className="left">
            <IoMailOutline size={30} className="" />
          </div>
          <div className="right">
            <div className="font-bold">Email</div>
            <div>{data?.email}</div>
          </div>
        </div>

        <div className="flex gap-3 ">
          <div className="left">
            <BsTelephone size={30} className="" />
          </div>
          <div className="right">
            <div className="font-bold">Phone</div>
            <div>{data?.mobile}</div>
          </div>
        </div>
{
  data?.rating && (
    <div className="flex gap-3 items-center ">
    <div className="left">
      <FaRegStar size={30} className="" />
    </div>
    <div className="right">
      <div className="font-bold">Rating</div>
      <Rating NumberOfRating={data?.rating?.count} ratingValue={data?.rating?.average} />
    </div>
  </div>
  )
}
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
  );
};

export default ProfileData;
