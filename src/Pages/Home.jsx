import React, { useEffect, useState } from "react";
import CurrentRide from "../components/CurrentRide";
import ScheduledBooking from "../components/ScheduledBooking";
import Notice from "../components/Notice";
import { getPassengerNoticeData } from "../query/FirestoreQuery";

const Home = () => {

  const [noticeData, setNoticeData] = useState();

  useEffect(() => {
    getPassengerNoticeData().then((res) => {
      console.log(res)
      setNoticeData(res)
    });
  }, []);

  console.log(noticeData)
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
