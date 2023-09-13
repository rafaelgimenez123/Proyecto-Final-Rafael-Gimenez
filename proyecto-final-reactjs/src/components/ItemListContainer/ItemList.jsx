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
                    src="https://img.global.news.samsung.com/latin/wp-content/uploads/2023/06/Galaxy_S23_Ultra_Product_Image_Lavender-1-e1686754825826.jpg"
                    alt={item.name}
                  />
                </div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <p>{item.category}</p>
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
