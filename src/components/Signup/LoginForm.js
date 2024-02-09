import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { Context } from "../contextProvider/ContextProvider";
import loginImg from '../pics/login-img.svg';
import GoogleLoginComponent from "./GoogleLoginComponent";

const LoginForm = () => {

  const {setResponse} = useContext(Context);
  const history = useNavigate();

  const apiUrl = process.env.REACT_APP_BACKEND_URL || 'https://social-soso-backend-1.onrender.com';
  

 const [values,setValues] = useState({
    email: "",
    password: "",
  });
  
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const {email,password}= values;

    const response = await fetch(`${apiUrl}/login`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })

     })

    const result = await response.json();
    console.log(result,"data")

    if (result.status === 201) {
      
      localStorage.setItem("usersdatatoken",
        result.result.token);
        setResponse(result)
      history("/dash");
      setValues({...values,email:"",password:""});
    }
 };

  return (
    <div className="signin">

      <div className="image-box">
        <img src={loginImg} alt="" />

      </div>
      <div className="signin-form">
        <h2>Log in to Exclusive</h2>
        <div><GoogleLoginComponent/></div>
        <p>Enter your details below</p>
        <form>
         
          <label>
            
            <input
              type="email"
              name="email"
              placeholder="Email or Username "
              onChange={handleInput}
              required
            />
          </label>
          <br />
          <label>
           
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
              required
            />
          </label>
          <br />
          <div style={{display:"flex"}}>
          <button style={{height:"36px",width:"100px",color:"white",background:"#d81e0d",border:"none","border-radius":"5px","margin-right":"10px"}} type="buttonLogin" onClick={handleLogin}>
            Login
          </button>
          <div>
          <Link to="/signup"><p style={{color:"blue"}}>Create new account</p></Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;


