import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({
  productList: [],
  fetching: false,
  setResponse:{},
  response :[],
  show:false,
  SetShow:{},
});

const ContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [response,setResponse] = useState("")
  const [show, SetShow] = useState(false);

//  Memoize the setShow function to prevent unnecessary re-renders
//  const SetShow = useMemo(() => setShow, []);


  
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
        setFetching(false);
      });
  }, []);

  return (
    <>
      <Context.Provider value={{ productList, fetching,setResponse,response,SetShow,show}}>
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextProvider;
