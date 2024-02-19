
import { getPassengerProfileData } from "../../query/FirestoreQuery";
import { Suspense, lazy, useEffect, useState } from "react";
const ProfileData = lazy(() => import("../../components/Sections/ProfileData"));

const Account = () => {


  const data = getPassengerProfileData().then((res) => res);
  console.log(data)
  return (
    <div className=" bg-white/75 min-h-[70vh] backdrop-blur-sm w-full p-[15px] rounded-[15px]">
      <h2 className="text-titleSize font-titleFontWeight text-titleColor ">
        {" "}
        Profile{" "}
      </h2>
      <Suspense fallback={<p>Loading...</p>}>
        <ProfileData data={data} />
      </Suspense>
    </div>
  );
};

export default Account;
