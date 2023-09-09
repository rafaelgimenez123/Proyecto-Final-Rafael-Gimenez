import PropTypes from "prop-types";
import "./ItemList.css";


const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!item) {
    return <h2>No encontrado</h2>;
  }

  return (
    <div className="Item_Detail">
      <h1>{item.name}</h1>
      <p className="Item_Price">${item.price}</p>
      <p>{item.category}</p>
      <p>{item.description}</p>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;