// src/components/Candle.js
import React, { useState } from 'react';
import './Candle.css';

const Candle = ({ id, size, onExtinguish }) => {
  const [isLit, setIsLit] = useState(true);

  const handleToggle = () => {
    const newIsLit = !isLit;
    setIsLit(newIsLit);
    onExtinguish(id, newIsLit);
    console.log(`Candle ${id} toggled. Is lit: ${newIsLit}`);
  };

  return (
    <div className={`candle-body ${size}`} onClick={handleToggle}>
      <div className="candle-stick"></div>
      {isLit && <div className="candle-flames"></div>}
    </div>
  );
};

export default Candle;