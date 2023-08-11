import React from "react";
import { Link } from "react-router-dom";
import "./componentsStyle.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/home/"> Shop </Link>
        <Link to="/home/contact"> Contact </Link>
        <Link to="/home/cart">
          cart
        </Link>
      </div>
    </div>
  );
};
