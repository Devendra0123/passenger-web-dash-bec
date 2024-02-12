import ServiceCard from "../../components/Cards/ServiceCard"
import { bookingHistoryData } from "../../consts/servicesData"

const ServiceHistory = () => {
  return (
    <>
      <div className="bg-white/75 min-h-[70vh] backdrop-blur-sm w-full p-[15px] rounded-[15px]">
        <h2 className="text-titleSize font-titleFontWeight text-titleColor " > Booking History </h2>
        <div className=" mt-[20px] flex flex-col gap-4 " >
          {bookingHistoryData?.length > 0 &&
            bookingHistoryData
              .slice(0, 2)
              .map((item, index) => <ServiceCard key={index} data={item} isHistory={true} />)}
        </div>
      </div>
    </>
  )
}

export default ServiceHistory