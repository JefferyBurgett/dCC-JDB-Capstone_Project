import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Products from "../../components/Products/Products";



const ProductPage = () => {
 
  const [user, token] = useAuth();
  const [products, setProducts] = useState([]);
  
  return (
      <Products setProducts={setProducts} />
  );
};

export default ProductPage;