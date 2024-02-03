import React, { useContext } from "react";
import "./Products.css";
import { Context } from "../contextProvider/ContextProvider";
import LoadingSpinner from "./LoadingSpinner";
import ProductCard from "./ProductCard";
import ErrorPage from "./ErrorPage";


const Products = (props) => {
  const { productList, fetching,response } = useContext(Context);

  // if(response.length===0)
  // { return(
  //   <>
  //    <ErrorPage/>
  //   </>
  // )}

  return (
    <>
      {fetching && <LoadingSpinner />}

      {!fetching && (<div className="products-background">
        <div className="products-heading">
        <h3 style={{color:"red",paddingTop:"30px"}}>Our Products</h3>
        <h1>Explore Our Products</h1>

        </div>
        <div className="products">
        
          {productList.map((productItem) => (
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
