import React, { useState } from "react";
import "./login.css";
import loginImage from "./images/image 1.png";
import logoImg from "./images/logo.png";
import welcomeImg from "./images/Welcome Back.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    //  logic to validate the user's credentials and perform the login action.
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <>
      {/* <h1 className="shopTitle">ShopMit</h1>
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Login</button>
        </form>
      </div> */}

      <div className="login-main">
        <div className="image">
          <img src={loginImage} alt="image here" />
        </div>
        <div className="content">
          <div className="logoImg">
            <img src={logoImg} alt="logoImg here" />
          </div>
          <div className="welcomeImg">
            <img src={welcomeImg} alt="WelcomeImg here" />
          </div>
          <form onSubmit={handleLogin} className="login-form">
            <div className="item">
              <p>Email</p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="item">
              <p>Password</p>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <p className="forgotPassword">Forgot Password?</p>
            <div className="btn">
              <button type="submit">Sign In</button>
            </div>
            <p className="create-account">
              Don't have an account? <span>Create Account</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
