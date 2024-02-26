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
  lng: 0.63008,
};
const containerStyle = {
  width: "100%",
  height: "300px",
};

const googleMapsLibraries = ["places"];

const GoogleMapDirection = ({ pickup, drop, routes }) => {
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
        origin:
          pickup?.lat && pickup.lng
            ? {
                lat: pickup?.lat,
                lng: pickup.lng,
              }
            : "Big Ben, London",
        destination:
          drop?.lat && drop.lng
            ? {
                lat: drop?.lat,
                lng: drop?.lng,
              }
            : "UK Tower of London, London, UK",
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    };

    if (isLoaded) {
      calculateRoute();
    }
  }, [isLoaded, pickup, drop]);

  useEffect(() => {
    if (map && routes) {
      const bounds = new window.google.maps.LatLngBounds();

      bounds.getNorthEast(routes?.bounds?.northeast);
      bounds.getSouthWest(routes?.bounds?.southwest);
      map.fitBounds(bounds);

      // Poly lines
      var decodedPoints = google.maps.geometry.encoding.decodePath(
        routes?.overview_polyline
      );

      const flightPath = new google.maps.Polyline({
        path: decodedPoints,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      map.encodedPolyline(flightPath);
    }
  }, [map, routes]);

  if (!isLoaded) {
    return <span>Loading...</span>;
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={5}
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
