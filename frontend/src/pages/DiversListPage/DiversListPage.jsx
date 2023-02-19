import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


import axios from "axios";

const DiversListPage = () => {
  
  const [user, token] = useAuth();
  const [diversList, setDiversList] = useState([]);
  
  
  useEffect(() => {
    const fetchDiversList = async () => {
      
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/diver/all/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDiversList(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDiversList();
  }, [token]);


  return (

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
              <td>{element.user_availibility ? "Available" : "Not Availalbe"}</td>       
            </tr>
            ) 
             })}            
                        
        </tbody>
      </table>
      </div>
     );
}

//     <div className="profile-container">
//     <h1>{user.username}!</h1>
//     {diversList &&
//       diversList.map((element) => (
//         <p key={user.id}>
//           <p>First Name: {element.user.first_name}</p>
//           <p>Last Name: {element.user.last_name}</p>
//           <p>City: {element.user_city}</p>
//           <p>State: {element.user_state}</p>
//           <p>Country: {element.user_country}</p>
//           <p>Account Type: {element.user_type}</p>      
//           <p>Certifaction Agency: {element.user_cert_agency}</p>
//           <p>Certifaction Level: {element.user_cert_level}</p>
//           <p>Available to Dive: {element.user_availibility}</p>       
//         </p>
        
//       ))}
//   </div>
//       );
// };


export default DiversListPage;