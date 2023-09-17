import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from "../../context/CartContext"
import { getCartQuantity } from '../../Utils';
const CartWidget = () => {
  const {cart} = useContext(CartContext)
  const quantity = getCartQuantity(cart)
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} />
      {quantity > 0 ? quantity : ""}
    </div>
  );
};

export default CartWidget;