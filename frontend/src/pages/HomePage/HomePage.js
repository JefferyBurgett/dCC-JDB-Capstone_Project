import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import "./HomePage.css"

const HomePage = () => {
  const [user, token] = useAuth();
  console.log(user);
  console.log(token);



  return (
    <div className="home-container">
      <div className="home-h1">
      <h1>Welcome To DIVERconnect!</h1>
      </div>
      <div className="div-home-body">
        <p className="home-body">
        A new resource for the diving community to connect with fellow Divers, potential Dive Buddies as well as share information on everything diving!!
        </p>
      </div>
      <div className="home-link">
        <Link className="myButton" to="/register">Click to register!</Link>
      </div>
    </div>
  );
};

export default HomePage;
