import React, { useState} from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./CreateProfile.css"



const CreateProfile = (props) => {
    const [user, token] = useAuth();
    const [user_city, setUser_City] = useState("");
    const [user_state, setUser_State] = useState("");
    const [user_country, setUser_Country] = useState("");
    const [user_type, setUser_Type] = useState("");
    const [user_cert_agency, setUser_Cert_Agency] = useState("");
    const [user_cert_level, setUser_Cert_Level] = useState("");
    const [user_availibility, setUser_Availibility] = useState("");        
    
    async function handleSubmit(event) {
        try { 
            event.preventDefault();
            let newProfile = {
            user_city: user_city,
            user_state: user_state,
            user_country: user_country,
            user_type: user_type,
            user_cert_agency: user_cert_agency,
            user_cert_level: user_cert_level,
            user_availibility: user_availibility,
            };
            await axios.post("http://127.0.0.1:8000/api/diver/", newProfile, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            props.setCreateProfile(true);
            setUser_City("");
            setUser_State("");
            setUser_Country("");
            setUser_Type("");
            setUser_Cert_Agency("");
            setUser_Cert_Level("");
            } catch (error) {
              console.log(error.message);
            }
            };


  return (
    
      <form className='createForm' onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div>
              <label>City</label>
              <input
                type="text"
                className="form-control"
                value={user_city}
                onChange={(event) => setUser_City(event.target.value)}
              />
            </div>
         </div>

            <div className="col">
              <label>State</label>
              <input
                type="text"
                className="form-control"
                value={user_state}
                onChange={(event) => setUser_State(event.target.value)}
              />
            </div>

            <div className="col">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                value={user_country}
                onChange={(event) => setUser_Country(event.target.value)}
              />
            </div>

            <div className="col">
              <label>Account Type</label>
              <input
                type="text"
                className="form-control"
                value={user_type}
                onChange={(event) => setUser_Type(event.target.value)}
              />
            </div>

            <div className="col">
              <label>Certification Agency</label>
              <input
                type="text"
                className="form-control"
                value={user_cert_agency}
                onChange={(event) => setUser_Cert_Agency(event.target.value)}
              />
            </div>
            <div className="col">
              <label>Certification Level</label>
              <input
                type="text"
                className="form-control"
                value={user_cert_level}
                onChange={(event) => setUser_Cert_Level(event.target.value)}
                />
            </div>
             <div className='col'>
                <button>Submit</button>
             </div>   
          </div>
      </form>
    
        

  );
};

export default CreateProfile;