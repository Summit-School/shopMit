import React, { useState } from "react";
import "./register.css";
import registerImage from "../login/images/SHOPLY (1).png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    try {
      const newUser = {
        username,
        email,
        number,
        password,
      };

      const response = await fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        // Successful registration logic
        console.log("Registration successful");
        setRegistered(true);
      } else {
        setError("Registration failed");
      }
    } catch (error) {
      console.error("Error occurred during registration:", error);
      setError("An error occurred during registration");
    }
  };
  // const handleRegistration = (event) => {
  //   event.preventDefault();
  //   // For simplicity, we won't store the user data. We'll just show a message upon successful "registration".
  //   setRegistered(true);
  // };

  if (registered) {
    return (
      <div className="registrationBox">
        <h1>Registration Successful!</h1>
        <p>Your username: {username}</p>
        <p>Your email: {email}</p>
      </div>
    );
  }

  return (
    <>
      <div className="main">
        <div className="content">
          <h2>
            Create an <span>Account</span>
          </h2>
          <form onSubmit={handleRegistration}>
            <div className="item">
              <p>Full Name</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Your User Name"
              />
            </div>

            <div className="item">
              <p>Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
              />
            </div>

            <div className="item">
              <p>Phone Number</p>
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter Your Phone Number"
              />
            </div>

            <div className="item">
              <p>Password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Your Password"
              />
            </div>
            <div className="btn">
              <button type="submit">Create Account</button>
            </div>
            <div className="login-text">
              <p>
                Already have an account?{" "}
                <span>
                  <a href="/login">Login</a>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="image">
          <img src={registerImage} alt="image here" />
        </div>
      </div>
    </>
  );
};

export default Register;
