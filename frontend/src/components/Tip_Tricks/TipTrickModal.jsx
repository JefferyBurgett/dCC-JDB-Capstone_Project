import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';


const TipTrickModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    const [user, token] = useAuth();
    const [tt_text, setTT_Text] = useState();
                
    async function handleSubmit(event) {
        try { 
            event.preventDefault();
            let newTipTrick = {
              tt_text: tt_text,
            };

            await axios.post("http://127.0.0.1:8000/api/tip_trick/", newTipTrick, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            setTT_Text("");
            
            hideModal();
            props.getAllTipTricks();
            } catch (error) {
              console.log(error.message);
            }
            };

  return (
    <div>
    <button className="myButton" onClick={showModal}>Add Tip or Trick</button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Tip Trick</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <form className='createForm'>
                    <div className="row">
                        <div className="col">
                            <div>
                            <label>Tips & Tricks</label>
                            <input
                                type="text"
                                className="form-control"
                                value={tt_text}
                                onChange={(event) => setTT_Text(event.target.value)}
                            />
                            </div>
                        </div>                      
                    </div>
                </form>
            </Modal.Body>
          <Modal.Footer>
            <button className="myButton" onClick={hideModal}>Cancel</button>
            <button className="myButton" onClick={handleSubmit} type="submit">Submit</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
export default TipTrickModal;