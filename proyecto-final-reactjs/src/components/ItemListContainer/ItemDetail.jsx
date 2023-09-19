import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "../../context/CartContext";
import ItemCount from "../../ItemCount/ItemCount";

const ItemDetail = ({ item, isLoading }) => {
  const { addItem } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Estado para selectedQuantity

  const addToCart = () => {
    // Llama a la función addItem con la cantidad seleccionada
    addItem(item, selectedQuantity);
    // Establece el estado selectedQuantity si es necesario
    // setSelectedQuantity(selectedQuantity);
  }

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!item) {
    return <h2>No encontrado</h2>;
  }

  return (
    <div className="card">
      <img
        src={item.imageId}
        alt={item.name}
      />
      <div className="card-body">
        <h1>{item.name}</h1>
        <p>${item.price}</p>
        <p>{item.categoryId}</p>
        <p>{item.description}</p>
        <ItemCount
          initial={1}
          stock={10}
          item={item}
          selectedQuantity={selectedQuantity} 
          setSelectedQuantity={setSelectedQuantity}
          addToCart={addToCart} 
        />
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;
