import React from 'react'
import "./Home.css";
import Products from '../Products/Products';
import Slider from './Slider';
import product1 from '../pics/img 1.jpeg';
import product2 from '../pics/home_back.jpg'
import product3 from '../pics/Frame 600.svg'
import product4 from '../pics/Frame 560.svg'
import category1 from '../pics/Category-Camera.svg'
import category2 from '../pics/Category-CellPhone.svg'
import category3 from '../pics/Category-SmartWatch.svg'
import category4 from '../pics/Category-Gamepad.svg'
import category5 from '../pics/Category-Headphone.svg'
import category6 from '../pics/Category-Computer.svg'





function Home(props) {

  const slides = [
    <img src={product1} alt="Slide 1" />,
    <img src={product2} alt="Slide 2" />,
    <img src={product4} alt="Slide 3" />,
    
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
        <div className="categories-type"> <img src={category3} alt="" /></div>
        <div className="categories-type"> <img src={category2} alt="" /></div>
        <div className="categories-type"> <img src={category3} alt="" /></div>
        <div className="categories-type"> <img src={category4} alt="" /></div>
        <div className="categories-type"> <img src={category5} alt="" /></div>
        <div className="categories-type"> <img src={category6} alt="" /></div>
      </div>
     </div>
     <div className="banner2-box">
      <div className="banner2">
        <img src={product3} alt="" />
      </div>
     </div>
     <Products handleAddProduct={props.handleAddProduct}/>
    </div>


  </>
  )
}

export default Home;