import ProductForm from "./ProductForm/ProductsForm";
import ProductsList from "./ProductsList/ProductsList";
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
