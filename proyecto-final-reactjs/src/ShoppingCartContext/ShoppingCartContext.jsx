import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Corrected the typo here
  return <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>;
};
