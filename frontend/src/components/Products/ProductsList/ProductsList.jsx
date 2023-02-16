import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [user, token] = useAuth();
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
              <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                {product.product_name} 
              </Link>
            </li>

              // <p key={product.id}>
              //   {product.product_brand} {product.product_name} {product.product_type} {product.product_price}
              // </p>
            ))}
        </div>
      );
};

export default ProductList;