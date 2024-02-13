import React,{useContext} from 'react';
import { Context } from '../contextProvider/ContextProvider';
import ProductCard from '../Products/ProductCard';



const FilterProductList = (props)=>{
  const {category,filterProductsByCategory} = useContext(Context);

  if(props.selectedCard == null)
  {
    return(
      <>
        
      </>
    )
  }
  
  return(<>
  

<div className="products-background">
  <div className="products-heading">
  <h3 style={{color:"red",paddingTop:"30px"}}>Our Products</h3>
  <h2>Explore {category}</h2>

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