import { noticeData } from "../../consts/noticeData";
import NoticeCard from "./NoticeCard";

const Notice = () => {
  return (
    <>
      <div className="bg-smoke min-h-[70vh] p-[15px] rounded-[15px]">
        <h1 className="text-titleSize text-titleColor font-titleFontWeight">Notice</h1>
        <div className="mt-[10px] flex flex-col gap-4 " >
          {
            noticeData?.length > 0 && noticeData.map((item,index)=>(
              <NoticeCard data={item} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Notice;
