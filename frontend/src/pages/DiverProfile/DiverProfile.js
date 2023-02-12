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
        let response = await axios.get("http://127.0.0.1:8000/api/auth/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDiver(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDiver();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {diver &&
        diver.map((user) => (
          <p key={user.id}>
            {user.first_name} {user.last_name} {user.email} {user.city} {user.state} {user.country}
          </p>
        ))}
    </div>
  );
};

export default DiverProfile;