import PropTypes from "prop-types";
import { useContext  } from "react";
import "./ItemList.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from "../../context/CartContext";

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!item) {
    return <h2>No encontrado</h2>;
  }

  return (
    <div  style={{ width: "18rem" }}>
      <img
        src="https://img.global.news.samsung.com/latin/wp-content/uploads/2023/06/Galaxy_S23_Ultra_Product_Image_Lavender-1-e1686754825826.jpg"
        alt={item.name}
        
      />
      <div>
        <h1>{item.name}</h1>
        <p>${item.price}</p>
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
  addItem: propTypes.func
};

export default ItemDetail;