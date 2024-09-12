import React, { useState, useEffect } from 'react';
import Candle from './Candle';
import Card from './Card';
import SolarSystem from './SolarSystem';
import './Cake.css';
import './Popup.css';
import Photoa from './gres1.jpg';
import Photob from './gres2.jpg';
import Photoc from './gres3.jpg'

// Define candle sizes
const leftCandleSizes = ['largest', 'large', 'medium', 'medium', 'mid', 'mid', 'small', 'small', 'smaller'];
const centerCandleSize = ['largest'];
const rightCandleSizes = ['smaller','small', 'small', 'mid', 'mid', 'medium', 'medium', 'large', 'largest'];

const Cake = () => {
  const [extinguishedCandles, setExtinguishedCandles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showSolarSystem, setShowSolarSystem] = useState(false);

  const handleExtinguish = (id, isLit) => {
    setExtinguishedCandles(prev => {
      if (isLit) {
        return prev.filter(candleId => candleId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  useEffect(() => {
    if (extinguishedCandles.length === 19) {
      setShowSolarSystem(true);
    }
  }, [extinguishedCandles]);

  const handleSolarSystemComplete = () => {
    setShowSolarSystem(false);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (showSolarSystem) {
    return <SolarSystem onComplete={handleSolarSystemComplete} />;
  }

  return (
    <div className="cake">
      <div className="segment left">
        {leftCandleSizes.map((size, index) => (
          <div key={index} className="small-segment">
            <Candle id={index} size={size} onExtinguish={handleExtinguish} />
          </div>
        ))}
      </div>
      <div className="segment center">
        {centerCandleSize.map((size, index) => (
          <Candle key={index + 8} id={index + 8} size={size} onExtinguish={handleExtinguish} />
        ))}
      </div>
      <div className="segment right">
        {rightCandleSizes.map((size, index) => (
          <div key={index + 9} className="small-segment">
            <Candle id={index + 9} size={size} onExtinguish={handleExtinguish} />
          </div>
        ))}
      </div>
      {showPopup && (
        <div className={`popup-wrap ${showPopup ? 'show-popup' : ''}`}>
          <div className="popup-box">
            <div className="popup-content">
              <h2>SELAMAT ULANG TAHUN GRESMAWARRENESS SAYANG!</h2>
              <p>Semoga semua harapanmu menjadi kenyataan.</p>
              <Card 
                message="Selamat ulang tahun ke-19 sayangkuu gres sayangg! semoga di umur yang mendekati kepala dua sayang semakin sehat walaupun banyak kerjaan. Semoga sayang semakin sukse karir kedepannya. Wish you all the best in your life. Semoga sayang tambah cakep di semester ini. ohiya! semoga sayang dapet beasiswa di umur ini amiiin.
                
                Sayang harus tau, aku pasti ada di samping sayang. Sesibuk apapun jadwal kita, yang pasti aku akan di sana buat sayang. I am too, will always be by your side sayang. nantikan hadiah-hadiah sayang besok yaww >U<" 
                photos={[Photob, Photoa, Photoc]} 
              />
              <button className="popup-close" onClick={closePopup}>Tutup</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cake;