import DiveSitesForm from "./DiveSitesForm/DiveSitesForm";
import DiveSitesList from "./DiveSitesList/DiveSitesList";
import { useState } from "react";

const DiveSites = (props) => {
    const [dive_site, setDive_Site] = useState();

    return (
        <div>
          <DiveSitesForm setDive_Site={setDive_Site} />
          <DiveSitesList dive_site={dive_site} setDive_Site={setDive_Site} />
        </div>
      );
    };
    
    export default DiveSites;
