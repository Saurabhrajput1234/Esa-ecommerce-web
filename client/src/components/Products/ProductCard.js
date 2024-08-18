import React from 'react'
import "./Products.css";

const ProductCard = (props) => {
  const product = props.product;
  return (
    <>
      <div key={product.id} className="card">
        <div>
          <img className="card-image" src={product.images[3]} alt={product.title} />
        </div>
        <div>
          <h3 className='product-name'>{product.title}</h3>
        </div>
        <div style={{display:"flex"}}>
          <h3 className='product-price'>${product.price}</h3>
          <div>
          <button className='product-add-button' onClick={() => props.handleAddProduct(product)}>add</button>
        </div>
        </div>
        
      </div>


    </>
  )
}

export default ProductCard
