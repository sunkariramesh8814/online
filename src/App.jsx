import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import ProductDetail from "./ProductDetails";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
