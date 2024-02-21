import React, { useEffect, useState } from "react";
import CurrentRide from "../components/CurrentRide";
import ScheduledBooking from "../components/ScheduledBooking";
import Notice from "../components/Notice";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/setup";

const Home = () => {
  const [noticeData, setNoticeData] = useState();

  // Get Notice Data
  function getPassengerNoticeData() {
    try {
      const q = query(
        collection(
          db,
          "passengers",
          "yvY1kbCCHDZLsJE8CB4r2RNWssf1-73",
          "notices"
        )
      );

      onSnapshot(q, (querySnapshot) => {
        const notices = [];
        querySnapshot.forEach((doc) => {
          notices.push(doc.data());
        });
        setNoticeData(notices);
      });
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  }

  useEffect(() => {
    getPassengerNoticeData();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full grid grid-cols-2 gap-[20px]">
        {/* Current Ride */}
        <div className="h-max">
          <CurrentRide />
        </div>

        <div className="flex flex-col gap-[20px]">
          {/* notices */}
          <div>
            <Notice data={noticeData} />
          </div>
          {/* scheduled booking */}
          <div>
            <ScheduledBooking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
