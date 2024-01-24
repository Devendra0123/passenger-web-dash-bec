import ScheduledCards from "./ScheduledCards";

const ScheduledBooking = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-[10px]  mt-2">
        <h1 className="text-2xl font-medium mt-2 mb-4 ">Scheduled Services</h1>
        <div className="flex flex-col gap-4 " >
          <ScheduledCards />
          <ScheduledCards />
          <ScheduledCards />
        </div>
      </div>
    </>
  );
};

export default ScheduledBooking;
