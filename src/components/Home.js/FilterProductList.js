import React,{useContext} from 'react';
import { Context } from '../contextProvider/ContextProvider';
import ProductCard from '../Products/ProductCard';



const FilterProductList = (props)=>{
  const {category,filterProductsByCategory} = useContext(Context);
  console.log(filterProductsByCategory(),"11212b")
  
  return(<>
  

<div className="products-background">
  <div className="products-heading">
  <h3 style={{color:"red",paddingTop:"30px"}}>Our Products</h3>
  <h1>Explore {category}</h1>

  </div>
  <div className="products">
  
    {filterProductsByCategory().map((productItem) => (
      <ProductCard
        key={productItem.id}
        product={productItem}
        handleAddProduct={props.handleAddProduct}
      />
    ))}
  </div>
  </div>

  </>)

}
export default FilterProductList;