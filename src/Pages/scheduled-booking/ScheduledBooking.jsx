import { useEffect, useState } from "react";
import ServiceCard from "../../components/Cards/ServiceCard";
import { useAuthContext } from "../../Context/AuthContext";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase/setup";

const ScheduledBooking = () => {
  const { firebaseReferenceID } = useAuthContext();

  const [scheduleBookingData, setScheduleBookingData] = useState();

    // Get Schedule booking data
    function getScheduleBookingData(referenceId) {
      try {
        const q = query(collection(db, "passengers", referenceId, "schedules"));
  
        onSnapshot(q, (querySnapshot) => {
          const bookingData = [];
          querySnapshot.forEach((doc) => {
            console.log(doc)
            bookingData.push(doc.data());
          });
  
          setScheduleBookingData(bookingData);
        });
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    }
  
    useEffect(() => {
      if (firebaseReferenceID) {
        getScheduleBookingData(firebaseReferenceID);
      }
    }, [firebaseReferenceID]);

  return (
    <>
      <div className="bg-white/75 min-h-[70vh] backdrop-blur-sm w-full p-[15px] rounded-[15px]">
        <h2 className="text-titleSize font-titleFontWeight text-titleColor " > Scheduled Booking </h2>
        <div className="mt-[20px] flex flex-col gap-4 " >
          {scheduleBookingData?.length > 0 &&
            scheduleBookingData
              .map((item, index) => <ServiceCard key={index} data={item} />)}
        </div>
      </div>
    </>
  );
};

export default ScheduledBooking;
