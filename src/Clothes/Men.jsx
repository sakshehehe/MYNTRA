// import React, { useContext } from "react";
// import JSONm from "../Men.json";
// import ProductList from "./ProductList";
// import { CartContext } from "../CartContext";
// import "./Products.css";

// const Men = () => {
//   const { cart, addToCart } = useContext(CartContext);

//   return (
//     <div>
//       <h2>Men's Products</h2>
//       <ProductList prodList={JSONm} onAddToCart={addToCart} />

//       {/* Cart display */}
//       <h3>🛒 Cart ({cart.length})</h3>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>
//             {item.name} - ₹{item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Men;
import React, { useContext } from "react";
import JSONm from "../Men.json";
import ProductList from "./ProductList";
import { CartContext } from "../CartContext";
import "./Products.css";

const Men = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="section-title">Men's Collection</h2>

      <ProductList
        prodList={JSONm}
        onAddToCart={addToCart}
      />

      <div className="cart-section">
        <h3>🛒 Cart ({cart.length})</h3>

        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Men;

