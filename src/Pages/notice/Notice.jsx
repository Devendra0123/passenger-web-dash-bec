import NoticeCards from "./NoticeCards";

const Notice = () => {
  return (
    <>
      <div className="  bg-white p-4 rounded-[10px]  mt-2">
        <h1 className="text-2xl mt-2 mb-4 font-semibold ">Notice</h1>
        <div className="flex flex-col gap-4 " >
        <NoticeCards />
        <NoticeCards />
        <NoticeCards />
        </div>
      </div>
    </>
  );
};

export default Notice;
