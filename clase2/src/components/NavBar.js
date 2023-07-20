import React from 'react';
// import '../styles/NavBar.css'; // Importamos nuestro archivo de estilos personalizados. Neutralizamos para que funcione Bulma.

const Navbar = () => {
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="/public/TOL fondo.jpg" alt="Logo de la tienda" width="112" height="28" />
          </a>
          <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Inicio
            </a>
            <a className="navbar-item" href="/categorias">
              Registrarse
            </a>
            <a className="navbar-item" href="/categorias">
              Visitá la carta!
            </a>
            <a className="navbar-item" href="/categorias">
              Productos
            </a>
            <a className="navbar-item" href="/contacto">
              Contacto
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <img src="/public/carrito.jpg" alt="Logo del carrito" className="carrito-img" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

