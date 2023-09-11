import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./ItemList.css";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2 className="loading">Cargando...</h2>;
  }

  return (
    <div className="card">
      <h1>Productos</h1>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item">
            <Link to={`/item/${item.id}`}>
              <Card style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://i.blogs.es/3339e4/img_1199/840_560.jpg" // URL de la imagen
                  alt={item.name}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>${item.price}</Card.Text>
                  <Card.Text>{item.category}</Card.Text>
                  <Link to={`/item/${item.id}`} className="btn btn-primary">
                    Ver Detalles
                  </Link>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
};

export default ItemList;
