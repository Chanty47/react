import React from 'react';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const cartItems = []; // Replace with state

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
