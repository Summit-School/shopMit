import { BrowserRouter as Router, Routes, Route,Switch } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./components/shop";
// import { Contact } from "./pages/contact";
// import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import {Footer} from "./components/footer";
import Hero  from "./components/hero";
import {Testimonials} from "./components/testimonials"
 

const Home = () => {
  return (
    <div className="home">

<Navbar />
        {/* <Cart/> */}
    <Hero/>
    <ShopContextProvider>
     <Shop />
     </ShopContextProvider> 
     <Testimonials/>
     <Footer/>
    
    
   {/* <ShopContextProvider>
    <Router>
      
     
      
        <Footer/>
      <Switch>
        <Route path="/home/" element={<Shop />} 
        />
        <Route path="/home/contact" element={<Contact />} />
        <Route path="/home/cart" element={<Cart />} />
      </Switch>
    </Router>
  </ShopContextProvider>  */}
    </div>


  );
};

export default Home;
