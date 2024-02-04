import React, { useContext, useState } from "react";
import Header from "./components/Header/Header";
import Routers from "./components/Routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Modal from "./components/modal/Modal";
import './App.css';
import { Context } from './components/contextProvider/ContextProvider';
import ModalProduct from "./components/modal/ModalProduct";




const App = () => {
  const {SetShow,show,foundProduct} = useContext(Context);
  const [cartItem, setCartItems] = useState([]);
  const [show1, setShow1] = useState(false);

  const handleAddProduct = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItem.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItem.filter((item) => item.id !== product.id));
    } else
      setCartItems(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
  };
  const handleCartClear = () => {
    setCartItems([]);
  };

  return (
    <>
      <div >
        <div id="signInDiv"></div>
        
          <Router >
            <Header
              cartItem={cartItem}
              onShow1={() => setShow1(true)}
              show1={show1}
              onClose1={() => setShow1(false)}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClear={handleCartClear}
            />
             <Modal cartItem={cartItem}
              onShow1={() => setShow1(true)}
              show1={show1}
              onClose1={() => setShow1(false)}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClear={handleCartClear}
            >
            

            </Modal>
            {foundProduct  ? (
        <ModalProduct product={foundProduct} show={show} setShow={SetShow}/>
        
      ) : (
        ""
      )}

      
            
            <Routers
              cartItem={cartItem}
              show1={show1}
              onClose1={() => setShow1(false)}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClear={handleCartClear}
            />
           
            
          </Router>
          <Footer />
        
      </div>
    </>
  );
};

export default App;
