import PropTypes from "prop-types";
import { useContext } from "react";
import "./ItemList.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "../../context/CartContext";

const ItemDetail = ({ item, isLoading }) => {
  const { addItem } = useContext(CartContext);

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
    <p>{item.price}</p>
    <p>{item.categoryId}</p>
    <p>{item.description}</p>
    <button className="btn btn-primary btn-lg" onClick={() => addItem(item, 1)}>Agregar al carrito</button>
  </div>
</div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;
