import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DiverProfiles from "../../components/DiverProfiles/DiverProfiles";

import axios from "axios";

const DiversListPage = () => {
  
  const [user, token] = useAuth();
  const [diversList, setDiversList] = useState([]);
  
  
  useEffect(() => {
    const fetchDiversList = async () => {
      
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/diver/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDiversList(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDiversList();
  }, [token]);


  return (
    <div className="profile-container">
    <h1>{user.username}!</h1>
    {diversList &&
      diversList.map((element) => (
        <p key={user.id}>
          <p>First Name: {element.user.first_name}</p>
          <p>Last Name: {element.user.last_name}</p>
          <p>City: {element.user_city}</p>
          <p>State: {element.user_state}</p>
          <p>Country: {element.user_country}</p>
          <p>Account Type: {element.user_type}</p>      
          <p>Certifaction Agency: {element.user_cert_agency}</p>
          <p>Certifaction Level: {element.user_cert_level}</p>
          <p>Available to Dive: {element.user_availibility}</p>       
        </p>
        
      ))}
  </div>
      );
};


export default DiversListPage;