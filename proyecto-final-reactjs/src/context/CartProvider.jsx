import { useState } from "react";
import CartContext from "./CartContext";
import Swal from 'sweetalert2';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    const itemInCart = cart.find((item) => item.id === id);
    return !!itemInCart;
  };

  const addItem = (product, quantity) => {
  
    const itemInCart = isInCart(product.id);

    if (itemInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });
      setCart(newCart);
    } else {
     
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    
  };

  const clear = () => {
    setCart([]);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + item.quantity)
  }
 
  
  console.log(cart)
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;