import React from 'react';

const ProductDetail = ({ producto }) => {
  const { nombre, categoria, precio, stock, descripcion, img } = producto;

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={img} alt={nombre} />
      </div>
      <div className="product-info">
        <h2>{nombre}</h2>
        <p>Categoría: {categoria}</p>
        <p>Precio: ${precio}</p>
        <p>Stock disponible: {stock}</p>
        <p>Descripción: {descripcion}</p>
        {/* Aquí puedes agregar más detalles sobre el producto */}
      </div>
    </div>
  );
};

export default ProductDetail;





