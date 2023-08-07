import React, { useState } from 'react';
import '../styles/Card.css';

const Card = ({ producto }) => {
  const { nombre, categoria, precio, stock, descripcion, img } = producto;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={nombre} className="product-image" />
      </div>
      <div className="card-content">
        <h2 className="title">{nombre}</h2>
        <p className="category">{categoria}</p>
        <p className="price">${precio}</p>
        <p className="stock">Stock: {stock}</p>
        {showDescription && <p className="description">{descripcion}</p>}
        <button onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? "Ocultar detalle" : "Ver detalle"}
        </button>
      </div>
    </div>
  );
};

export default Card;
