import React from "react";

const CartItem = ({ item }) => (
  <div className="cart-item">
    <h3>{item.name}</h3>
    <p>Quantity: {item.quantity}</p>
    <p>Price: ${item.price.toFixed(2)}</p>
  </div>
);

export default CartItem;
