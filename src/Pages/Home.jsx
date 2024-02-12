import React from "react";
import CurrentRide from "../components/CurrentRide";
import ScheduledBooking from "../components/ScheduledBooking";
import Notice from "../components/Notice";
import { useAuthContext } from "../Context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return redirect("/login");
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-full grid grid-cols-2 gap-[20px]">
        {/* Current Ride */}
        <div>
          <CurrentRide />
        </div>

        <div className="flex flex-col gap-[20px]">
          {/* notices */}
          <div>
            <Notice />
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
