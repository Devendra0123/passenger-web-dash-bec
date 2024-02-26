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
import FlightInformation from "../components/BookingDetails/FlightInformation";

// For Responsiveness to arrage boxes in correct order
const RenderBoxes = () => {
  useEffect(() => {
    const divElements = document.querySelectorAll(".box");
    const divArray = Array.from(divElements);
    divArray.sort((a, b) => {
      const idA = parseInt(a.getAttribute("data-id"));
      const idB = parseInt(b.getAttribute("data-id"));
      return idA - idB;
    });
    const container = document.getElementById("box-container");
    divArray.forEach((div) => container.appendChild(div));
  }, []);

  return null;
};

const ServiceDetails = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const serviceType = searchParams.get("service-type");

  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [bookingDetailsData, setBookingDetailsData] = useState();

  // Get Booking Details
  function getBookingDetails() {
    try {
      const docRef = doc(
        db,
        "passengers",
        "5mNt5etzeVb8GTM9BDtRTMDvSSR2-44",
        "schedules",
        "26"
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

  useEffect(() => {
    setWindowWidth(window.innerWidth);
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
            <button className=" flex items-center gap-[6px] px-[13px] py-[6px] rounded-[4px] bg-green-800 text-white ">
              <IoCall /> Call Driver
            </button>
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
          <div className="relative w-full shadow-lg shadow-slate-400/50 rounded-[10px] overflow-hidden ">
            <GoogleMapDirection />
            <div className="absolute top-0 left-0 w-full h-max flex items-center justify-start gap-[20px] flex-wrap bg-gradient-to-b from-white to-slate-300/50 p-[15px] border-b border-slate-200">
              <div className="flex items-center justify-start gap-[15px]">
                <div>
                  <p className="w-max px-[15px] py-[6px] bg-blue-400 text-white rounded-[25px]">
                    {bookingDetailsData?.trip_type
                      ? bookingDetailsData?.trip_type
                      : null}
                  </p>
                </div>

                <div>
                  <p className="w-max px-[15px] py-[6px] bg-blue-400 text-white rounded-[25px]">
                    Booking ID : <span>{bookingDetailsData?.id}</span>
                  </p>
                </div>

                <div>
                  <p className="w-max px-[15px] py-[6px] bg-blue-400 text-white rounded-[25px]">
                    {data.dateAndTime}
                  </p>
                </div>

                <div>
                  <p className="w-max px-[15px] py-[6px] bg-blue-400 text-white rounded-[25px]">
                    {bookingDetailsData?.distance}
                  </p>
                </div>

                <div>
                  <p className="w-max px-[15px] py-[6px] bg-blue-400 text-white rounded-[25px]">
                    {data.duration}
                  </p>
                </div>
              </div>
              {bookingDetailsData?.drop_date_time && (
                <div>
                  <p className="w-max px-[15px] py-[6px] bg-blue-400 text-white rounded-[25px]">
                    Drop Off Time :{" "}
                    <span>{bookingDetailsData?.drop_date_time}</span>
                  </p>
                </div>
              )}
              <div>
                <p
                  className={`${
                    bookingDetailsData?.status_class == "confirmed"
                      ? "bg-green-700/75"
                      : bookingDetailsData?.status_class == "pending"
                      ? "bg-yellow-600/75"
                      : "bg-primary/75"
                  } w-max px-[15px] py-[6px] text-white rounded-[25px]`}
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
              className="box col-span-2 flex items-start justify-between gap-[10px] border border-slate-300 p-[15px] bg-[#F2F2F2]/75 rounded-[10px]"
            >
              {/* origin */}
              <div>
                <h3 className="text-primary">Origin</h3>
                <p>
                  {data.location.origin.place}
                  <span>, {data.location.origin.country.name}</span>
                </p>
                {/* Address line */}
                <p className="text-[12px]">
                  Pickup Address:{" "}
                  <span className="text-blue-500">
                    {bookingDetailsData?.pickup_address_line}
                  </span>
                </p>
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
              <div className="flex flex-col items-start">
                <h3 className="text-primary">Destination</h3>
                <p className="text-end">
                  {data.location.destination.place}
                  <span>, {data.location.destination.country.name}</span>
                </p>
                {/* Address line */}
                <p className="text-[12px]">
                  Dropoff location:{" "}
                  <span className="text-blue-500">
                    {bookingDetailsData?.drop_address_line}
                  </span>
                </p>
              </div>
            </div>

            {/* Passenger Info */}
            <Passenger passengerInfo={bookingDetailsData?.passenger} />

            {/* Driver Info */}
            <DriverInfo data={data} />
            {/* capacity */}
            <Capacity
              passenger_count={bookingDetailsData?.passenger_count}
              luggage_count={bookingDetailsData?.luggage_count}
              suitcase_count={bookingDetailsData?.suitcase_count}
              baby_seat_count={bookingDetailsData?.baby_seat_count}
              baby_seats={bookingDetailsData?.baby_seats}
            />

            {/* Vehicle Info */}
            <VehicleInfo vehicleInfo={bookingDetailsData?.fleet} />

            {/* Flight Information */}
            <FlightInformation data={data} />

            {/* Total Spent */}
            <div
              data-id={windowWidth > 520 ? "7" : "8"}
              className="box bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className=""
                >
                  <path d="M20 10.999c-2.209 0-4 1.792-4 4.001s1.791 4 4 4 4-1.791 4-4-1.791-4.001-4-4.001zm0 7.001c-1.654 0-3-1.346-3-3s1.346-3.001 3-3.001 3 1.347 3 3.001-1.346 3-3 3zm.167-1.351v.351h-.334v-.333c-.344-.006-.702-.088-1-.242l.152-.548c.254.099.574.202.861.202l.213-.022c.383-.086.462-.48.039-.67-.311-.145-1.26-.269-1.26-1.081 0-.455.346-.861.994-.95v-.356h.334v.339c.24.006.512.049.814.141l-.121.548c-.232-.081-.487-.156-.738-.156l-.076.002c-.496.029-.541.459-.193.639.569.268 1.314.467 1.314 1.181.001.573-.446.878-.999.955zm-13.167-5.649c0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3-3 1.344-3 3zm3.883-1.368l-.108.493c-.23-.08-.485-.154-.733-.139-.446.026-.486.413-.174.575.514.242 1.182.42 1.182 1.063.002.515-.401.791-.898.86v.315h-.302v-.299c-.311-.005-.632-.079-.898-.217l.135-.493c.287.11.669.229.968.162.345-.078.415-.433.034-.604-.279-.129-1.133-.242-1.133-.973 0-.409.312-.775.895-.855v-.319h.301v.305c.215.005.459.043.731.126zm4.319 7.368h-15.202v-12h20v4.799c-.709 0-1.384.145-2 .402v-1.219c-.959-.42-1.395-1.023-1.814-1.982h-12.372c-.419.959-.855 1.562-1.814 1.982v4.036c.959.42 1.395 1.022 1.814 1.982h10.986c0 .708.144 1.384.402 2z" />
                </svg>
              </div>
              <div className="w-full flex flex-col items-center gap-[10px] text-center">
                <h2 className="text-[17px] font-semibold">Total Spent</h2>
                <div className="w-[90%] flex flex-col items-center gap-[8px]">
                  <div className="w-full flex items-center justify-between">
                    <p>Fare</p>
                    <p className="text-primary font-semibold">£71.46</p>
                  </div>

                  <div className="w-full flex items-center justify-between">
                    <p>Parking Charge</p>
                    <p className="text-primary font-semibold">£2.00</p>
                  </div>

                  <div className="w-full flex items-center justify-between">
                    <p>Waiting Charge</p>
                    <p className="text-primary font-semibold">£1.00</p>
                  </div>
                  {serviceType == "history" && (
                    <div className="w-full flex items-center justify-between">
                      <p>Tips</p>
                      <p className="text-primary font-semibold">£5.00</p>
                    </div>
                  )}
                  <div className="w-full flex items-center justify-between">
                    <p className="font-[500]">Total</p>
                    <p className="text-primary font-semibold">£79.46</p>
                  </div>
                </div>

                <div
                  className={`w-max px-[10px] py-[8px] rounded-[5px] ${
                    data.paymentStatus == "paid"
                      ? "border border-green-700 text-green-700"
                      : "border border-primary text-primary"
                  }`}
                >
                  <p>
                    <span className="text-black">Payment satus :</span>
                    <span className="">{data.paymentStatus}</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Logs */}
            <div
              data-id={windowWidth > 520 ? "8" : "5"}
              className="box bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]"
            >
              <div>
                <svg
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="m2.179 10.201c.055-.298.393-.734.934-.59.377.102.612.476.543.86-.077.529-.141.853-.141 1.529 0 4.47 3.601 8.495 8.502 8.495 2.173 0 4.241-.84 5.792-2.284l-1.251-.341c-.399-.107-.636-.519-.53-.919.108-.4.52-.637.919-.53l3.225.864c.399.108.637.519.53.919l-.875 3.241c-.107.399-.519.636-.919.53-.399-.107-.638-.518-.53-.918l.477-1.77c-1.829 1.711-4.27 2.708-6.838 2.708-5.849 0-9.968-4.8-10.002-9.93-.003-.473.027-1.119.164-1.864zm9.839 6.293c-.552 0-1-.449-1-1 0-.552.448-1 1-1s1 .448 1 1c0 .551-.448 1-1 1zm9.833-2.693c-.054.298-.392.734-.933.59-.378-.102-.614-.476-.543-.86.068-.48.139-.848.139-1.53 0-4.479-3.609-8.495-8.5-8.495-2.173 0-4.241.841-5.794 2.285l1.251.341c.4.107.638.518.531.918-.108.4-.519.637-.919.53l-3.225-.864c-.4-.107-.637-.518-.53-.918l.875-3.241c.107-.4.518-.638.918-.531.4.108.638.518.531.919l-.478 1.769c1.83-1.711 4.272-2.708 6.839-2.708 5.865 0 10.002 4.83 10.002 9.995 0 .724-.081 1.356-.164 1.8zm-9.836-.307c.414 0 .75-.337.75-.75v-4.992c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.992c0 .413.336.75.75.75z"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <div className="w-full flex flex-col items-center gap-[10px] text-center">
                <h2 className="text-[17px] font-semibold">Logs</h2>
                <div className="w-[90%] flex flex-col items-center justify-between gap-[10px]">
                  <div className="w-full flex items-center justify-between">
                    <p>Cancelled at:</p>
                    <span className="ml-auto text-fontSize_md font-medium text-slate-800">
                      14/05/2023 12:30 pm
                    </span>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <p>Refund Infoice at:</p>
                    <span className="ml-auto text-fontSize_md font-medium text-slate-800">
                      16/05/2023 09:22 pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Payment Card Info */}
            <div
              data-id="9"
              className="box bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.5 6c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19zm2.5 0c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12zm-14 7c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c.484 0 .936.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.326 1.571.857 2.123-.384.239-.836.377-1.32.377zm1.5-2.5c0-1.381 1.119-2.5 2.5-2.5 1.383 0 2.5 1.119 2.5 2.5s-1.117 2.5-2.5 2.5c-1.381 0-2.5-1.119-2.5-2.5zm-4.5 4.5h-3v1h3v-1zm4 0h-3v1h3v-1zm5 0h-3v1h3v-1zm4 0h-3v1h3v-1z" />
                </svg>
              </div>
              <div className="w-full flex flex-col items-center gap-[10px] text-center">
                <h2 className="text-[17px] font-semibold">Payment Card</h2>

                <div>
                  <div className="flex items-center gap-[10px] px-[10px] py-[8px] rounded-[5px] border border-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-blue-400"
                    >
                      <path d="M21.5 6c.276 0 .5.224.5.5v11c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-11c0-.276.224-.5.5-.5h19zm2.5 0c0-1.104-.896-2-2-2h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12zm-14 7c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c.484 0 .936.138 1.32.377-.531.552-.857 1.3-.857 2.123 0 .824.326 1.571.857 2.123-.384.239-.836.377-1.32.377zm1.5-2.5c0-1.381 1.119-2.5 2.5-2.5 1.383 0 2.5 1.119 2.5 2.5s-1.117 2.5-2.5 2.5c-1.381 0-2.5-1.119-2.5-2.5zm-4.5 4.5h-3v1h3v-1zm4 0h-3v1h3v-1zm5 0h-3v1h3v-1zm4 0h-3v1h3v-1z" />
                    </svg>
                    <p>XXXX-XXXX-XXXX-1111</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RenderBoxes />
    </div>
  );
};

export default ServiceDetails;
