import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const ProductReviews = (props) => {
  const [user, token] = useAuth();
  // const { productId } = useParams();
  // const [product_reviews, setPD_Reviews] = useState([]);

  // useEffect(() => {
  //   displayPD_Reviews();
  // }, [props.siteId]);

  // async function displayPD_Reviews() {
  //   try {
  //   let response = await axios.get(
  //     `http://127.0.0.1:8000/api/product_review/${productId}/`, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //     }});
  //       setPD_Reviews(response.data);
  //       } catch (error) {
  //           console.log(error.response.data);
  //       } 
  //     };
 
return (
  <div className="container">
   <h1>Reviews</h1>
     {props.product_reviews &&
     props.product_reviews.map((product_review) => {
      return (
       <li key={product_review.product_id}>
        {user.username}, {product_review.pd_review_date},{product_review.pd_review_text}
       </li>     
     );
    })}
  </div>
 );
};
  

export default ProductReviews;