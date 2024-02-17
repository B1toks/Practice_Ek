import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function FlatUIColorsIndian() {
  const [flatUIColorsIndianPalette, setFlatUIColorsIndianPalette] = useState(null);

  useEffect(() => {
    fetch('palette.json')
      .then(response => response.json())
      .then(data => {
        const foundPalette = data.find(palette => palette.paletteName === 'Flat UI Colors Indian');
        setFlatUIColorsIndianPalette(foundPalette);
      })
      .catch(error => console.error('Error fetching palettes:', error));
  }, []);

  const playSound = (soundUrl) => {
    const audio = new Audio(soundUrl);
    audio.play()
      .then(() => {
        console.log('Sound is playing');
      })
      .catch(error => console.error('Error playing sound:', error));
  };

  const copyColorCodeToClipboard = (colorCode) => {
    // Копіюємо код кольору в буфер обміну
    navigator.clipboard.writeText(colorCode)
      .then(() => {
        // Створюємо div для оверлею
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = colorCode;
        overlay.style.opacity = '0.7';
        overlay.style.zIndex = '9999';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.color = '#fff';
        overlay.style.fontSize = '24px';
        overlay.style.textAlign = 'center';
        overlay.style.padding = '20px';
        overlay.style.boxSizing = 'border-box';
        overlay.style.transition = 'opacity 0.7s ease-in-out';

        // Додаємо оверлей до body
        document.body.appendChild(overlay);

        // Звуковий ефект
        const soundUrl = 'src_notify.mp3';
        playSound(soundUrl);

        const randomPhrases = [
          "Way to go!",
          "Great job!",
          "You nailed it!",
          "Fantastic!",
          "You're awesome!"
        ];

        // Вибір випадкової фрази
        const randomIndex = Math.floor(Math.random() * randomPhrases.length);
        const randomPhrase = randomPhrases[randomIndex];

        // Додавання випадкової фрази до тексту оверлею
        const phraseElement = document.createElement('div');
        phraseElement.style.fontSize = '36px';
        phraseElement.textContent = randomPhrase;
        overlay.appendChild(phraseElement);

        // Додавання інформації про копіювання кольору
        const infoElement = document.createElement('div');
        infoElement.textContent = `Color code "${colorCode}" copied to clipboard!`;
        overlay.appendChild(infoElement);

        setTimeout(() => {
          // Зменшуємо прозорість оверлею
          overlay.style.opacity = '0';
        
          // Після затухання видаляємо оверлей
          setTimeout(() => {
            document.body.removeChild(overlay);
          }, 500); // Почекайте, поки закінчиться анімація затухання (0.5 секунди)
        }, 3000); // Почекайте 3 секунди перед затуханням
      })
      .catch(error => console.error('Error copying color code:', error));
};

  if (!flatUIColorsIndianPalette) {
    return <div>Loading...</div>;
  }

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
  
  const groupedColors = chunkArray(flatUIColorsIndianPalette.colors, 4);

  return (
    <div className="palette-page">
      <h3>{flatUIColorsIndianPalette.paletteName}</h3>
      {groupedColors.map((group, groupIndex) => (
        <div key={groupIndex} className="color-group2">
          {group.map((color, colorIndex) => (
            <ColorBlock key={colorIndex} color={color} onClick={() => copyColorCodeToClipboard(color.color)} />
          ))}
        </div>
      ))}
      {/* Посилання для повернення назад */}
      <div className="but_back">
        <div className="button"><Link to="/">Go Back</Link></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
          <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC" />
        </svg>
      </div>
    </div>
  );
}

function ColorBlock({ color }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="color2"
      style={{ backgroundColor: color.color }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      
      <span className="color_name">{color.name}</span>
      {/* Показ дівбоксу при ховері */}
      {showTooltip && (
        <div className="tooltip">
          <img src = "./img/pngegg.png" className = "imagetyan" alt="tooltip-img"></img>
        </div>
      )}
    </div>
  );
}

export default FlatUIColorsIndian;
