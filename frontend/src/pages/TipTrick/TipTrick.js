import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

import axios from "axios";

const TipTrick = ( {authorized} ) => {
    
  const [user, token] = useAuth();
  const [tiptricks, setTipTricks] = useState([]);
  

  useEffect(() => {
    const fetchTipTricks = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/tip_trick/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setTipTricks(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchTipTricks();
  }, [token]);
  if (!authorized) {
    return <Navigate to="/login" />
  }
  return (
    <div className="container">
      <h1>Tips & Tricks</h1>
      {tiptricks &&
        tiptricks.map((tip_trick) => (
          <p key={tip_trick.id}>
            {tip_trick.tt_text} 
          </p>
        ))}
    </div>
  );
};

export default TipTrick;