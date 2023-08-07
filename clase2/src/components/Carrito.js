import React, { useState } from 'react';

const Carrito = () => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Calcular el total de la compra
  const calculateTotal = () => {
    return cartItems.reduce((total, product) => total + product.precio, 0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.nombre} - ${item.precio}</li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
          {/* Agregar botones para finalizar la compra u otras acciones */}
        </div>
      )}
    </div>
  );
};

export default Carrito;
