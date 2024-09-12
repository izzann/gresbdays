import React, { useState, useEffect } from 'react';
import './SolarSystem.css';

const SolarSystem = ({ onComplete }) => {
  const [showDate, setShowDate] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Start the earth rotation
    const rotationTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 5000);

    // Show the date with a delay
    const dateTimer = setTimeout(() => {
      setShowDate(true);
    }, 5500); // 0.5 second after the rotation completes

    return () => {
      clearTimeout(rotationTimer);
      clearTimeout(dateTimer);
    };
  }, []);

  const handleEarthClick = () => {
    if (animationComplete) {
      onComplete();
    }
  };

  return (
    <div className="solar-system">
      <div className="sun"></div>
      <div className="orbit">
        <div 
          className={`earth ${animationComplete ? 'animation-complete' : ''}`} 
          onClick={handleEarthClick}
        >
          <div className="moon"></div>
        </div>
      </div>
      <div className={`date-indicator ${showDate ? 'show' : ''}`}>
        <div className="arrow"></div>
        <span>13th September</span>
      </div>
    </div>
  );
};

export default SolarSystem;