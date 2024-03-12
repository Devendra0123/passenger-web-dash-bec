import React, { useEffect, useState } from "react";
import CurrentRide from "../components/CurrentRide";
import ScheduledBooking from "../components/ScheduledBooking";
import Notice from "../components/Notice";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/setup";
import { useAuthContext } from "../Context/AuthContext";

const Home = () => {
  const { firebaseReferenceID, isAuthenticated } = useAuthContext();

  const [noticeData, setNoticeData] = useState();
  const [scheduleBookingData, setScheduleBookingData] = useState();
  const [noticeStatus, setNoticeStatus] = useState({
    pending: true,
  });
  const [scheduleBookingStatus, setScheduleBookingStatus] = useState({
    pending: true,
  });
  const [currentBookingStatus, setCurrentBookingStatus] = useState({
    pending: true
  })
  const [currentBookingData, setCurrentBookingData] = useState()

    // Get Profile Data
    function getCurrentBookingData(referenceID) {
      try {
        const docRef = doc(db, "passengers", referenceID, "data", "current-booking");
        onSnapshot(docRef, (doc) => {
          setCurrentBookingData(doc.data());
          setCurrentBookingStatus({ pending: false});
        });
      } catch (error) {
        setCurrentBookingStatus({ pending: false });
      }
    }

  // Get Notice Data
  function getPassengerNoticeData(referenceId) {
    try {
      const q = query(collection(db, "passengers", referenceId, "notices"));

      onSnapshot(q, (querySnapshot) => {
        const notices = [];
        querySnapshot.forEach((doc) => {
          notices.push(doc.data());
        });
        setNoticeData(notices);
        setNoticeStatus({
          pending: false,
        });
      });
    } catch (error) {
      setNoticeStatus({
        pending: false,
      });
      console.error("Error fetching document:", error);
    }
  }

  // Get Schedule booking data
  function getScheduleBookingData(referenceId) {
    try {
      const q = query(collection(db, "passengers", referenceId, "schedules"));

      onSnapshot(q, (querySnapshot) => {
        const bookingData = [];
        querySnapshot.forEach((doc) => {
          console.log(doc);
          bookingData.push(doc.data());
        });

        setScheduleBookingData(bookingData);
        setScheduleBookingStatus({
          pending: false,
        });
      });
    } catch (error) {
      setScheduleBookingStatus({
        pending: false,
      });
      console.error("Error fetching document:", error);
    }
  }

  useEffect(() => {
    if (firebaseReferenceID && isAuthenticated) {
      getCurrentBookingData(firebaseReferenceID)
      getPassengerNoticeData(firebaseReferenceID);
      getScheduleBookingData(firebaseReferenceID);
      
    }
  }, [firebaseReferenceID, isAuthenticated]);

  console.log("firebase reference ID", firebaseReferenceID);
  console.log(scheduleBookingData);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full grid grid-cols-2 gap-[20px]">
        {/* Current Ride */}
        <div className="h-max">
          <CurrentRide data={currentBookingData} isPending={currentBookingStatus.pending} />
        </div>

        <div className="flex flex-col gap-[20px]">
          {/* notices */}
          {noticeData?.length > 0 && (
            <div>
              <Notice data={noticeData} pending={noticeStatus?.pending} />
            </div>
          )}

          {/* scheduled booking */}
          <div>
            <ScheduledBooking
              data={scheduleBookingData}
              pending={scheduleBookingStatus?.pending}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
