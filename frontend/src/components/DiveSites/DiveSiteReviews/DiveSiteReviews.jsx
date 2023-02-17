import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const DiveSiteReviewList = (props) => {
  const { siteId } = useParams();
  const [ds_reviews, setDs_Reviews] = useState([]);

  useEffect(() => {
    displayDs_Reviews();
  }, [props.siteId]);

  async function displayDs_Reviews() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api//all/${siteId}/`
    );
    setComments(response.data);
    
  }

  return (
    <div>
      <p className="comment-list">Comments List: </p>
      <div className="commentlist">
        {comments.map(function (comment, index) {
          return (
            <div key={index} className="singlecomment">
              <p>
                Userame: <span>{comment.user.username}</span>
              </p>
              <div className="commentText-label">
                Comment:
                <br />
              </div>
              <div className="commenttext-container">
                <div className="commentText">
                  <p>{comment.text}</p>
                </div>
               </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentList;