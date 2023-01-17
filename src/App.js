import React, { useState, useEffect } from 'react';
import './App.css';

const images = require.context('./images', true);
const imageKeys = images.keys();

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState([]);

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * imageKeys.length);
    while (displayedImages.includes(randomIndex)) {
      randomIndex = Math.floor(Math.random() * imageKeys.length);
    }
    setDisplayedImages([...displayedImages, randomIndex]);
    setCurrentImageIndex(randomIndex);
  }, []);

  useEffect(() => {
  if (displayedImages.length === imageKeys.length) {
    setDisplayedImages([]);
  }
}, [displayedImages]);


  return (
    <div className="app-container">
      <img
        className="centered-image"
        src={images(imageKeys[currentImageIndex])}
        alt=""
      />
    </div>
  );
};

export default App;
