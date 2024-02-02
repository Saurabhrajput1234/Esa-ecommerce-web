import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import { useState } from 'react';
import SearchProduct from './SearchProduct';
import { MdAddShoppingCart } from "react-icons/md";



const Header = (props) => {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (<>
    <nav className="navbar">
      <div className="navbar-container">
        <div ><Link to="/" className="navbar-logo">
          Assignment
        </Link></div>
        <div className={`navbar-links ${isNavbarOpen ? 'active' : ''}`}>

          <SearchProduct />
          <a href="/">Home</a>
          <a href="/Products">Product</a>
          <a href="/signup">Signin</a>


          <div style={{ color: "white" }} className='/cart' onClick={props.onShow1} ><MdAddShoppingCart style={{color:"grey"}} />
            <span className='cart-length'>{props.cartItem.length === 0 ? "" : props.cartItem.length}</span>

          </div>


        </div>


        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  </>
  );
};

export default Header
