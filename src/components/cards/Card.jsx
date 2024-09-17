import React from 'react';
import './Card.css';

function Card({ className, image, title, description, onButtonClick }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="card-button" onClick={onButtonClick}>
          Ver Más
        </button>
      </div>
    </div>
  );
}

export default Card;