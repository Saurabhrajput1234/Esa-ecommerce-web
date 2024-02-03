import React from 'react'
import "./Modal.css"
import Cart from '../Cart/Cart';



const Modal = (props) => {

  console.log(props.show1,"this is model")


  if (!props.show1) {
    return null;
  }


  return (
    <> <div
      className="modal">
      <Cart onClose1={props.onClose1} cartItem={props.cartItem} handleAddProduct={props.handleAddProduct} handleRemoveProduct={props.handleRemoveProduct} handleCartClear={props.handleCartClear} />

    </div>

    </>
  )
}

export default Modal;
