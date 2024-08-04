import React, { useState } from 'react';
import { getCartItems } from '../../product.jsx';
 

const Cart = (props) => {
  const { cartItems } = getCartItems();
  

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={item.name} />
          <p>{item.name}</p>
          <p>Price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;