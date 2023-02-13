import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const DiverProfile = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const [user, token] = useAuth();
  const [diver, setDiver] = useState([]);
  

  useEffect(() => {
    const fetchDiver = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/diver/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDiver(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDiver();
  }, [token]);
  return (
    <div className="profile-container">
      <h1>Home Page for {user.username}!</h1>
      {diver &&
        diver.map((element) => (
          <p key={user.id}>
          <p>First Name: {element.user.first_name}</p>
          <p>Last Name: {element.user.last_name}</p>
          <p>City: {element.user.city}</p>
          <p>State: {element.user.state}</p>
          <p>Country: {element.user.country}</p>
          <p>Account Type: {element.user_type}</p>      
          <p>Certifaction Agency: {element.user_cert_agency}</p>
          <p>Certifaction Level: {element.user_cert_level}</p>
          <p>Available to Dive: {element.user_availibility}</p>       
          </p>
        ))}
    </div>
  );
};

export default DiverProfile;