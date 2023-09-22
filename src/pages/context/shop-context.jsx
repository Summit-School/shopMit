import { createContext, useEffect, useState } from "react";
// import {prod } from "../products";
// import {prod } from "../assets/products";

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
  
   const getDefaultCart = () => {
    const numb = Number(prod[0].id);
    let cart = {};
    console.log("This is the top code default car output",prod.length);
    for (let i = numb; i <= prod.length+numb-1 ; i++) {
      cart[i] = 1;
      
    }
    return cart;
  };
  const [prod, setProd] = useState(null);
  const [cartItems, setCartItems] = useState(null);
  useEffect(() => {
    fetch(" http://localhost:8000/BeautyCare")
      .then((response) => response.json())
      .then((data) => {
        setProd(data);
        // console.log(prod);
      })
      .catch((err) => console.error(err));
  }, []);

  
  useEffect(() => {
    
    if(prod!==null){
      const getDefaultCart = () => {
        let cart = [];
      
        const number = Number(prod[0].id);
        console.log(number);
        console.log("this is the product length",prod.length);
        console.log("this is the are the number",number);
        console.log("this is the product id ",prod[1].name);
        for (let i = number; i <= prod.length + number-1 ; i++) {
          cart[i] = 0;
          
        }
        console.log("this are the carts",cart);
        return cart;
        
        
      };
      
      setCartItems(getDefaultCart());
      // console.log("this are the cart iteems",cartItems.length);

}else{
  console.log("Product has not yet loaded")
}
    
    
  }, [prod]);
  
  



  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo =prod.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
// 