import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import loginImg from '../pics/login-img.svg';

const Register = () => {
  const history = useNavigate();
  const apiUrl = process.env.REACT_APP_BACKEND_URL || 'https://social-soso-backend-1.onrender.com';

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  console.log(values);
  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password, cPassword } = values;

    if (name === '')
      alert("please enter your name")
    else if (email === "")
      alert("please enter your email")
    else if (!email.includes("@"))
      alert("pleare enter valid email")
    else if (password === "")
      alert("please enter your password")
    else if (password.length < 6)
      alert("password is too sort")
    else if (cPassword === "")
      alert("please enter your confirm password")

    else if (password !== cPassword)
      alert("password are not match")
    else {


      const data = await fetch(`${apiUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, password, cPassword
        })

      })
      const res = await data.json();
      console.log(res);

      if (res) { history("/signin"); }
    }
  };

  return (
    <div className="signin">

      <div className="image-box">
        <img src={loginImg} alt="" />
      </div>
      <div className="signin-form">
        <h2>Sign up to Exclusive</h2>
        <p>Enter your details below</p>
        <form>

          <label>
            <input type="email" placeholder="Name" name="name" onChange={handleInput} />
          </label>

          <label>
            <input type="email" placeholder="Email" name="email" onChange={handleInput} />
          </label>

          <label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="Password"
            />
          </label>



          <label>
            <input type="password" placeholder="Confirm Password" name="cPassword" onChange={handleInput} />
          </label>
          <br />
          <div style={{ display: "flex" }}>
            <button style={{ height: "36px", width: "100px", color: "white", background: "#d81e0d", border: "none", "border-radius": "5px", "margin-right": "10px" }} type="buttonLogin" onClick={handleSignup}>
              Signup
            </button>
            <div>
              <Link to="/signin"><p style={{ color: "blue" }}>already have an account</p></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
