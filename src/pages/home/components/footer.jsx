import React from "react";
import "./componentsStyle.css";

export const Footer = () => {
  return (
    <footer className="footerStyle">
      <div className="containerStyle">
        <div>
        <p className="shoMit" >Shop<span>M</span>it</p>
          <p>&copy; 2023 Your E-commerce Website. All rights reserved.</p>
          <p>Contact: contact@example.com</p>
          
        </div>
        <div>

          <ul>
          
            <li>Useful links </li>
            <li>Home</li>
            <li>About</li>
            <li>Login </li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
            <ul>
              <li>Products</li>
              <li>Trousers</li>
              <li>Electronics</li>
              <li>Shoes</li>
              <li>Jewelries</li>
            </ul>
          
        </div>
      </div>
    </footer>
  );
};
