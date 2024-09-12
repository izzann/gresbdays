// src/App.js
import React, { useState } from 'react';
import Cake from './components/Cake';
import Card from './components/Card';
import './App.css';

function App() {
  const [showCard, setShowCard] = useState(false);

  const handleAllCandlesExtinguished = () => {
    setShowCard(true);
  };

  return (
    <div className="App">
      {!showCard ? (
        <Cake onAllCandlesExtinguished={handleAllCandlesExtinguished} />
      ) : (
        <Card
          message="Selamat Ulang Tahun, Sayang! Make a wish!"
          photos={['photo1.jpg', 'photo2.jpg', 'photo3.jpg']}
        />
      )}
    </div>
  );
}

export default App;