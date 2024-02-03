import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { Context } from "../contextProvider/ContextProvider";
import loginImg from '../pics/login-img.svg';

const LoginForm = () => {

  const {setResponse} = useContext(Context);

  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin = async () => {


    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })

    const result = await response.json();

    if (response.ok) {
      alert("login Successful")
      localStorage.setItem("usersdatatoken",
        result.token);
        setResponse(result)
      history("/Products");
    }
  };

  return (
    <div className="signin">
{/* <pre><h3>login with:  username: 'kminchelle',
          password: '0lelplR' </h3></pre> */}
      <div className="image-box">
        <img src={loginImg} alt="" />
      </div>
      <div className="signin-form">
        <h2>Log in to Exclusive</h2>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <div style={{display:"flex"}}>
          <button style={{height:"36px",width:"100px",color:"white",background:"#d81e0d",border:"none","border-radius":"5px","margin-right":"10px"}} type="buttonLogin" onClick={handleLogin}>
            Login
          </button>
          <div>
          <p style={{color:"blue"}}>Create new account</p>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
