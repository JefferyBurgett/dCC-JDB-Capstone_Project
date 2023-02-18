import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const ProductList = (props) => {

  const [user, token] = useAuth();

  

  return (
        <div className="container">
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