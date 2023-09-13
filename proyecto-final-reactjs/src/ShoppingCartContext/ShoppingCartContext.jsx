import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const isItemFound = cart.find((cartItem) => cartItem.id === item.id);

    if (isItemFound) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
