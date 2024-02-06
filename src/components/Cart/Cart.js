import React, { useContext } from "react";
import "./Cart.css";
import ErrorPage from "../Products/ErrorPage";
import { Context } from "../contextProvider/ContextProvider";


const Cart = (props) => {
  const {loginData} = useContext(Context);
 
  const totalPrice = props.cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  
  if(!loginData)
  { return(
    
    <div>
      <div className="cart-Items">
    <div className="cart-Item-header">
          your Cart ( )
          <button className="cart-remove" onClick={props.onClose1}>
            ×
          </button>
        </div>

     <ErrorPage/>
     </div>
     </div>
    
  )}
  else{
  return (
    <div>
      <div className="cart-Items">
        <div className="cart-Item-header">
          your Cart ( )
          <button className="cart-remove" onClick={props.onClose1}>
            ×
          </button>
        </div>

        {/* <div className="clear-cart">
          {props.cartItem.length >= 1 && (
            <button
              className="clear-cart-button"
              onClick={() => props.handleCartClear()}
            >
              Remove
            </button>
          )}
        </div> */}
        {props.cartItem.length === 0 && (
          <div className="cart-item-empty">No items are added</div>
        )}

        {props.cartItem.map((item) => (
          <div key={item.id} className="cart-item-list">
            <div className="product-box" style={{height:"",width:"150px",}}>
              <img
              
                className="cart-item-image"
                src={item.images[3]}
                alt={item.title}
              />
              </div>
            
              <div className="cart-item-name product-box">{item.title}</div>

              <div className="cart-item-function product-box">
                <button
                  className="cart-item-add"
                  onClick={() => props.handleAddProduct(item)}
                >
                  +
                </button>
                <button
                  className="cart-item-remove"
                  onClick={() => props.handleRemoveProduct(item)}
                >
                  -
                </button>
              </div>
              <div className="cart-item-price product-box">
                {item.quantity} * ${item.price}
              </div>
            </div>
          
        ))}
      
        <div className="suggest-product"></div>

        <div className="your-total-price">
          SUBTOTAL
          <div className="total-price">Rup {totalPrice}</div>
        </div>
        <div className="checkout">
          <h4>CHECKOUT</h4>
        </div>
        <div className="continue-shop">
          <a href="/products">CONTINUE SHOPPING</a>
        </div>
      </div>
    </div>
  );
};
}

export default Cart;
