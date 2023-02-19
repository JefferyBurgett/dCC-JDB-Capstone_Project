import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ProductReviews from "../../components/Products/ProductReviews/ProductReviews";
import ProductModal from "../../components/Products/ProductModal/ProductModal";

const ProductDetailPage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({});
    const [product_review, setPD_Reviews] = useState({});
    const [user, token] = useAuth();
    console.log(product);

        useEffect(() => {
        
            fetchProduct();
        }, [productId]);

        const fetchProduct = async () => {
          try {
            let response = await axios.get(`http://127.0.0.1:8000/api/product/${productId}/`,{
                headers: {
                    Authorization: "Bearer " + token,
          }});
            setProduct(response.data)
                } catch (error) {
                    console.log(error.response.data)
                }
    };


    return (
        <div>
            <div>
                <h1>Product Details</h1>
                <h1>Product Brand: {product[0]?.product_brand}</h1>
                <h1>Product Name: {product[0]?.product_name}</h1>
                <h1>Product Type: {product[0]?.product_type}</h1>
                <h1>Product Price: {product[0]?.product_price}</h1>
            </div>

            <div>
                <ProductReviews product_review={product_review} setPD_Reviews={setPD_Reviews} />
                <ProductModal setPD_Reviews={setPD_Reviews} />
            </div>
        </div>
    );
};

export default ProductDetailPage;