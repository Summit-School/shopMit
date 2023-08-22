import React from "react";
import { PRODUCTS } from "../assests/products";
import { Product } from "./product";
import "./shop.css";
// import bags from "./bags.png";
import bags from "../assests/HComponentsImages/bags.png";
// import redlady from "./redLady.png";
import redlady from "../assests/HComponentsImages/redLady.png";
// import down from "./down.png";
import down from "../assests/HComponentsImages/down.png";

// import { feat } from "../../featProducts";
import { feat } from "../assests/featProducts";
import { FeatAnimate } from "./featureAnimation";
// import { Testimonials } from "../../components/testimonials";
import { Testimonials } from "../components/testimonials";
// import { featAnimate } from "./featureAnimation";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <div className="redDbag">
          <img className="red" src={redlady} alt="" />
        </div>
        <div className="redbags">    
           {/* <span className="brandname" >Shop</span>M<span className="brandname" >it</span> */}
          <span>ShopMit</span> got you covered In all <span> categories </span> 
          
          <div className="down">
            {" "}
            <img src={down} alt="" />
          </div>
        </div>
        <div className="redDbag">
          <img className="bags" src={bags} alt="" />
        </div>
      </div>
          <div className="featTitle" >FEATURED PRODUCTS</div>
      <div className="featAnim">
      {feat.map((img) => (
        <FeatAnimate fimg ={img}/>)
        ) 
      }
      
        </div>

      <div className="b4grid">
        <p className="searchP" >Check Out Our Vast <span> Collections </span> </p>
        <p className="searchP2"> <span> Avaiable at all prices  </span> </p>
        <input className="searchBar"
        type="text"
        placeholder="Search by category..."
      />

      </div>

      

  

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>

      <Testimonials/>
    </div>
  );
};
