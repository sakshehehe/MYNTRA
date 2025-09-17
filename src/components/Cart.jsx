import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import "../Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [receipt, setReceipt] = useState(null);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // 🧾 Generate receipt
    const receiptData = {
      items: [...cart],
      total: totalPrice,
      date: new Date().toLocaleString(),
      orderId: Math.floor(100000 + Math.random() * 900000) // random order id
    };

    setReceipt(receiptData);
    clearCart(); // empty cart after checkout
  };

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ₹{item.price}
              <button onClick={() => removeFromCart(item)}>❌ Remove</button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ₹{totalPrice}</h3>

      {/* Checkout button */}
     <button className="checkout-btn" onClick={handleCheckout}>
  Checkout
</button>


      {/* Receipt display */}
      {receipt && (
        <div className="receipt">
          <h3>🧾 Order Receipt</h3>
          <p><b>Order ID:</b> {receipt.orderId}</p>
          <p><b>Date:</b> {receipt.date}</p>
          <ul>
            {receipt.items.map((item, i) => (
              <li key={i}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h4>Total Paid: ₹{receipt.total}</h4>
          <p>✅ Thank you for shopping with us!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

