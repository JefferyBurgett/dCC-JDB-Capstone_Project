import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import "./ProfileForm.css"



const ProfileForm = (props) => {
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
            // props.setDiver(newProfile);
            window.location.reload();
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
    <div id="diver-form-div" className="my-flex-container">
      <form id="diver-form" className='createForm my-flex-container profile-container' onSubmit={handleSubmit}>
          <div className="div-h1">
            <h1>User Information</h1>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" value={user_city} onChange={(event) => setUser_City(event.target.value)} name="city" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">City</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" value={user_state} onChange={(event) => setUser_State(event.target.value)} name="state" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">State</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" value={user_country} onChange={(event) => setUser_Country(event.target.value)} name="country" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Country</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" value={user_type} onChange={(event) => setUser_Type(event.target.value)} name="accountType" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Account Type (Personal or Business)</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" value={user_cert_agency} onChange={(event) => setUser_Cert_Agency(event.target.value)} name="CertificationAgency" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Certification Agency</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" value={user_cert_level} onChange={(event) => setUser_Cert_Level(event.target.value)} name="CertificationLevel" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Certification Level</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control" value={user_availibility} onChange={(event) => setUser_Availibility(event.target.value)} name="CertificationLevel" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Availibility (True or False)</label>
          </div>
          
      </form>
      <div className='center-child'>
        <button onClick={handleSubmit} className="myButton">Submit</button>
      </div> 
    </div>
        

  );
};

export default ProfileForm;