import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import tolFondo from '../images/TOL fondo.jpg';

const Navbar = ({ cartItemCount }) => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={tolFondo} alt="Logo de la tienda" width="60" height="60" />
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* Resto del código... */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <CartWidget itemCount={cartItemCount} />
            </div>
            <div className="navbar-item">
              <Link to="/carrito" className="button is-link">
                Ir al Carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
