// Map Displays with this version - 1
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { KEY } from "../../localKey";


function Google_DSMap(props) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: KEY,
    });

    if (!isLoaded) {
        return <div>Loading...</div>;
    }
    return <Map lat={props.lat} lng={props.lng} />;
}

function Map(props) {  
    const center = { lat: props.lat, lng: props.lng };

    return (
        <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
        </GoogleMap>
    );
};

export default Google_DSMap;

