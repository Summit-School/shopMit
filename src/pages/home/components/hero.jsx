import React from "react";
// import { Navbar } from "./navbar";
import img1 from "../assests/HComponentsImages/yellow.png";

const Hero = () => {
  return (
    <div className="parent">
      <div className="heroImage">
        
        <div className="text">
          <p className="herop1">We've Got The Best </p>
          <p className="herop2">
            <span className="Accessories"> Accessories </span> Just For You
          </p>
          <p className="herop3">
            Buy With ShopMit Form The Comfort of Your Home
          </p>
          <button className="heroButton">Get started</button>
        </div>
        <div className="image">
          <img className="yellow" src={img1} alt="yellow scarf" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
