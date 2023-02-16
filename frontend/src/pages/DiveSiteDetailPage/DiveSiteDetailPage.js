import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DiveSiteDetailPage = () => {
    const {id} = useParams();
    const [dive_site, setDive_Site] = useState({})
    console.log(dive_site);

    useEffect(() => {
        const fetchDiveSite = async () => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/dive_site/${id}`
                );
                setDive_Site(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchDiveSite();
    }, [id]);

    return (
        <div>
            <h1>Dive Site Details {id}</h1>
            <h1>Dive Site Name: {dive_site.name}</h1>
        </div>
    );
};

export default DiveSiteDetailPage;