import React from 'react';
import '../styles/Card.css'; 

const Card = (props) => {
  const { title, image, description, price } = props; 

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-price">${price}</p>
        {/* botones, enlaces o cualquier otro contenido adicional? */}
      </div>
    </div>
  );
}

export default Card;
