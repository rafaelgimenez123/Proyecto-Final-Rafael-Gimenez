import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { getProducts } from "../services";
const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { cart, clear } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckout = async () => {
    setIsLoading(true);

    try {

      const order = {
        buyer: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        },
        items: mapCartToOrderItems(cart),
        total: getCartTotal(cart),
        date: serverTimestamp(),
      };

      // Envia la orden a Firestore
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "orders"), order);

      setOrderId(docRef.id);
      setIsLoading(false);
      clear();
    } catch (error) {
      console.error("Error al enviar la orden a Firestore:", error);
      setIsLoading(false);
    }
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
                <label htmlFor="name" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Teléfono:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCheckout}
              >
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
