import React, { useContext } from "react";
import "./Products.css";
import { Context } from "../contextProvider/ContextProvider";
import LoadingSpinner from "./LoadingSpinner";
import ProductCard from "./ProductCard";



const Products = (props) => {
  const { productList, fetching} = useContext(Context);


  return (
    <>
      {fetching && <LoadingSpinner />}

      {!fetching && (<div className="products-background">
        <div className="products-heading">
        <h3 style={{color:"red",paddingTop:"30px"}}>Our Products</h3>
        <h2>Explore Our Products</h2>

        </div>
        <div className="products">
        
          {productList.slice(0,12).map((productItem) => (
            <ProductCard
              key={productItem.id}
              product={productItem}
              handleAddProduct={props.handleAddProduct}
            />
          ))}
        </div>
        </div>
      )}
    </>
  );
};
export default Products;
