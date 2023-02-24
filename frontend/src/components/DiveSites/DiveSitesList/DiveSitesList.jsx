import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import "./DiveSitesList.css"


const DiveSitesList = (props) => {
  const [user, token] = useAuth();

  
  
  return (
     <div className="divesite-container">
      <h1>Dive Locations</h1>
        {props.dive_sites &&
        props.dive_sites.map((dive_site) => (          
            <div className="dive-site" key={dive_site.id}>
              <Link to={`/ds_detail/${dive_site.id}`}>
                {`${dive_site.site_name}, ${dive_site.site_country}`}
              </Link>
            </div>
        ))}
    </div>
    );
};

export default DiveSitesList;