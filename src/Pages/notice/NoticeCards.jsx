import { TbBellFilled } from "react-icons/tb"



const NoticeCards = () => {
  return (
    <>
         <div className="notice-cards border rounded-md  border-gray-200 flex gap-2  p-2  h-max w-full ">
          <div className="left">
            <TbBellFilled className="text-[#BABABA] mt-1 " size={30} />
          </div>
          <div className="right flex flex-col gap-2 ">
            <div className="font-medium text-xl ">Booking Confirmed</div>
            <div>
              09/22/2023 <span>13:51</span>{" "}
            </div>
            <div>
              Booking #10005 has been{" "}
              <span className="bg-green-700 text-sm px-2 py-1 rounded-[20px] text-white">
                Confirmed
              </span>{" "}
              of 25 Oct 2023, 12:55
            </div>
          </div>
        </div>
    </>
  )
}

export default NoticeCards