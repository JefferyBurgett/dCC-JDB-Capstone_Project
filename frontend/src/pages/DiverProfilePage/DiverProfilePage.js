import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DiverProfiles from "../../components/DiverProfiles/DiverProfiles";
import { useParams } from "react-router-dom";


const DiverProfilePage = () => {
  const { userId } = useParams
  const [user, token] = useAuth();
  const [diver, setDiver] = useState([]);
  
  
  useEffect(() => {
    const fetchDiver = async () => {
      
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/diver/`,{
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDiver(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDiver();
  }, [token]);
  return (
    <div>
        <DiverProfiles setDiver={setDiver} />
    </div>
  );
};

export default DiverProfilePage;