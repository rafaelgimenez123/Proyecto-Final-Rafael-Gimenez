import PropTypes from "prop-types";
import "./ItemList.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({ item, isLoading }) => {
  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  if (!item) {
    return <h2>No encontrado</h2>;
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://img.global.news.samsung.com/latin/wp-content/uploads/2023/06/Galaxy_S23_Ultra_Product_Image_Lavender-1-e1686754825826.jpg"
        alt={item.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h1 className="card-title">{item.name}</h1>
        <p className="card-text">${item.price}</p>
        <p className="card-text">{item.category}</p>
        <p>{item.description}</p>
        <button className="btn btn-primary btn-lg"  onClick={AddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default ItemDetail;