import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DiveSiteReviewModal from "../../components/DiveSites/DiveSIteReviewModal/DiveSiteReviewModal";
import DiveSiteReviewList from "../../components/DiveSites/DiveSiteReviews/DiveSiteReviewList";
import Google_DSMap from "../../components/GoogleMap/GoogleDSMap";
import "./DiveSiteDetailPage.css"

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

    return (
      <div>
        <div className="diveSite_container">
          <div>
              <h1>Dive Site Name: {dive_site[0]?.site_name}</h1>
              <p>City: {dive_site[0]?.site_city}</p>
              <p>State: {dive_site[0]?.site_state}</p>
              <p>Country: {dive_site[0]?.site_country}</p>
              <p>Latitude: {dive_site[0]?.site_lat}</p>
              <p>Longitude: {dive_site[0]?.site_lng}</p>
          </div>
        </div>
          <Google_DSMap lat={dive_site[0]?.site_lat} lng={dive_site[0]?.site_lng} />
        <div>
          <DiveSiteReviewList ds_reviews={ds_reviews} setDS_Reviews={setDS_Reviews} />
          <DiveSiteReviewModal setDS_Reviews={setDS_Reviews} getDiveSiteReviews={fetchDive_Site}/>
        </div>
    </div>
    );
};

export default DiveSiteDetailPage;