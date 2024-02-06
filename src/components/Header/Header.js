import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import { useState } from 'react';
import SearchProduct from './SearchProduct';
import { MdAddShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";



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
       <Link to="/dash"><div className="profile1" > 
       <VscAccount style={{"font-size":"2.5rem" ,"padding-top":"13px",color:"gray"}} /></div></Link>
        <div className={`navbar-links ${isNavbarOpen ? 'active' : ''}`}>
        
          <SearchProduct />
          <a href="/">Home</a>
          <a href="/Products">Product</a>
          
          <a href="/signin">Signin</a>

         <div style={{display:"flex"}}>

          <div  style={{ color: "white" , "font-size":"1.3rem" }} className='/cart' onClick={props.onShow1} ><MdAddShoppingCart style={{color:"grey"}} />
          

          </div>
          <div><span >{props.cartItem.length === 0 ? "" : <div className="cart-length"><p>{props.cartItem.length}</p></div> }</span> 
           </div>
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
