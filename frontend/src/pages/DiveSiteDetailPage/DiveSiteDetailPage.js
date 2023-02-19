import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DiveSiteReviewModal from "../../components/DiveSites/DiveSIteReviewModal/DiveSiteReviewModal";
import DiveSiteReviewList from "../../components/DiveSites/DiveSiteReviews/DiveSiteReviewList";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Google_DSMap from "../../components/GoogleMap/GoogleDSMap";

const DiveSiteDetailPage = () => {
    const {siteId} = useParams();
    const [dive_site, setDive_Site] = useState({});
    const [ds_reviews, setDS_Reviews] = useState({});
    const [user, token] = useAuth();
    console.log(dive_site);

        useEffect(() => {

          fetchDive_Site();
        }, [siteId]);

        const fetchDive_Site = async () => {
          try {
            let response = await axios.get(`http://127.0.0.1:8000/api/dive_site/${siteId}`, {
              headers: {
                Authorization: "Bearer " + token,
          }});
            setDive_Site(response.data);
            } catch (error) {
                console.log(error.response.data);
            }
            
          };

        //   //This is what I added to add the map - delete if needed
        //   function GoogleMap() {
        //     const { isLoaded } = useLoadScript({
        //         googleMapsApiKey: "AIzaSyDyxzRfxRkedqbwBlJIEy9rFGdA-jx281c",
        //     });
            
        //     if (!isLoaded) return <div>Loading...</div>;
        //     return <Map />;
        // }  
        // const center = useMemo(() => ({ lat: site_lat[0]?.site_lat, lng: site_lng[0]?.site_lng }), []);
            
        //     //
          

    return (
      <div>
        <div>
            <h1>Dive Site Name: {dive_site[0]?.site_name}</h1>
            <p>City: {dive_site[0]?.site_city}</p>
            <p>State: {dive_site[0]?.site_state}</p>
            <p>Country: {dive_site[0]?.site_country}</p>
        </div>
        <div id="map"></div>

        <div>
        {/* {/* <GoogleMap zoom={14} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
        </GoogleMap> */}
          <Google_DSMap />
          <DiveSiteReviewList ds_reviews={ds_reviews} setDS_Reviews={setDS_Reviews} />
          <DiveSiteReviewModal setDS_Reviews={setDS_Reviews} />
        </div>
      </div>
    );
};

export default DiveSiteDetailPage;