import { TbBellFilled } from "react-icons/tb";

const NoticeCard = ({ data }) => {
  const { title, date, description, status } = data;
  return (
    <>
      <div className="notice-cards border rounded-md  border-gray-200 flex gap-2  p-2  h-max w-full ">
        <div className="left">
          <TbBellFilled className="text-[#BABABA] mt-1 " size={30} />
        </div>
        <div className="right flex flex-col gap-2 ">
          <div className="font-medium text-[17px] ">{title}</div>
          <div>{date}</div>
          <div>
            <span className="bg-green-700 text-sm px-2 py-1 rounded-[20px] text-white">
              {status}
            </span>{" "}
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeCard;
