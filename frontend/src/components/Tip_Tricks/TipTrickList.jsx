import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


const TipTrickList = (props) => {
  const [user, token] = useAuth();
  
 
return (
  <div className="container">
   <h1>Tips & Tricks</h1>
     {props.tip_tricks &&
     props.tip_tricks.map((tip_trick) => {
      return (
       <li key={tip_trick.id}>
        {user.username}, {tip_trick.tt_text}
       </li>     
     );
      })}
  </div>
 );
};
  

export default TipTrickList;