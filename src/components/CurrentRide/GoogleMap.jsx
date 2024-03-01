import React, { useEffect, useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };

const containerStyle = {
  width: "100%",
  height: "300px",
};

const googleMapsLibraries = ["places"];

const GoogleMapDirection = ({ pickup, drop, via, routes }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: googleMapsLibraries,
    mapIds: "f930da7bfb916937",
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
            ? new google.maps.LatLng(pickup?.lat, pickup.lng)
            : "Big Ben, London",
        destination:
          drop?.lat && drop.lng
            ? new google.maps.LatLng(drop?.lat, drop?.lng)
            : "UK Tower of London, London, UK",
        travelMode: google.maps.TravelMode.DRIVING,
        waypoints: via
          ? via.map((point) => ({
              location: new google.maps.LatLng(point.lat, point.lng),
            }))
          : [],
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
    if (isLoaded && map && routes) {
      const bounds = new window.google.maps.LatLngBounds();

      bounds.extend(routes.bounds.northeast);
      bounds.extend(routes.bounds.southwest);
      map.fitBounds(bounds);

      // Poly lines
      var decodedPoints = google.maps?.geometry?.encoding?.decodePath(
        routes?.overview_polyline?.points
      );

      const flightPath = new google.maps.Polyline({
        path: decodedPoints,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });

      flightPath.setMap(map);
    }
  }, [isLoaded, map, routes]);

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
            <DirectionsRenderer
              directions={directionsResponse}
              // options={{
              //   markerOptions: {
              //     icon: {
              //       path: "M-1.547 12l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM0 0q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
              //       fillColor: "white",
              //       strokeColor: "white",
              //       scale: 2,
              //     },
              //   },
              // }}
            />
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapDirection;
