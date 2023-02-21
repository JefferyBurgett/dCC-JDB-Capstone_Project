import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';


const ProductReviewModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };
    const {productId} = useParams();
    const [user, token] = useAuth();
    const [pd_review_text, setPD_Review_Text] = useState();
 
               
    async function handleSubmit(event) {
        try { 
            event.preventDefault();
            let newProduct_Review = {
            pd_review_text: pd_review_text,
            
            };
            await axios.post(`http://127.0.0.1:8000/api/product_review/`, newProduct_Review, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            props.product_reviews(true);
            setPD_Review_Text("");
            hideModal();
            props.getProductReviews();
            } catch (error) {
              console.log(error.message);
            }
            };


  return (
    <div>
    <button onClick={showModal}>Add Review</button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Add Product Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <form className='createForm'>
                    <div className="row">
                        <div className="col">
                            <div>
                            <label>Product Review</label>
                            <input
                                type="text"
                                className="form-control"
                                value={pd_review_text}
                                onChange={(event) => setPD_Review_Text(event.target.value)}
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
    
 





export default ProductReviewModal;