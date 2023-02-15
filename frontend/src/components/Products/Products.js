import ProductForm from "./ProductsForm";
import ProductsList from "./ProductsList";
import { useState } from "react";

const Products = (props) => {
    const [products, setProducts] = useState();

    return (
        <div>
          <ProductForm setProducts={setProducts} />
          <ProductsList products={products} setProducts={setProducts} />
        </div>
      );
    };
    
    export default Products;
