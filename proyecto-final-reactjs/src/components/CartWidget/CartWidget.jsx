import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div className="cart-icon">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-count">1</span>
    </div>
  );
};

export default CartWidget;