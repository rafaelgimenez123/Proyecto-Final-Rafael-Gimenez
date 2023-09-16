import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from "../../context/CartContext"
const CartWidget = () => {
  const {cart} = useContext(CartContext)
  console.log(cart)
  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
      {cart.lenght}
    </div>
  );
};

export default CartWidget;