import React from "react";
import useAuth from "../../../hooks/useAuth";
import ProductModal from "../ProductModal/ProductModal";

import { Link } from "react-router-dom";


const ProductList = (props) => {

  const [user, token] = useAuth();

  

  return (
        <div className="product-container my-flex-container">
          <div className="center-child">
            <h1 className="black-box-h1">Products</h1>
          </div>
          {props.products &&
            props.products.map((product) => (
              <div className="center-child" key={product.id}>
              <Link className="black-box" to={`/product_detail/${product.id}`}>
              {`${product.product_brand} ${product.product_name}`}
              </Link>
            </div>
            ))}
            <ProductModal getAllProducts={props.fetchProducts} />
        </div>
      );
};

export default ProductList;