import React from "react";
import useAuth from "../../../hooks/useAuth";

import { Link } from "react-router-dom";


const ProductList = (props) => {

  const [user, token] = useAuth();

  

  return (
        <div className="product-container">
          <h1>Products</h1>
          {props.products &&
            props.products.map((product) => (
              <li key={product.id}>
              <Link to={`/product_detail/${product.id}`}>
              {`${product.product_brand} ${product.product_name}`}
              </Link>
            </li>
            ))}
        </div>
      );
};

export default ProductList;