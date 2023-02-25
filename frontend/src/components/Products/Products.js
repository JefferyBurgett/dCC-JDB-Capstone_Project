import ProductModal from "./ProductModal/ProductModal";
import ProductsList from "./ProductsList/ProductsList";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import "./Products.css"


const Products = (props) => {
  const[user,token] = useAuth();
    const [products, setProducts] = useState();
    useEffect(() => {
      
      fetchProducts();
    }, [token]);
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
    return (
      <div className="product-list-container my-flex-container">
        <div className="product-list">
          <ProductsList fetchProducts={fetchProducts} products={products} setProducts={setProducts} />
        </div>
      </div>
      );
    };
    
    export default Products;
