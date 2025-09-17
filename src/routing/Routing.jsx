import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Women from "../Clothes/Women";
import Men from "../Clothes/Men";
import Kids from "../Clothes/Kids";
import Myntra from "../components/Myntra";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home"; // Landing page (Login/Register options)
import Cart from "../components/Cart";
import {CartProvider} from "../CartContext";  // ⬅️ import context

const Routing = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Landing page (entry point) */}
          <Route path="/" element={<Home />} />

          {/* Auth pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* After login → Myntra landing page */}
          <Route path="/myntra" element={<Myntra />} />

          {/* Category pages */}
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kids" element={<Kids />} />

          {/* Cart page */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default Routing;

