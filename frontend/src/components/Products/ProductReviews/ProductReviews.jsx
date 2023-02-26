import React from "react";
import useAuth from "../../../hooks/useAuth";


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
            {product_review.user.username}
            <span className="seperator"> : </span>
            {product_review.pd_review_text}
          </div>   
       </div>  
     );
    })}
  </div>
 );
};
  

export default ProductReviews;