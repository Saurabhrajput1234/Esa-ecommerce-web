import React from 'react'

const FoundProduct = (props) => {

 


  const product = props.product;
  
   



  return (
    <div className='SearchProduct' style={{ height: "428px", width: "348px", background: "#91c16e", border: "2px solid black" }}>
      <div className="cart-Item-header">
        <button className='sg'id='dd' onClick={()=>props.setShow(false)}>×</button>
      </div>

      <h3>{product.title}</h3>
      <img src={product.images[3]} style={{ height: "234px", width: "345px" }} alt="" />

      <h5>Price : {product.price}</h5>
    </div>
  );
};
export default FoundProduct;
