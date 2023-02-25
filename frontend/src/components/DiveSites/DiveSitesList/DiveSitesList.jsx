import React from "react";
import DiveSiteModal from "../DiveSiteModal/DiveSiteModal";
import useAuth from "../../../hooks/useAuth";
import { Link, useParams } from "react-router-dom";
import "./DiveSitesList.css"


const DiveSitesList = (props) => {
  const [user, token] = useAuth();

  
  return (
     <div className="divesite-container">
      <h1>Dive Locations</h1>
        {props.dive_sites &&
        props.dive_sites.map((dive_site) => ( 
          <div className="dive-site-parent">       
            <div className="dive-site" key={dive_site.id}>
              <Link to={`/ds_detail/${dive_site.id}`}>
                {`${dive_site.site_name}, ${dive_site.site_country}`}
              </Link>
            </div>
          </div>
        ))}
        <DiveSiteModal fetchDive_Sites={props.fetchDive_Sites} />  

    </div>
    );
};

export default DiveSitesList;