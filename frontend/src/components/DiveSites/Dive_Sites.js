import DiveSitesList from "./DiveSitesList/DiveSitesList";
import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./Dive_Sites.css";

const DiveSites = (props) => {
    const [user, token] = useAuth();
    const [dive_sites, setDive_Sites] = useState();
    useEffect(() => {
      
      fetchDive_Sites();
    }, [token]);
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

    return (
        <div>
          <DiveSitesList dive_sites={dive_sites} setDive_Sites={setDive_Sites} fetchDive_Sites={fetchDive_Sites} />
        </div>
      );
    };
    
    export default DiveSites;
