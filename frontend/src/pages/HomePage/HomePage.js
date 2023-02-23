import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import axios from "axios";

const HomePage = () => {
  const [user, token] = useAuth();
  console.log(user);
  console.log(token);



  return (
    <div className="container">
      <h1>Welcome To DiverConnect!</h1>
      <p>
        A new resource for the diving community to connect with fellow Divers, potential Dive Buddies as well as share information on everything diving!!
      </p>
      <Link to="/register">Click to register!</Link>
    </div>
  );
};

export default HomePage;
