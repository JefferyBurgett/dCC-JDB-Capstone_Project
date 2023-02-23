import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SingleProfile from "../../components/DiverProfiles/SingleProfile";
import { useParams } from "react-router-dom";


const DiverProfilePage = () => {
  const { userId } = useParams
  const [user, token] = useAuth();
  const [diver, setDiver] = useState([]);
  
  
  useEffect(() => {
    const fetchDiver = async () => {
      
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/diver/${userId}`,{
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
        <SingleProfile setDiver={setDiver} />
    </div>
  );
};

export default DiverProfilePage;