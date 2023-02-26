import React from "react";
import useAuth from "../../hooks/useAuth";
import TipTrickModal from "./TipTrickModal";
import "./TipTrickList.css";


const TipTrickList = (props) => {
  const [user, token] = useAuth();
  
 
return (
  <div id="tip-trick-div" className="container my-flex-container">
    <div className="center-child">
      <h1 className="black-box-h1">Tips & Tricks</h1>
    </div>
     {props.tip_tricks &&
     props.tip_tricks.map((tip_trick) => {
      return (
        <div className="center-child">
          <div className="black-box" key={tip_trick.id}>
            {tip_trick.user.username}
            <span className="seperator">:</span>
            {tip_trick.tt_text}
          </div>    
        </div> 
     );
      })}
      <TipTrickModal getAllTipTricks={props.fetchTip_Tricks} />
  </div>
 );
};
  

export default TipTrickList;