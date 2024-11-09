import React from 'react';
import './Card.css';

function Card({ className, image, title, subtitle,description, onButtonClick }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-image-div">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
        <button className="card-button" onClick={onButtonClick}>
          Ver Más
        </button>
      </div>
    </div>
  );
}

export default Card;
