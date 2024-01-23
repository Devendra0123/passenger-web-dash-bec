import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";

const center = { lat: 48.8584, lng: 2.2945 };

const GetARide = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCW4uEcxzMboANlqwcLeA870_MJakvfdxo",
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();

  const destiantionRef = useRef();

  if (!isLoaded) {
    return <span>Loading...</span>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="z-[-1] absolute top-0 left-0 right-0 bottom-0">
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>

      <div className="bg-white p-[20px] flex flex-col gap-[30px]">
        <div className="flex items-center gap-[30px]">
          <Autocomplete>
            <input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>

          <Autocomplete>
            <Input type="text" placeholder="Destination" ref={destiantionRef} />
          </Autocomplete>
        </div>

        <div>
          <button colorScheme="pink" type="submit" onClick={calculateRoute}>
            Calculate Route
          </button>
          <IconButton
            aria-label="center back"
            icon={<FaTimes />}
            onClick={clearRoute}
          />
        </div>

        <div>
          <p>{distance}</p>
          <p>{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default GetARide;
