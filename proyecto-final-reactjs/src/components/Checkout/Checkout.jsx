import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import CartProvider from '../../context/CartProvider';
const Checkout = () =>{
    const {cart} = useContext(CartContext)
return (
    <div>
        <h1>Checkout</h1>
        <ul>
            {cart.map((item)=> (
                <li key={item.id}>
                    <p>{item.title}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio c/u: ${item.price}</p>
                    <p>Subtotal: ${item.price * item.quantity}</p>
                </li>
            ))}
        </ul>
    </div>
)
}
export default Checkout