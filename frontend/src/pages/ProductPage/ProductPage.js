import React from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Products from "../../components/Products/Products";



const ProductPage = () => {
 
  const [user, token] = useAuth();
  const [products, setProducts] = useState([]);
  

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let response = await axios.get("http://127.0.0.1:8000/api/product/", {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         });
//         setProducts(response.data);
//         console.log(response.data)
//       } catch (error) {
//         console.log(error.response.data);
//       }
//     };
//     fetchProducts();
//   }, [token]);
  
  return (
    <div>
        
        <Products setProducts={setProducts} />
    </div>
  );
};

export default ProductPage;