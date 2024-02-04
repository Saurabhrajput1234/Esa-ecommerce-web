import React, { createContext, useEffect, useState } from "react";


export const Context = createContext({
  productList: [],
  fetching: false,
  setResponse:{},
  response :[],
  show:false,
  SetShow:{},
  setFoundProduct:{},
  foundProduct:[],
  setCategory:{},
  category:'',
  filterProductsByCategory:{}
});

const ContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [response,setResponse] = useState("")
  const [show, SetShow] = useState(true);
  const [foundProduct, setFoundProduct] = useState('');
  const[category,setCategory]=useState('');


  console.log(category,"category")

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

  const filterProductsByCategory = () => {
  
    const filteredProducts = productList.filter(product => product.category === category);
    
    return filteredProducts;
    
  };
 
  console.log(filterProductsByCategory() ,"dbfkvbfkjb")
  
 


  return (
    <>
      <Context.Provider value={{ productList, fetching,setResponse,response,SetShow,show,setFoundProduct,foundProduct,setCategory,filterProductsByCategory,category}}>
        {children}
      </Context.Provider>
    </>
  );
};

export default ContextProvider;
