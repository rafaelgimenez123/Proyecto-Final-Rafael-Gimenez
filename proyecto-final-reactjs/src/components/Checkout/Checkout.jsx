import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../Utils";
import { createOrder } from "../../services";
import CartProvider from "../../context/CartProvider";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: document.getElementById("name").value, 
        phone: document.getElementById("phone").value, 
        email: document.getElementById("email").value, // 
      },
      items: mapCartToOrderItems(cart),
      total: getCartTotal(cart),
      date: serverTimestamp(),
    };

    setIsLoading(true);
    createOrder(order).then((docRef) => {
      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Checkout</h1>

      <h2>Resumen de la compra</h2>

      {orderId && <p>El id de la orden es: {orderId}</p>}

      {!orderId && (
        <>
          <div className="mb-4">
            <h4>Formulario de contacto</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre:</label>
                <input type="text" id="name" name="name" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono:</label>
                <input type="text" id="phone" name="phone" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico:</label>
                <input type="email" id="email" name="email" className="form-control" />
              </div>
              <button type="button" className="btn btn-primary" onClick={handleCheckout}>
                Finalizar compra
              </button>
            </form>
          </div>

          <div className="mb-4">
            <h4>Productos</h4>
            <ul className="list-group">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item">
                  <p>Nombre del producto: <b>{item.name}</b></p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio por unidad: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
          </div>

          <p>Total de la compra: ${getCartTotal(cart)}</p>

          {isLoading && <p>Procesando compra...</p>}
        </>
      )}
    </div>
  );
};

export default Checkout;
