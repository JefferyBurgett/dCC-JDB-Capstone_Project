import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";


const DiveSitesList = (props) => {
  const [dive_sites, setDive_Sites] = useState([]);
  const [user, token] = useAuth();
  useEffect(() => {
    const fetchDive_Sites = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/dive_site/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDive_Sites(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDive_Sites();
  }, [token]);
  

  return (
        <div className="container">
        <h1>Dive Sites</h1>
        {dive_sites &&
        dive_sites.map((dive_site) => (
            <p key={dive_site.id}>
            {dive_site.site_name},  {dive_site.site_city},  {dive_site.site_state},  {dive_site.site_country} 
            </p>
        ))}
    </div>
    );
};

export default DiveSitesList;