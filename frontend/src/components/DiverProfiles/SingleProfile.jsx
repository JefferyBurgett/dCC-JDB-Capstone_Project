import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProfileForm from "./ProfileForm/ProfileForm";
import "./SingleProfile.css"

const SingleProfile = (props) => {
  const { userId } = useParams();
  const [diver, setDiver] = useState([]);
  const [user, token] = useAuth();
  useEffect(() => {
    // const fetchDiver = async () => {
    // };
    fetchDiver();
  }, [token]);

  async function fetchDiver() {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/diver/${userId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setDiver(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async function setUnavailable() {
    console.log(diver[0]);

    await axios.patch(
      `http://127.0.0.1:8000/api/diver/${userId}/user_availibility/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    fetchDiver();
  }


  async function setAvailable() {
    console.log(diver[0]);

    await axios.patch(
      `http://127.0.0.1:8000/api/diver/${userId}/user_available/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    fetchDiver();
  }
  return (
      <div className="my-flex-container">
        {diver.length>0 ?
          diver.map((element) => (
            <div className="my-flex-container">
            <div className="profile-container">
            <div className="div-h1">
              <h1>User Information</h1>
            </div>
            <p className="profile-p" key={user.id}>
              <p>First Name: {element.user.first_name}</p>
              <p>Last Name: {element.user.last_name}</p>
              <p>City: {element.user_city}</p>
              <p>State: {element.user_state}</p>
              <p>Country: {element.user_country}</p>
              <p>Account Type: {element.user_type}</p>
              <p>Certifaction Agency: {element.user_cert_agency}</p>
              <p>Certifaction Level: {element.user_cert_level}</p>
              <p>
                Available to Dive:{" "}
                {element.user_availibility ? "Available" : "Not Availalbe"}
              </p>

            </p>
            </div>
              <div id="profile-button-div" className="center-child">
                <button className="myButton" onClick={setUnavailable}>
                  Not Available
                </button>
                <button className="myButton" onClick={setAvailable}>
                  Available
                </button>
              </div>
            </div>
          ))
          : <div className="my-flex-container">
              <div className="profile">
                <ProfileForm setDiver={setDiver} />
              </div>
            </div>
        }
      </div>
  );
};

export default SingleProfile;
