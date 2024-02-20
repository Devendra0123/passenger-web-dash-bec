import React, { useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };

const viaPoint = {
  lat: 51.248562,
  lng: 0.630080,
};
const containerStyle = {
  width: "100%",
  height: "300px",
};

const googleMapsLibraries = ["places"];

const GoogleMapDirection = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: googleMapsLibraries,
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
          {viaPoint && <Marker position={viaPoint} label="V" />}
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
