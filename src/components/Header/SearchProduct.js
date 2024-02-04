import React, { useContext, useState } from 'react'
import { Context } from '../contextProvider/ContextProvider';
import ErrorPage from '../Products/ErrorPage';
import "./searchProduct.css"

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

    if(response.length===0)
  { return(
    <>
     <ErrorPage/>
    </>
  )}
  }


  

  return (
    <>
    <div>
      <form className="SearchBox" role="search"  onSubmit={handleSearch} >
        <div style={{ width: "45px", display: "flex" }} >
          <input className="SearchInput"  name='SearchName' type="search" placeholder="Search" onChange={handleInput} aria-label="Search" />
          <button className="button1" type="submit"  >Search</button></div>
      </form>
      
    </div>
    </>
  )
}

export default SearchProduct
