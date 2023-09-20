import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { getCartTotal, mapCartToOrderItems } from "../../Utils";
import { createOrder } from "../../services";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);

  const total = getCartTotal(cart);

  const handleCheckout = () => {
    const order = {
      buyer: {
        name: "John",
        phone: "123456789",
        email: "john@gmail.com",
      },
      items: mapCartToOrderItems(cart),
      total,
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
            {/* TODO: Formulario */}
          </div>

          <div className="mb-4">
            <h4>Productos</h4>
            <ul className="list-group">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item">
                  <p>Nombre del producto:{item.title}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio por unidad: ${item.price}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
          </div>

          <p>Total de la compra: ${total}</p>

          <button className="btn btn-primary" onClick={handleCheckout}>
            Finalizar compra
          </button>

          {isLoading && <p>Procesando compra...</p>}
        </>
      )}
    </div>
  );
};

export default Checkout;
