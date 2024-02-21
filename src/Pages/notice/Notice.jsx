
import NoticeCard from "./NoticeCard";

const Notice = ({data}) => {
  return (
    <>
      <div className="bg-smoke min-h-[70vh] p-[15px] rounded-[15px]">
        <h1 className="text-titleSize text-titleColor font-titleFontWeight">Notification</h1>
        <div className="mt-[10px] flex flex-col gap-4 " >
          {
            data?.length > 0 && data.map((item,index)=>(
              <NoticeCard key={index} data={item} />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Notice;
