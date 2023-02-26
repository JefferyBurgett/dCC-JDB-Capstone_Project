import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./DiversListPage.css"
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";


const DiversListPage = (props) => {
  
  const [user, token] = useAuth();
  const [diversList, setDiversList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  
  useEffect(() => {
    const fetchDiversList = async () => {      
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/diver/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDiversList(response.data);
        setOriginalList(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDiversList();
  }, [token]);
  


  return ( 
    <div id="divers-list-div">
      <SearchBar diversList={originalList} setDiversList={setDiversList} />

      <div className='table-container'>
          <table className='table table-bordered table-stripped'>
              <thead>
                  <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Country</th>
                      <th>Account Type:</th>      
                      <th>Certifaction Agency:</th>
                      <th>Certifaction Level:</th>
                      <th>Email Address:</th>
                      <th>Available to Dive:</th>
                  </tr>
              </thead>
              <tbody>
              {diversList &&
              diversList.map((element) => {
                
              return (              
              <tr key={user.id}>
                <td>{element.user.first_name}</td>
                <td>{element.user.last_name}</td>
                <td>{element.user_city}</td>
                <td>{element.user_state}</td>
                <td>{element.user_country}</td>
                <td>{element.user_type}</td>      
                <td>{element.user_cert_agency}</td>
                <td>{element.user_cert_level}</td>
                <td>{element.user.email}</td>
                <td>{element.user_availibility ? "Available" : "Not Availalbe"}</td>       
              </tr>
              ) 
              })}            
                          
          </tbody>
        </table>
        </div>
      </div>
    
     );
};
export default DiversListPage;