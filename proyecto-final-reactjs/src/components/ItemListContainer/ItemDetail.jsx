import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "../../context/CartContext";
import ItemCount from "../../ItemCount/ItemCount";
import Loading from "../Loading/Loading";

const ItemDetail = ({ item, isLoading }) => {
  const { addItem } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(1); // Estado para selectedQuantity

  const addToCart = () => {
    // Llama a la función addItem con la cantidad seleccionada
    addItem(item, selectedQuantity);
  }

  if (isLoading) {
    return <Loading></Loading>
  }

  if (!item) {
    return <h2>No encontrado</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={item.imageId}
              alt={item.name}
              className="card-img"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{item.name}</h1>
              <p className="card-text">${item.price}</p>
              <p className="card-text">{item.categoryId}</p>
              <p className="card-text">{item.description}</p>
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
        </div>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;
