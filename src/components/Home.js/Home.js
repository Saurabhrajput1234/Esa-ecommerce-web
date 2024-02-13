import React,{useContext, useState} from 'react'
import "./Home.css";
import Products from '../Products/Products';
import Slider from './Slider';
import product1 from '../pics/img 1.jpeg';
import product2 from '../pics/home_back.jpg'
import product3 from '../pics/Frame 600.svg'
import product4 from '../pics/Frame 560.svg'
import category2 from '../pics/Category-CellPhone.svg'
import category3 from '../pics/Category-SmartWatch.svg'
import category4 from '../pics/Category-Gamepad.svg'
import category5 from '../pics/Category-Headphone.svg'
import category6 from '../pics/Category-Computer.svg';
import { Context } from '../contextProvider/ContextProvider';
import FilterProductList from './FilterProductList';






function Home(props) {
  const {setCategory,} = useContext(Context);
  const [selectedCard, setSelectedCard] = useState(null);
  
  const handleCardClick = (card)=>{
    setCategory(card.category);
    setSelectedCard(card.id)
  }

  const slides = [
    <img src={product4} alt="Slide 1" />,
    <img src={product3} alt="Slide 2" />,
   
    
  ];

  const categoryCards = [
    { id: 1,category:'smartphones', image:<img src={category2} alt="" /> },
    { id: 2,category:'laptops', image:<img src={category6} alt="" /> },
    { id: 3,category:'fragrances', image:<img src={category3} alt="" /> },
    { id: 4,category:'skincare', image:<img src={category4} alt="" /> },
    { id: 5,category:'groceries', image:<img src={category5} alt="" /> },
    { id: 6,category:'home-decoration', image:<img src={category6} alt="" /> },
  ];

  return (<>
    <div className='Home-page' >
    <div className="banner-div">
     <div className="products-Categories block" >
     
        <li><a href="#filter" onClick={()=>setCategory("smartphones")}>Smartphones</a></li>
        <li><a href="#filter" onClick={()=>setCategory("laptops")}>Laptops</a></li>
        <li><a href="#filter" onClick={()=>setCategory("fragrances")}>Fragrances</a></li>
        <li><a href="#filter" onClick={()=>setCategory("skincare")}>Skincare</a></li>
        <li><a href="#filter" onClick={()=>setCategory("smartphones")}>Groceries</a></li>
        <li><a href="#filter" onClick={()=>setCategory("groceries")}>Home-decoration</a></li>
        <li><a href="#filter" onClick={()=>setCategory("home-decoration")}>Groceries</a></li>
        <li><a href="#">Contect</a></li>
      

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
        <h2>Browse By Category</h2>
      </div>
      <div className="categories-box">
      {categoryCards.map((card)=>(
        <div key={card.id} className={`categories-type ${selectedCard === card.id ? 'selected' : '' }`} onClick={()=> handleCardClick(card)}> {card.image}</div>
        
      ))}
        
      </div>
     </div>
     <div id='filter'>
     <FilterProductList handleAddProduct={props.handleAddProduct}/>
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