import React, { useState, useContext } from 'react';
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

function ItemCount({ initial, stock, item }) {
  const [contador, setContador] = useState(initial);
  const { addItem } = useContext(CartContext);
  const [mostrarComponente, setMostrarComponente] = useState(true);

  const handleAumentar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  }

  const handlerRestar = () => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  }

  const addToCart = () => {
    addItem(item, contador);
    setMostrarComponente(false);
  }

  return (
    <div className="container w-50">
      {mostrarComponente ? (
        <>
          <div>
            <button className="btn btn-outline-primary" onClick={handleAumentar}> + </button>
            {contador}
            <button className="btn btn-outline-primary" onClick={handlerRestar}> - </button>
          </div>
          <button className="btn btn-outline-primary btn-block" onClick={addToCart}>Agregar al carrito</button>
        </>
      ) : (
        <Link className="btn btn-outline-primary btn-block" to="/cart">Ir Al Carrito</Link>
      )}
    </div>
  )
}

export default ItemCount;
