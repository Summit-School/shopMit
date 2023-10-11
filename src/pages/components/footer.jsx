import React from "react";
import "./componentsStyle.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footerStyle">
      <div className="containerStyle">
        <div className="containerStyle1">
          <p className="shoMit">
            Shop<span>M</span>it
          
          </p>
          <p>&copy; 2023 Your E-commerce Website. All rights reserved.</p>
          <p>Contact: contact@example.com</p>
        </div>
        <div >
        
          <ul>
            <li>Useful links </li>
            <li>
              <Link to="/home"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/login"> Login</Link>{" "}
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div >
          <ul>
            <li>Products</li>
            <li>
              <Link to="/home/Automotive">Automotive</Link>
            </li>
            <li>
              <Link to="/home/BeautyCare">BeautyCare</Link>
            </li>
            <li>
              <Link to="/home/Clothing">Clothing</Link>
            </li>
            <li>
              <Link to="/home/Electronics">Electronics</Link>
            </li>
          </ul>
        </div>
        <div className="containerStyle3">
          <ul>
            <li>
            Products
            </li>
            <li>
              <Link to="/home/Furniture">Furniture</Link>
            </li>
            <li>
              <Link to="/home/Jewerly">Jewerly</Link>
            </li>
            <li>
              <Link to="/home/Kids">Kids</Link>
            </li>
            <li>
              <Link to="/home/Sports">Sports</Link>
            </li>
            <li>
              <Link to="/home/Toys">Toys</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    
  );
};
