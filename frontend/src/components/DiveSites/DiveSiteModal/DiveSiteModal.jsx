import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";

const DiveSiteModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

   
  const [user, token] = useAuth();
  const [site_name, setSite_Name] = useState();
  const [site_city, setSite_City] = useState();
  const [site_state, setSite_State] = useState();
  const [site_country, setSite_Country] = useState();
  const [site_lat, setSite_Lat] = useState();
  const [site_lng, setSite_Lng] = useState();

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      let newDiveSite = {
        site_name: site_name,
        site_city: site_city,
        site_state: site_state,
        site_country: site_country,
        site_lat: site_lat,
        site_lng: site_lng,
      };
      await axios.post("http://127.0.0.1:8000/api/dive_site/", newDiveSite, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setSite_Name("");
      setSite_City("");
      setSite_State("");
      setSite_Country("");
      setSite_Lat("");
      setSite_Lng("");
      hideModal();
      props.fetchDive_Sites();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="ds-modal">
      <button className="myButton" onClick={showModal}>Add Dive Site</button>
      <Modal show={isOpen} size="xl" onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>
            Add Dive Site - Get Latitude and Longitude from Google Maps
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="createForm">
            <div className="row">
              <div className="col">
                <div>
                  <label>Dive Site Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={site_name}
                    onChange={(event) => setSite_Name(event.target.value)}
                  />
                </div>
              </div>

              <div className="col">
                <label>Dive Site City</label>
                <input
                  type="text"
                  className="form-control"
                  value={site_city}
                  onChange={(event) => setSite_City(event.target.value)}
                />
              </div>

              <div className="col">
                <label>Dive Site State</label>
                <input
                  type="text"
                  className="form-control"
                  value={site_state}
                  onChange={(event) => setSite_State(event.target.value)}
                />
              </div>

              <div className="col">
                <label>Dive Site Country</label>
                <input
                  type="text"
                  className="form-control"
                  value={site_country}
                  onChange={(event) => setSite_Country(event.target.value)}
                />
              </div>

              <div className="col">
                <label>Dive Site Latitude</label>
                <input
                  type="text"
                  className="form-control"
                  value={site_lat}
                  onChange={(event) => setSite_Lat(event.target.value)}
                />
              </div>

              <div className="col">
                <label>Dive Site Longitude</label>
                <input
                  type="text"
                  className="form-control"
                  value={site_lng}
                  onChange={(event) => setSite_Lng(event.target.value)}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DiveSiteModal;
