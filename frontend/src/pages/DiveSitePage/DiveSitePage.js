import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import axios from "axios";
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