import { MdOutlineAddCard } from "react-icons/md";

const PaymentCard = () => {
  return (
    <>
      <div className="  bg-white h-[80vh] pl-[50px] p-4 rounded-[10px]  mt-2">
        <div className="flex my-2 w-[50%] justify-between items-center">
          <h1 className="text-2xl mt-2 mb-4 font-semibold ">Cards</h1>
          <button className="bg-[#0090B6] hover:bg-[#0ea8d3] text-white  h-max w-max  py-2 px-3 font-semibold text-sm rounded-[20px] flex justify-between items-center gap-2 shadow-lg ">
            {" "}
            <MdOutlineAddCard size={20} /> ADD CARD
          </button>
        </div>
        <div className="bg-[#b8b7b7] bg-gradient-to-tr from-gray-500 to-bg-[#b8b7b7] flex flex-col justify-between p-3 rounded-[10px] w-[500px] h-[150px] ">
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
          <h1 className="text-2xl mt-2 mb-4 font-semibold ">Cards List</h1>

          <div className="w-[500px] px-4 py-2 rounded-[10px] shadow-md bg-slate-400 flex gap-2 flex-col justify-evenly h-max">
            <div className="flex w justify-between">
              <p className="text-xl font-medium text-white">
                xxxx-xxxx-xxxx-1111
              </p>
              <p className="text-[#0090B6] font-bold">Verified</p>
            </div>
            <p className="text-white">03/2025</p>
            <span className="bg-green-700 w-max rounded-[20px] text-sm text-white py-1 px-3">
              Active
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
