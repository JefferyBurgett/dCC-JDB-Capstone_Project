import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const DiveSiteReviewList = (props) => {
  const [user, token] = useAuth();
  const { siteId } = useParams();
  const [ds_reviews, setDS_Reviews] = useState([]);

  useEffect(() => {
    displayReviews();
  }, [props.siteId]);

  async function displayReviews() {
    try {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/ds_review/${siteId}/`, {
        headers: {
          Authorization: "Bearer " + token,
      }});
        setDS_Reviews(response.data);
        } catch (error) {
            console.log(error.response.data);
        } 
      };
 
return (
  <div className="container">
   <h1>Reviews</h1>
     {ds_reviews &&
     ds_reviews.map((ds_review) => {
      return (
       <li key={ds_review.dive_site_id}>
        <p>{ds_review.user_id},{ds_review.review_date} </p>
        <p>{ds_review.review_text} </p>
       </li>     
     );
    })}
  </div>
 );
};
  

export default DiveSiteReviewList;