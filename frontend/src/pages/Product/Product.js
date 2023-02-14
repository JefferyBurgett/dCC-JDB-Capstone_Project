import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Product = ( {authorized} ) => {
 
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
  if (!authorized) {
    return <Navigate to="/login" />
  }
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