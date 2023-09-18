import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import ItemCount from "../../ItemCount/itemcount";

const ItemDetail = ({ item, isLoading }) => {
  const { addItem } = useContext(CartContext);

  const [selectedQuantity, setSelectedQuantity] = useState(1); // Estado local para la cantidad seleccionada

  const handleItemCountChange = (newCount) => {
    setSelectedQuantity(newCount); // Actualiza la cantidad seleccionada en el estado local
  };

  const addToCart = () => {
    addItem(item, selectedQuantity); // Agrega el artículo al carrito con la cantidad seleccionada
  };

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!item) {
    return <h2>No encontrado</h2>;
  }

  return (
    <div className="card">
      <img src={item.imageId} alt={item.name} />
      <div className="card-body">
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <p>{item.categoryId}</p>
        <p>{item.description}</p>
        <ItemCount initialCount={selectedQuantity} onCountChange={handleItemCountChange} />
        <button className="btn btn-primary btn-lg" onClick={addToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
