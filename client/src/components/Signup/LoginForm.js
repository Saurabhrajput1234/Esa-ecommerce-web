import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // Updated import
import "./LoginForm.css";
import { Context } from "../contextProvider/ContextProvider";
import loginImg from "../pics/login-img.svg";

const LoginForm = () => {
  const { setResponse } = useContext(Context);
  const history = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = values;

    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const result = await response.json();
    if (result.status === 201) {
      localStorage.setItem("usersdatatoken", result.token);
      setResponse(result);
      history("/dash");
      setValues({ ...values, email: "", password: "" });
    }
  };

  const handleGoogleSuccess = (response) => {
    const decodedToken = jwtDecode(response.credential);
    console.log(decodedToken); // Handle token as needed (send to backend, etc.)
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Login Error:", error);
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="signin">
        <div className="image-box">
          <img src={loginImg} alt="" />
        </div>
        <div className="signin-form">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
          <form onSubmit={handleLogin}>
            <label>
              <input
                type="email"
                name="email"
                placeholder="Email or Username"
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
            <button type="submit">Login</button>
          </form>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />
          <Link to="/signup">
            <p style={{ color: "blue" }}>Create new account</p>
          </Link>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginForm;
