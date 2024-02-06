import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home.js/Home';
import Modal from '../modal/Modal';
import Products from '../Products/Products';
import LoginForm from '../Signup/LoginForm';
import '../../App.css';
import Register from '../Signup/Register';
import Dashboard from '../Signup/Dashboard';
import ErrorPage from '../Products/ErrorPage';




const Routers = (props) => {
  return (
    <div className='app-css'>
      <Routes>
        <Route path='/' element={<Home handleAddProduct={props.handleAddProduct} />} />
        <Route path='/Products' element={<Products handleAddProduct={props.handleAddProduct} />} />
        <Route path='/modal' element={<Modal cartItem={props.cartItem} handleAddProduct={props.handleAddProduct} show1={props.show1}
        
              onClose1={props.onClose1} handleRemoveProduct={props.handleRemoveProduct} handleCartClear={props.handleCartClear} />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<LoginForm />} />
        <Route path='/dash' element={<Dashboard />} />
      <Route path="/error" element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default Routers
