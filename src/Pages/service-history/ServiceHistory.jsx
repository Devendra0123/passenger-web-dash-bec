import { useEffect, useState } from "react";
import { useAuthContext } from "../../Context/AuthContext";
import ServiceCard from "../../components/Cards/ServiceCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../firebase/setup";

const ServiceHistory = () => {
  const { firebaseReferenceID } = useAuthContext();

  const [historyBookingStatus, setHistoryBookingStatus] = useState({
    pending: false,
  });
  const [historyBookingData, setHistoryBookingData] = useState();

  // Get history booking data
  function getHistoryBookingData(referenceId) {
    try {
      setHistoryBookingStatus({ pending: true });
      const q = query(collection(db, "passengers", referenceId, "history"));

      onSnapshot(q, (querySnapshot) => {
        const bookingData = [];
        querySnapshot.forEach((doc) => {
          console.log(doc);
          bookingData.push(doc.data());
        });

        setHistoryBookingData(bookingData);
        setHistoryBookingStatus({ pending: false });
      });
    } catch (error) {
      setHistoryBookingStatus({ pending: false });
      console.error("Error fetching document:", error);
    }
  }

  useEffect(() => {
    if (firebaseReferenceID) {
      getHistoryBookingData(firebaseReferenceID);
    }
  }, [firebaseReferenceID]);

  return (
    <>
      <div className="bg-white/75 min-h-[70vh] backdrop-blur-sm w-full p-[15px] rounded-[15px]">
        <h2 className="text-titleSize font-titleFontWeight text-titleColor ">
          {" "}
          Booking History{" "}
        </h2>
        {historyBookingStatus.pending ? (
          "Loader"
        ) : (
          <div className=" mt-[20px] flex flex-col gap-4 ">
            {historyBookingData?.length > 0 ?
              historyBookingData
                .slice(0, 2)
                .map((item, index) => (
                  <ServiceCard key={index} data={item} isHistory={true} />
                )) : (
                  <div>
                    <p>
                      No Data Found
                    </p>
                  </div>
                )}
          </div>
        )}
      </div>
    </>
  );
};

export default ServiceHistory;
