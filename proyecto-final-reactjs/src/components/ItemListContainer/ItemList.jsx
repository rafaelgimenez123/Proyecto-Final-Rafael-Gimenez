// ItemList.jsx

import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return <h2 className="loading">Cargando...</h2>;
  }

  return (
    <div className="item-list-container">
      <h1>Productos</h1>
      <div className="item-list">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <Link to={`/item/${item.id}`}>
              <div className="item-content">
                <div className="item-image">
                  <img
                    src={item.imageId}
                    alt={item.name}
                  />
                </div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  items: propTypes.array.isRequired,
  isLoading: propTypes.bool,
};

export default ItemList;
