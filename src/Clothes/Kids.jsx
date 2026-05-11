// import React, { useContext } from "react";
// import JSONk from "../Kids.json";
// import ProductList from "./ProductList";
// import { CartContext } from "../CartContext";  // import global context
// import "./Products.css";

// const Kids = () => {
//   const { cart, addToCart } = useContext(CartContext);

//   return (
//     <div>
//       <h2>Kids' Products</h2>
//       <ProductList prodList={JSONk} onAddToCart={addToCart} />

//       {/* Show global cart items */}
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

// export default Kids;
import React, { useContext } from "react";
import JSONk from "../Kids.json";
import ProductList from "./ProductList";
import { CartContext } from "../CartContext";
import "./Products.css";

const Kids = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="section-title">Kids Collection</h2>

      <ProductList
        prodList={JSONk}
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

export default Kids;
