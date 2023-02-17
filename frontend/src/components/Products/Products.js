import ProductModal from "./ProductModal/ProductModal";
import ProductsList from "./ProductsList/ProductsList";
import { useState } from "react";

const Products = (props) => {
    const [products, setProducts] = useState();

    return (
        <div>
          <ProductModal setProducts={setProducts} />
          <ProductsList products={products} setProducts={setProducts} />
        </div>
      );
    };
    
    export default Products;
