import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./ItemList.css";
import Loading from "../Loading/Loading";

const ItemList = ({ items, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="mt-5">Productos</h1>
      <div className="row">
        {items.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <Link to={`/item/${item.id}`} className="text-decoration-none text-dark">
              <div className="card hoverable" style={{ height: "100%" }}>
                <img
                  src={item.imageId}
                  alt={item.name}
                  className="card-img-top"
                  style={{ objectFit: "cover", height: "100%" }}
                />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text display-6">${item.price}</p>
                </div>
              </div>
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
