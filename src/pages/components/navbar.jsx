import React from "react";
import { Link } from "react-router-dom";
import "./componentsStyle.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
    <h1 className="shoMit" >Shop<span>M</span>it</h1>
    <ul className="links">
      <li><Link to="/home">Shop<span className="material-symbols-outlined">shopping_cart</span></Link></li>
      <li><Link to="/about"> About <span className="material-symbols-outlined">info</span></Link></li>
      <li><Link to="/home/cart">Checkout<span className="material-symbols-outlined">shopping_cart_checkout</span></Link></li>
      <li><Link to="/home/dashboard">dashboard</Link></li>
    </ul>
    </nav>
  );
};