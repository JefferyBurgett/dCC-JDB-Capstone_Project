import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import ProductReviewModal from "./ProductReviewModal";


const ProductReviews = (props) => {
  const [user, token] = useAuth();
 
return (
  <div className="container">
    <div className="center-child">
      <h1 className="black-box-h1">Reviews</h1>
    </div>
     {props.product_reviews &&
     props.product_reviews.map((product_review) => {
      return (
        <div className="center-child">
          <div className="black-box" key={product_review.product_id}>
            {user.username}
            <span className="seperator">:</span>
            {product_review.pd_review_text}
          </div>   
       </div>  
     );
    })}
    <ProductReviewModal getProductReviews={props.displayPDReviews} />
  </div>
 );
};
  

export default ProductReviews;