// Map Displays with this version - 1
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { KEY } from "../../localKey";


    function Google_DSMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: {KEY},
    });
    
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}


function Map() {
    
    
    const center = useMemo(() => ({ lat:12.36934, lng: -69.15423 }), []);
            
            
            
    return (
        <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
        </GoogleMap>
    );
};

export default Google_DSMap;
//..... - 1

// This is a version to get working - 2

// import { useState, useEffect, useRef } from "react";
// import {
//   GoogleMapsProvider,
//   useGoogleMap,
// } from "@ubilabs/google-maps-react-hooks";

// const mapOptions = {
//   zoom: 12,
//   center: {
//     lat: 12.36934,
//     lng: -69.15423,
//   },
// };

// export default function Google_DSMap() {
//   const [mapContainer, setMapContainer] = useState(null);

//   return (
//     <GoogleMapsProvider
//       googleMapsAPIKey="AIzaSyDyxzRfxRkedqbwBlJIEy9rFGdA-jx281c"
//       options={mapOptions}
//       mapContainer={mapContainer}
//     >
//       <div ref={(node) => setMapContainer(node)} style={{ height: "100vh" }} />
//       <Location />
//     </GoogleMapsProvider>
//   );
// }

// function Location() {
//   const [lat, setLat] = useState(12.36934);
//   const [lng, setLng] = useState(-69.15423);
//   const { map } = useGoogleMap();
//   const markerRef = useRef();

//   useEffect(() => {
//     if (!map || markerRef.current) return;
//     markerRef.current = new google.maps.Marker({ map });
//   }, [map]);

//   useEffect(() => {
//     if (!markerRef.current) return;
//     if (isNaN(lat) || isNaN(lng)) return;
//     markerRef.current.setPosition({ lat, lng });
//     map.panTo({ lat, lng });
//   }, [lat, lng, map]);

//   return (
//     <div className="lat-lng">
//       <input
//         type="number"
//         value={lat}
//         onChange={(event) => setLat(parseFloat(event.target.value))}
//         step={0.01}
//       />
//       <input
//         type="number"
//         value={lng}
//         onChange={(event) => setLng(parseFloat(event.target.value))}
//         step={0.01}
//       />
//     </div>
//   );
// }
//----- 2

