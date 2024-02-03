import React from 'react'
import "./aboutProduct.css"

const FoundProduct = (props) => {

 


  const product = props.product;
  
   



  return (
    <div className='SearchProduct'>
      <div className="cart-Item-header" style={{display:'flex',justifyContent:"end"}}>
        <button className='sg'id='dd' style={{"margin-right":"30px"}} onClick={()=>props.setShow(false)}>×</button>
      </div>
       <div className="product">
      <div className='product-img'>
      <img src={product.images[2]} alt="" />

      </div>
      <div className='product-detail'>
      <h1>{product.title}</h1>
      <div className="product-description" style={{height:"300px"}}>
        <img src={product.images[4]} alt="" />
      </div>
      <h3>Price : {product.price}</h3>
      </div>
      </div>
      
    
      

      
    </div>
  );
};
export default FoundProduct;
