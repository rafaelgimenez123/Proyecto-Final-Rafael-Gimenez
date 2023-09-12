import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import "../NavBar/NavBar.css";
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="nav">
        <h1 className="logo">
          <Link to="/">Samsung de la salada store</Link>
        </h1>

        <ul className="nav-list">
          <li className="li_nav">
            <NavLink to="/category/phones">Teléfonos</NavLink>
          </li>
          <li className="li_nav">
            <NavLink to="/category/tablets">Tablets</NavLink>
          </li>
          <li className="li_nav">
            <NavLink to="/category/notebooks">Notebooks</NavLink>
          </li>
          <li className="li_nav">
            <NavLink to="/cart"><CartWidget></CartWidget></NavLink>
          </li>
        </ul>
      </nav>

      <div className="cart-widget">
        <CartWidget></CartWidget>
      </div>
    </div>
  );
};

export default Navbar;