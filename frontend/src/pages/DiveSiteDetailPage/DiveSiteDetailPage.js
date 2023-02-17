import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const DiveSiteDetailPage = () => {
    const {siteId} = useParams();
    const [dive_site, setDive_Site] = useState({})
    const [user, token] = useAuth();
    console.log(dive_site);

        useEffect(() => {
            const fetchDive_Site = async () => {
              try {
                let response = await axios.get(`http://127.0.0.1:8000/api/dive_site/${siteId}`, {
                  headers: {
                    Authorization: "Bearer " + token,
              }});
                setDive_Site(response.data);
                } catch (error) {
                    console.log(error);
                }
            };
               
            fetchDive_Site();
          }, [siteId]);




    return (
        <div>
            <h1>Dive Site Details {siteId}</h1>
            <p>Dive Site Name: {dive_site[0]?.site_name}</p>
            
        </div>
    );
};

export default DiveSiteDetailPage;