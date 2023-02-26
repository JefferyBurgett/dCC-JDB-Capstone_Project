import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';


const ProductModal = (props) => {

    const [isOpen, setIsOpen] = useState(false);
  
    const showModal = () => {
      setIsOpen(true);
    };
  
    const hideModal = () => {
      setIsOpen(false);
    };

    const [user, token] = useAuth();
    const [product_brand, setProduct_Brand] = useState();
    const [product_name, setProduct_Name] = useState();
    const [product_type, setProduct_Type] = useState();
    const [product_price, setProduct_Price] = useState();
    

    async function handleSubmit(event) {
        try { 
            event.preventDefault();
            let newProduct = {
            product_brand: product_brand,
            product_name: product_name,
            product_type: product_type,
            product_price: product_price,
            };
            await axios.post("http://127.0.0.1:8000/api/product/", newProduct, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            });
            setProduct_Brand("");
            setProduct_Name("");
            setProduct_Type("");
            setProduct_Price("");
            hideModal();
            props.getAllProducts();
          } catch (error) {
            console.log(error.message);
          }
        };


  return (  
      <div className="product-modal">
        <button className="myButton" onClick={showModal}>Add Product</button>
        <Modal show={isOpen} size="lg" onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>Add New Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className='createForm' >
              <div className="row">
                <div className="col">
                  <div>
                    <label>Product Brand</label>
                    <input
                      type="text"
                      className="form-control"
                      value={product_brand}
                      onChange={(event) => setProduct_Brand(event.target.value)}
                    />
                  </div>
              </div>

                  <div className="col">
                    <label>Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={product_name}
                      onChange={(event) => setProduct_Name(event.target.value)}
                    />
                  </div>

                  <div className="col">
                    <label>Product Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={product_type}
                      onChange={(event) => setProduct_Type(event.target.value)}
                    />
                  </div>

                  <div className="col">
                    <label>Product Price</label>
                    <input
                      type="text"
                      className="form-control"
                      value={product_price}
                      onChange={(event) => setProduct_Price(event.target.value)}
                    />
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

export default ProductModal;