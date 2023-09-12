import React, { createContext } from "react";
export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) =>{
    const[cart, setcart] = UseState([])
    return <CartContext.Provider value={[cart, setCart]}>
        {children}

    </CartContext.Provider>
}