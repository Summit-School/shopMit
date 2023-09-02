import React, { useState } from "react";
import "./login.css";
import loginImage from "./images/image 1.png";
import logoImg from "./images/logo.png";
import welcomeImg from "./images/Welcome Back.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [logged, setLogged] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/user");
      const users = await response.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Successful login logic
        console.log("Login successful");
        alert("Successfull login");
        setLogged(true);
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setError("An error occurred during login");
    }
  };
  if (logged) {
    return (
      <div className="registrationBox">
        <h1>Loggin Successful!</h1>
        <p>Your email: {email}</p>
      </div>
    );
  }

  return (
    <>
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
