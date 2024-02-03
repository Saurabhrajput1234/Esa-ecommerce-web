import React, { useState } from "react";
import Header from "./components/Header/Header";
import Routers from "./components/Routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Modal from "./components/modal/Modal";
import ContextProvider from "./components/contextProvider/ContextProvider";
import './App.css';



const App = () => {
  
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
        <ContextProvider>
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
            <Routers
             
              cartItem={cartItem}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClear={handleCartClear}
            />
            <Modal
              show1={show1}
              onClose1={() => setShow1(false)}
              cartItem={cartItem}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClear={handleCartClear}
            ></Modal>
            
          </Router>
          <Footer />
        </ContextProvider>
      </div>
    </>
  );
};

export default App;
