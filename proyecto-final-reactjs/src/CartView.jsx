import CartProvider from './context/CartProvider';
import React, { useContext } from 'react';
import CartContext from "./context/CartContext";
import "./components/ItemListContainer/ItemList"


const CartView = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className='cart-main'>
          {cart.map((item) => (
            <div className='cart-card' key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.imageId}</p>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => removeItem(item.id)}>
                Eliminar Item
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartView;
