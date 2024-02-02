import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import { Context } from "../contextProvider/ContextProvider";

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
<pre><h3>login with:  username: 'kminchelle',
          password: '0lelplR' </h3></pre>
      <div className="signin-form">
        <h2>Login</h2>
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
          <button type="buttonLogin" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
