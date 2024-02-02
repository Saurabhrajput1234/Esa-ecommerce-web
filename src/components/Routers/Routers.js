import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home.js/Home';
import Modal from '../modal/Modal';
import Products from '../Products/Products';
import LoginForm from '../Signup/LoginForm';




const Routers = (props) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products handleAddProduct={props.handleAddProduct} />} />
        <Route path='/modal' element={<Modal cartItem={props.cartItem} handleAddProduct={props.handleAddProduct} handleRemoveProduct={props.handleRemoveProduct} handleCartClear={props.handleCartClear} />} />
        <Route path='/signup' element={<LoginForm />} />
      </Routes>
    </div>
  )
}

export default Routers
