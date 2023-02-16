import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const DiveSiteDetailPage = () => {
    const {id} = useParams();
    const [dive_site, setDive_Site] = useState({})
    const [user, token] = useAuth();
    console.log(dive_site);

        useEffect(() => {
            const fetchDive_Site = async () => {
              try {
                let response = await axios.get(`http://127.0.0.1:8000/api/dive_site/${id}`, {
                  headers: {
                    Authorization: "Bearer " + token,
                  },
                });
                setDive_Site(response.data);
                console.log(response.data)
              } catch (error) {
                console.log(error);
              }
            };
            fetchDive_Site();
          }, [id],[token]);




    return (
        <div>
            <h1>Dive Site Details {id}</h1>
            <h1>Dive Site Name: {dive_site.site_name}</h1>
        </div>
    );
};

export default DiveSiteDetailPage;