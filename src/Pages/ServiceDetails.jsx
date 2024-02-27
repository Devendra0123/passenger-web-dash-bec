import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { scheduledBookingData } from "../consts/servicesData";
import Rating from "../components/Element/Rating";
import GoogleMapDirection from "../components/CurrentRide/GoogleMap";
import { IoCall } from "react-icons/io5";
import CancelBookingConfirmation from "../components/modal/CancelBookingConfirmation";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../firebase/setup";
import Passenger from "../components/BookingDetails/Passenger";
import DriverInfo from "../components/BookingDetails/DriverInfo";
import Capacity from "../components/BookingDetails/Capacity";
import VehicleInfo from "../components/BookingDetails/VehicleInfo";
import FareBreakdown from "../components/BookingDetails/FareBreakdown";
import Logs from "../components/BookingDetails/Logs";
import CardInfo from "../components/BookingDetails/CardInfo";
import LocationInformation from "../components/BookingDetails/LocationInformation";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get("service-type");

  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [bookingDetailsData, setBookingDetailsData] = useState();

  // Get Booking Details
  function getBookingDetails() {
    try {
      const docRef = doc(
        db,
        "passengers",
        "5mNt5etzeVb8GTM9BDtRTMDvSSR2-44",
        "schedules",
        "27"
      );

      onSnapshot(docRef, (doc) => {
        setBookingDetailsData(doc.data());
      });
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  }

  useEffect(() => {
    getBookingDetails();
  }, []);

  // get data
  useEffect(() => {
    const filteredData = scheduledBookingData?.filter(
      (item) => item.bkid === slug
    );
    if (filteredData.length) {
      setData(filteredData[0]);
    }
  }, []);

  if (!data) {
    return <span>No Data Found</span>;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(bookingDetailsData);

  return (
    <div>
      <div>
        <div className="flex items-center gap-[30px] ">
          <h2 className="text-xl font-[600] text-slate-700">Booking Details</h2>
          <div className="flex items-center flex-wrap gap-[20px] ">
            {bookingDetailsData?.driver && (
              <button className=" flex items-center gap-[6px] px-[13px] py-[6px] rounded-[4px] bg-green-800 text-white ">
                <IoCall /> Call Driver
              </button>
            )}

            <button
              onClick={handleOpen}
              className="px-[13px] py-[6px] rounded-[4px] bg-primary text-white "
            >
              Cancel Booking
            </button>
          </div>

          {/* Cancel booking popup */}
          <CancelBookingConfirmation open={open} handleClose={handleClose} />
        </div>

        <div className="mt-[10px] flex flex-col gap-[20px]">
          <div className="relative w-full rounded-[10px] overflow-hidden ">
            <GoogleMapDirection
              pickup={bookingDetailsData?.pickup}
              drop={bookingDetailsData?.drop}
              via={bookingDetailsData?.via}
              routes={bookingDetailsData?.route}
            />
            {/* Map Overlay */}
            <div className="h-[300px] w-[100px] absolute top-0 left-0 bg-gradient-to-r from-white/75 to-transparent" />
            <div className="h-[300px] w-[100px] absolute top-0 right-0 bg-gradient-to-l from-white/75 to-transparent" />

            {/* Short Info */}
            <div className=" w-full h-max flex items-center justify-start gap-[20px] flex-wrap p-[15px] border-b border-slate-200">
              <div className="flex items-center justify-start gap-[15px]">
                <div>
                  <p className="w-max px-[15px] py-[6px] bg-white text-blue-500 border border-slate-300 rounded-[25px]">
                    {bookingDetailsData?.trip_type
                      ? bookingDetailsData?.trip_type
                      : null}
                  </p>
                </div>

                <div>
                  <p className="w-max px-[15px] py-[6px] bg-white text-blue-500 border border-slate-300 rounded-[25px]">
                    Booking ID : <span>{bookingDetailsData?.id}</span>
                  </p>
                </div>

                <div>
                  <p className="w-max px-[15px] py-[6px] bg-white text-blue-500 border border-slate-300 rounded-[25px]">
                    {data.dateAndTime}
                  </p>
                </div>

                <div>
                  <p className="w-max px-[15px] py-[6px] bg-white text-blue-500 border border-slate-300 rounded-[25px]">
                    {bookingDetailsData?.distance}
                  </p>
                </div>

                <div>
                  <p className="w-max px-[15px] py-[6px] bg-white text-blue-500 border border-slate-300 rounded-[25px]">
                    {bookingDetailsData?.duration}
                  </p>
                </div>
              </div>
              {bookingDetailsData?.drop_date_time && (
                <div>
                  <p className="w-max px-[15px] py-[6px] bg-white text-blue-500 border border-slate-300 rounded-[25px]">
                    Drop Off Time :{" "}
                    <span>{bookingDetailsData?.drop_date_time}</span>
                  </p>
                </div>
              )}
              <div>
                <p
                  className={`${
                    bookingDetailsData?.status_class == "confirmed"
                      ? "bg-green-700/75 text-white "
                      : bookingDetailsData?.status_class == "pending"
                      ? "bg-yellow-600/75 text-black"
                      : "bg-primary/75 text-white "
                  } w-max px-[15px] py-[6px] rounded-[25px]`}
                >
                  Booking Status: {bookingDetailsData?.status}
                </p>
              </div>
            </div>
          </div>

          <div
            id="box-container"
            className="w-full grid grid-cols-2 gap-[20px]"
          >
            {/* Origin and destination info */}
            <div
              data-id="1"
              className="box col-span-2 grid grid-cols-2 gap-[10px] border border-slate-300 p-[15px] bg-[#F2F2F2]/75 rounded-[10px]"
            >
              {/* origin */}
              <div className="col-span-1">
                <h3 className="text-primary">Origin</h3>
                <p>{bookingDetailsData?.pickup?.name}</p>

                {/* Address line */}
                {bookingDetailsData?.pickup_address_line && (
                  <p className="text-[12px]">
                    Pickup Address:{" "}
                    <span className="text-blue-500">
                      {bookingDetailsData?.pickup_address_line}
                    </span>
                  </p>
                )}
              </div>

              {/* Via point */}
              {/* <div className="flex flex-col items-start">
                <h3 className="text-primary">Via Point</h3>
                <p>{data.location.via?.place}</p>
                <p className="text-[12px]">
                  Via Point Address:{" "}
                  <span className="text-blue-500">
                    {data.location.via?.viaPointLocation}
                  </span>
                </p>
              </div> */}

              {/* Destination */}
              <div className="col-span-1 flex flex-col items-start">
                <h3 className="text-primary">Destination</h3>
                <p className="text-end">{bookingDetailsData?.drop?.name}</p>
                {/* Address line */}
                {bookingDetailsData?.drop_address_line && (
                  <p className="text-[12px]">
                    Dropoff location:{" "}
                    <span className="text-blue-500">
                      {bookingDetailsData?.drop_address_line}
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Left Section */}
            <div className="col-span-1 flex flex-col gap-[20px]">
              {/* Passenger Info */}
              <Passenger passengerInfo={bookingDetailsData?.passenger} />

              {/* capacity */}
              <Capacity
                passenger_count={bookingDetailsData?.passenger_count}
                luggage_count={bookingDetailsData?.luggage_count}
                suitcase_count={bookingDetailsData?.suitcase_count}
                baby_seat_count={bookingDetailsData?.baby_seat_count}
                baby_seats={bookingDetailsData?.baby_seats}
              />

              {/* Location Information */}
              {bookingDetailsData?.location && (
                <LocationInformation data={bookingDetailsData?.location} />
              )}

              {/* Logs */}
              {bookingDetailsData?.logs?.length > 0 && (
                <Logs logData={bookingDetailsData?.logs} />
              )}
            </div>

            {/* Right Section */}
            <div className="col-span-1 flex flex-col gap-[20px]">
              {/* Driver Info */}
              {bookingDetailsData?.driver && (
                <DriverInfo data={bookingDetailsData?.driver} />
              )}

              {/* Vehicle Info */}
              <VehicleInfo vehicleInfo={bookingDetailsData?.fleet} />

              {/* Total Spent */}
              <FareBreakdown
                data={bookingDetailsData?.fare_breakdown}
                payment_status={bookingDetailsData?.payment_status}
              />

              {/* Payment Card Info */}
              {bookingDetailsData?.card?.length > 0 && <CardInfo />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
