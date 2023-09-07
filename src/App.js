import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Login from "./pages/login/login";
import Register from "./pages/register/register";




function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/home" component={Home} />

        {/* <Route exact path="/home/Automotive" component={Mecat} /> 
         <Route exact path="/home/BeautyCare" component={Ecat} />
        <Route exact path="/home/Clothing" component={Ecat} />
        <Route exact path="/home/Electronics" component={Ecat} />
        <Route exact path="/home/Furniture" component={Ecat} />
        <Route exact path="/home/Jewelry" component={Ecat} />
        <Route exact path="/home/Kids" component={Ecat} />
        <Route exact path="/home/Sports" component={Ecat} />
        <Route exact path="/home/Toys" component={Ecat} /> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
export default App;
