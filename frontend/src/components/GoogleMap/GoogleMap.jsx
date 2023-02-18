import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import { Key } from "../../localKey";

export default function GoogleDSMap() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: {Key},
    });

    if (!isLoaded) return <div>Loading...</div>;
        return <Map />;
}

function Map() {
    return <GoogleMap zoom={10} center={{lat:12.3, lng:-69.1}} mapContainerClassName="map-container"></GoogleMap>
}
