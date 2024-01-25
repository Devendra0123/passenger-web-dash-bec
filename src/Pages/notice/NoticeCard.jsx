import { TbBellFilled } from "react-icons/tb";

const NoticeCard = ({ data }) => {
  const { title, date, description, status, seen } = data;
  return (
    <>
      <div className="notice-cards border rounded-md border-gray-200 flex gap-2  p-2  h-max w-full ">
        <div className="left relative h-max">
          <TbBellFilled className="text-[#BABABA] mt-1 " size={30} />
          {!seen && (
            <div className="absolute bottom-[2px] right-[5px] w-[5px] h-[5px] rounded-full bg-primary " />
          )}
        </div>
        <div className="right flex flex-col gap-2 ">
          <div className="font-medium text-[17px] ">{title}</div>
          <div>{date}</div>
          <div>
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoticeCard;
