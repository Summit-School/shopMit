import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
