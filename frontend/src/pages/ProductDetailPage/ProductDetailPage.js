import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
    const {productId} = useParams();
    const [product, setProduct] = useState({})
    console.log(product);

    useEffect(() => {
        const fetchProductDetailPage = async () => {
            try {
                let response = await axios.get(`http://127.0.0.1:8000/api/product/${productId}`
                );
                setProduct(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchProductDetailPage();
    }, [product], [productId]);

    return (
        <div>
            <h1>Product Details {productId}</h1>
            <h1>Product Name: {product.name}</h1>
        </div>
    );
};

export default ProductDetailPage;