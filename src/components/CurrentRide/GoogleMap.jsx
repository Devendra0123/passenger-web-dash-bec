import React, { useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };

const containerStyle = {
  width: "100%",
  height: "300px",
};

const GoogleMapDirection = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const calculateRoute = async () => {
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: "Big Ben, London",
        destination: "UK Tower of London, London, UK",
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    };

    if (isLoaded) {
      calculateRoute();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <div className="w-full flex items-center justify-between">
          <div>
            <div className="bg-blue-500 text-white flex items-center gap-[3px] rounded-[25px] border border-blue-500 px-[15px] py-[5px]">
              <img src="/asset/icons/passenger.svg" alt="passenger" className="w-[16px] h-[16px]" />
              <p className="">POB</p>
            </div>
          </div>
        </div>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={10}
          mapContainerStyle={containerStyle}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>

      {/* <div>
        <button type="submit" onClick={calculateRoute}>
          Calculate Route
        </button>
      </div> */}
    </div>
  );
};

export default GoogleMapDirection;
