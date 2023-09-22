import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export const Product = (props) => {
  const { id,type,name,price,imagePath } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  
const discount =(pric,discountPercent)=>{
    return price-(pric*(discountPercent/100))
  }
const roundToTwoDecimalPlaces = (number)=> {
    return Math.round(number * 100) / 100;
    }
  
   
  
const discountPercent=10;
const discountP = discount(price,discountPercent);
const discountPrice   =roundToTwoDecimalPlaces(discountP)
  return (
    <div className="product">
      <article className="productWrap">
        <div className="productImage" >
        {/* another way to get image  */}
        {/* <img src={ `http://localhost:8000/${imagePath}`} alt={name}/></div> */}
        <img src={ imagePath} alt={name}/>
        </div>
        
        <section className="productDrp">
          <p className="productName"><b>{type}</b></p>
          <p className="productPrice">${price}</p>
          <p className="productDiscount">${discountPrice} <span >(SAVE {discountPercent}% NOW)</span> </p>
          
          <div className="RatingStars">
          <span class=" rating material-symbols-outlined">star_rate</span>
          <span class=" rating material-symbols-outlined">star_rate</span>
          <span class=" rating material-symbols-outlined">star_rate</span>
          <span class=" rating material-symbols-outlined">star_rate</span>
          <span class=" rating material-symbols-outlined">star_rate_half</span>
          </div>
            
                <div className="ADDCART">
                <span class="cartIcon material-symbols-outlined">add_shopping_cart</span>
          <button className="addToCartBttn" onClick={() => addToCart(id)}>
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
                </div>
        </section>

      </article>
        
      {/* <div className="description">

        <p> ${price}</p>
      </div>
       */}
    </div>
  );
};
