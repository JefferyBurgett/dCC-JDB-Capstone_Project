import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  
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
