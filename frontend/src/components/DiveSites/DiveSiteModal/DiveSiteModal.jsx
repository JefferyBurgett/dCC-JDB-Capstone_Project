import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
           
    
    async function handleSubmit(event) {
        try { 
            event.preventDefault();
            let newDiveSite = {
            site_name: site_name,
            site_city: site_city,
            site_state: site_state,
            site_country: site_country,
            };
            await axios.post("http://127.0.0.1:8000/api/dive_site/", newDiveSite, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            props.setDive_Site(true);
            setSite_Name("");
            setSite_City("");
            setSite_State("");
            setSite_Country();
            } catch (error) {
              console.log(error.message);
            }
            };


  return (
    <div>
    <button onClick={showModal}>Add Dive Site</button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Add New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <form className='createForm'>
                    <div className="row">
                    <div className="col">
                        <label>Add Dive Site</label>
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
                    </div>
                </form>
            </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button onClick={handleSubmit} type="submit">Submit</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
    
 





export default DiveSiteModal;