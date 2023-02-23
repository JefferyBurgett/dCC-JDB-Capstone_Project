import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";


const SingleProfile = (props) => {
    const {userId} = useParams();
  const [diver, setDiver] = useState([]);
  const [user, token] = useAuth();
  useEffect(() => {
    const fetchDiver = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/diver/${userId}`, {
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
        {diver &&
      diver.map((element) => (
        <p key={user.id}>
        <p>First Name: {element.user.first_name}</p>
        <p>Last Name: {element.user.last_name}</p>
        <p>City: {element.user_city}</p>
        <p>State: {element.user_state}</p>
        <p>Country: {element.user_country}</p>
        <p>Account Type: {element.user_type}</p>      
        <p>Certifaction Agency: {element.user_cert_agency}</p>
        <p>Certifaction Level: {element.user_cert_level}</p>
        <p>Available to Dive: {element.user_availibility ? "Available" : "Not Availalbe"}</p>
        </p>
        ))}
  </div>
      );
};

export default SingleProfile;