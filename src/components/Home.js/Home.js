import React from 'react'
import "./Home.css";
import Products from '../Products/Products';
import Slider from './Slider';
import product1 from '../pics/img 1.jpeg';
import product2 from '../pics/home_back.jpg'
import product3 from '../pics/Frame 600.svg'






function Home() {

  const slides = [
    <img src={product1} alt="Slide 1" />,
    <img src={product2} alt="Slide 2" />,
    
  ];

  return (<>
    <div className='Home-page' >
    <div className="banner-div">
     <div className="products-Categories">

     </div>
     <div className="banner-container">
      <div className="banner">
      <Slider slides={slides} interval={3000} />
      </div>
     </div>
     </div>
     <div className="browse-categories">
      <div className="categories-heading">
        <h3 style={{color:"red","padding-top":"23px"}}>Categories</h3>
        <h1>Browse By Category</h1>
      </div>
      <div className="categories-box">
        <div className="categories-type"></div>
        <div className="categories-type"></div>
        <div className="categories-type"></div>
        <div className="categories-type"></div>
        <div className="categories-type"></div>
        <div className="categories-type"></div>
      </div>
     </div>
     <div className="banner2-box">
      <div className="banner2">
        <img src={product3} alt="" />
      </div>
     </div>
     <Products/>
    </div>


  </>
  )
}

export default Home;