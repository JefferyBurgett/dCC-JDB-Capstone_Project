import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import DiveSites from "../../components/DiveSites/Dive_Sites";

const DiveSitePage = () => {
 
  const [user, token] = useAuth();
  const [dive_site, setDive_Site] = useState([]);
  
   
  return (
    <div>
        <DiveSites set={setDive_Site} />
    </div>

  );
};

export default DiveSitePage;