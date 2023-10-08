import { React, useEffect, useState } from "react";
// import { PRODUCTS } from "../../assets/products";
import { Product } from "./product";
import "./shop.css";
import bags from "../assets/HComponentsImages/bags.png";
import redlady from "../assets/HComponentsImages/redLady.png";
import down from "../assets/HComponentsImages/down.png";

import { feat } from "../assets/featProducts";
import { FeatAnimate } from "./featureAnimation";
import {useCategoryData} from "./useFetch";
export const Shop = () => {
  
  // const [products, setProducts] = useState([]);
  
  const [category, setCategory] = useState('automotive');
  const auto = useCategoryData(category);
  

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  
  
 
  return (
    <section className="shop">
      <section className="shopTitle">
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
      </section>

      <section>
        <div className="featTitle">FEATURED PRODUCTS</div>
        <div className="featAnim">
          {feat.map((img) => (
            <FeatAnimate key={img.id} fimg={img} />
          ))}
        </div>
      </section>

      <section className="b4grid">
        <p className="searchP">
          Check Out Our Vast <span> Collections </span>{" "}
        </p>
        <p className="searchP2">
      
          {" "}
          <span> Avaiable at all prices </span>{" "}
        </p>
      </section>

      {/* Grid Animation to be done later in the as the project proceeds */}
      <section className="animeGrid">
        <div className="b4grid2">
          <input
            className="searchBar"
            type="text"
            placeholder="Search by category..."
          />
       <label htmlFor="category">Select Category:</label>
    <select id="category" onChange={handleCategoryChange} value={category}>
        <option value="automotive">Automotive</option>
        <option value="beautyCare">BeautyCare</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
         <option value="furniture">Furniture</option>
        <option value="jewelry">Jewelry</option>
        <option value="kids">Kids</option> 
    </select>
    [Automotive,BeautyCare,Clothing,Electronics,Furniture,Jewelry,Kids]

        </div>
        
        <div className="products">
          {/* {auto && auto.map((product) => <Product key={product.id} data={product} />)} */}
{auto.length > 0 ? 
              (auto.map((product) => (
            <Product key={product.id} data={product} />))) : (<p>No products found.</p>)}
            
        </div>
      </section>
    </section>
  );
};
