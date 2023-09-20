import React, { useContext } from 'react';
import CartContext from "../context/CartContext";
import { getCartQuantity } from '../Utils';
import Swal from 'sweetalert2';
import { Link, NavLink } from 'react-router-dom';

const CartView = () => {
  const { cart, removeItem } = useContext(CartContext);

  const handleRemoveItem = (itemId) => {
    Swal.fire(
      '¡Listo!',
      'Has eliminado el artículo exitosamente.',
      'success'
    );
    removeItem(itemId);
  };

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      <NavLink to="/chekout">Checkout</NavLink>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="row">
          {cart.map((item) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={item.id}>
              <div className="card">
                <img src={item.imageId} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Precio por unidad:${item.price}</p>
                  <p className="card-text">Cantidad: {item.quantity}</p>
                  <p className="card-text">subtotal de este producto:${item.quantity * item.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Eliminar Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartView;
