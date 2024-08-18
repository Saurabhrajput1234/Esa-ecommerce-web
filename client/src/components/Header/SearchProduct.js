import React, { useContext, useState } from 'react'
import { Context } from '../contextProvider/ContextProvider';
import ErrorPage from '../Products/ErrorPage';
import "./searchProduct.css";
import { IoMdSearch } from "react-icons/io";

const SearchProduct = () => {
  const { productList,SetShow,response,setFoundProduct} = useContext(Context);

  const [searchProduct, setSearchProduct] = useState("");
  
   
  const handleInput = (e)=>{
    setSearchProduct(e.target.value)
  }


  const handleSearch = (e) => {
    e.preventDefault();
    const lowerCaseSearchProduct = searchProduct.toLowerCase();

    const foundProduct = productList.find(product => product.title.toLowerCase() === lowerCaseSearchProduct);
    setFoundProduct(foundProduct || null);
    SetShow(true)
    // e.target.value("");


  //   if(response.length===0)
  // { return(
  //   <>
  //    <ErrorPage/>
  //   </>
  // )}
  setSearchProduct('');
  }


  

  return (
    <>
    <div>
      <form className="SearchBox" role="search"  onSubmit={handleSearch} >
        <div style={{ width: "276px", display: "flex" }} >
          <input className="SearchInput"  name='SearchName' type="search" placeholder="Search" onChange={handleInput} aria-label="Search" />
          <button className="button1" type="submit"  ><IoMdSearch style={{"height":"1.5rem",width:"2rem"}} /></button></div>
      </form>
      
    </div>
    </>
  )
}

export default SearchProduct
