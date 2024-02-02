import React from 'react'
// import "./Modal.css"
import FoundProduct from '../Header/FoundProduct';


const ModalProduct= ({product,show,setShow}) => {
  
  
  if(!show){
    return null;
  }
  return (
    <> <div 
    className="modal">

     <FoundProduct product={product} show={show} setShow ={setShow}  />
    </div>
      
    </>
  )
}

export default ModalProduct;
