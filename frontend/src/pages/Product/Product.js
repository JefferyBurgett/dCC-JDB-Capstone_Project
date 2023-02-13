import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const Product = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  
  const [user, token] = useAuth();
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/product/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setProducts(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchProducts();
  }, [token]);
  return (
    <div className="container">
      <h1>Products</h1>
      {products &&
        products.map((product) => (
          <p key={product.id}>
            {product.product_brand} {product.product_name} {product.product_type} {product.product_price}
          </p>
        ))}
    </div>
  );
};

export default Product;