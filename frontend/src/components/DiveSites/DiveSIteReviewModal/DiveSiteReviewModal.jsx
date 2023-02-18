import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';


const DiveSiteReviewModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
    const {siteId} = useParams();
    const [user, token] = useAuth();
    const [review_text, setReview_Text] = useState();
 
               
    async function handleSubmit(event) {
        try { 
            event.preventDefault();
            let newDS_Review = {
            review_text: review_text,
            
            };
            await axios.post(`http://127.0.0.1:8000/api/ds_review/${siteId}`, newDS_Review, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            props.DS_reviews(true);
            setReview_Text("");
            hideModal();
            props.getDSReviews();
            } catch (error) {
              console.log(error.message);
            }
            };


  return (
    <div>
    <button onClick={showModal}>Add Review</button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Add Dive Site Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <form className='createForm'>
                    <div className="row">
                        <div className="col">
                            <div>
                            <label>Dive Site Review</label>
                            <input
                                type="text"
                                className="form-control"
                                value={review_text}
                                onChange={(event) => setReview_Text(event.target.value)}
                            />
                            </div>
                        </div>                      
                    </div>
                </form>
            </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button onClick={handleSubmit} type="submit">Submit</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
    
 





export default DiveSiteReviewModal;