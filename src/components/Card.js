// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ message, photos }) => {
  return (
    <div className="card">
      <div className="message">
        {message}
      </div>
      <div className="photos">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Photo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Card;