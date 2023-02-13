import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const DiveSite = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const [user, token] = useAuth();
  const [dive_site, setDive_Site] = useState([]);
  

  useEffect(() => {
    const fetchDiveSites = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/dive_site/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDive_Site(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDiveSites();
  }, [token]);
  return (
    <div className="container">
      <h1>Dive Sites</h1>
      {dive_site &&
        dive_site.map((dive_site) => (
          <p key={dive_site.id}>
            {dive_site.site_name},  {dive_site.site_city},  {dive_site.site_state},  {dive_site.site_country} 
          </p>
        ))}
    </div>
  );
};

export default DiveSite;