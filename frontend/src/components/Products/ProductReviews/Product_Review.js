import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import ProductReviews from "./ProductReviews";
import ProductReviewModal from "./ProductReviewModal";


const Product_Reviews = (props) => {
    const { productId } = useParams();
    const [user, token] = useAuth();
    const [product_reviews, setPD_Reviews] = useState();
    useEffect(() => {

        displayPDReviews();
      }, [props.productId]);
    
      const displayPDReviews = async () => {
        console.log("productId:" + productId);
        try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/product_review/${productId}/`, {
            headers: {
              Authorization: "Bearer " + token,
          }});
          console.log("responoseData:" + response.data)
            setPD_Reviews(response.data);
            console.log("productreviews:" + product_reviews);
            } catch (error) {
                console.log(error.response.data);
            } 

          };
     

    return (
        <div className="review-container my-flex-container">
          <ProductReviews product_reviews={product_reviews} setPD_Reviews={setPD_Reviews} />
          <ProductReviewModal getProductReviews={displayPDReviews} />
      </div>
      );
    };
    
    export default Product_Reviews;