import React, { useState } from "react";
import "./register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleRegistration = (event) => {
    event.preventDefault();
    // For simplicity, we won't store the user data. We'll just show a message upon successful "registration".
    setRegistered(true);
  };

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
    <div className="registrationBox">
      <h1>Registration Page</h1>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
