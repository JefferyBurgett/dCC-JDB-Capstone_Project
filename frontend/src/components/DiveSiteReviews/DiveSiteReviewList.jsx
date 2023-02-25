import React from "react";
import useAuth from "../../hooks/useAuth";
import "./DiveSiteReview.css";


const DiveSiteReviewList = (props) => {
  const [user, token] = useAuth();
  
 
return (
  <div id="dive-site-review-container" className="container">
    <div className="div-h1">
   <h1>Reviews</h1>
   </div>
     {props.ds_reviews &&
     props.ds_reviews.map((ds_review) => {
      return (
        <div className="review-parent">
          <div className="review-div" key={ds_review.dive_site_id}>
            <p className="review-date">{ds_review.user.username} </p>
            <span className="seperator"> : </span>
            <p>{ds_review.review_text} </p>
          </div>  
       </div>   
     );
    })}
  </div>
 );
};
  

export default DiveSiteReviewList;