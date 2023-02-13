import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  // // const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);

  // // useEffect(() => {
  // //   const fetchCars = async () => {
  // //     try {
  // //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  // //         headers: {
  // //           Authorization: "Bearer " + token,
  // //         },
  // //       });
  // //       setCars(response.data);
  // //     } catch (error) {
  // //       console.log(error.response.data);
  // //     }
  // //   };
  // //   fetchCars();
  // // }, [token]);
  return (
    <div className="container">
      <h1>Welcome To DiverConnect!</h1>
      <p>
        A new resource for the diving community to find new Dive Buddies as well as share information on every thing diving!!
      </p>
    </div>
  );
};

export default HomePage;
