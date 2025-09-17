import React, { useContext } from "react";
import JSONw from "../Women.json";
import ProductList from "./ProductList";
import { CartContext } from "../CartContext";  // import global context
import "./Products.css";

const Women = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Women's Products</h2>
      <ProductList prodList={JSONw} onAddToCart={addToCart} />

      {/* Show global cart items */}
      <h3>🛒 Cart ({cart.length})</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Women;


