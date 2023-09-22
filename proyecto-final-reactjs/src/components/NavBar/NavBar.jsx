import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h1 className="navbar-brand">
          <Link to="/" className="text-light">
            Aethernum Technology Store
          </Link>
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/category/smartphones">
                Teléfonos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/category/tablets">
                Tablets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light" to="/category/notebooks">
                Notebooks
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-text">
          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
