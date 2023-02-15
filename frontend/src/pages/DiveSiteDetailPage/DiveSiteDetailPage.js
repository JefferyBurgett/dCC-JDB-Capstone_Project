import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DiveSiteDetailPage = () => {
    const {id} = useParams()
    return <h1>Dive Site Details {id}</h1>
};

export default DiveSiteDetailPage;