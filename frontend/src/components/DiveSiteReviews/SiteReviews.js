import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import DiveSiteReviewList from "./DiveSiteReviewList";
import DiveSiteReviewModal from "./DiveSIteReviewModal/DiveSiteReviewModal";
const SiteReviews = (props) => {
    const { siteId } = useParams();
    const [user, token] = useAuth();
    const [ds_reviews, setDS_Reviews] = useState();
    useEffect(() => {

        displayReviews();
      }, [props.siteId]);
    
      const displayReviews = async () => {
        try {
        let response = await axios.get(
          `http://127.0.0.1:8000/api/ds_review/${siteId}/`, {
            headers: {
              Authorization: "Bearer " + token,
          }});
            setDS_Reviews(response.data);
            console.log(ds_reviews);
            } catch (error) {
                console.log(error.response.data);
            } 
          };
     

    return (
        <div id="review-container">
          <div className="review-container">
            <div className="ds-review-modal"></div>
            <DiveSiteReviewList ds_reviews={ds_reviews} setDS_Reviews={setDS_Reviews} />
            <DiveSiteReviewModal getAllReviews={displayReviews} />
          </div>
        </div>
      );
    };
    
    export default SiteReviews;