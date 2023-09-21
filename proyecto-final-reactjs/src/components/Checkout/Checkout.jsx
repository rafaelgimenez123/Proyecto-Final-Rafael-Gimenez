import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { getCartTotal, mapCartToOrderItems } from "../../Utils";
import { collection,  addDoc, serverTimestamp } from "firebase/firestore";
import {db} from '../../main'
import Loading from "../Loading/Loading";

const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { cart, clear } = useContext(CartContext);
  const [data, setData]= useState({})

  const handleOnChange = (e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckout = async (e) => {
    e.preventDefault()
    // Construye el objeto de orden
    const order = {
      buyer: data,
      items: mapCartToOrderItems(cart),
      total: getCartTotal(cart),
      date: serverTimestamp(),
    };
    console.log(order)
    setIsLoading(true);

    try {
      // Envia la orden a Firestore
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
 

      <h2>Resumen de la compra:</h2>
      

      {orderId && <p>El id de la orden es: {orderId}</p>}

      {!orderId && (
        <>
          <div className="mb-4">
            <h4>Formulario de contacto</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre:</label>
                <input type="text" id="name" name="name" className="form-control" onChange={handleOnChange}/>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono:</label>
                <input type="text" id="phone" name="phone" className="form-control" onChange={handleOnChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico:</label>
                <input type="email" id="email" name="email" className="form-control" onChange={handleOnChange}/>
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

          {isLoading && <p>Procesando...</p>}
        </>
      )}
    </div>
  );
};

export default Checkout;
