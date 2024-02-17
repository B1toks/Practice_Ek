import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import MaterialUIColors from './MaterialUIColors';
import FlatUIColorsv1 from './FlatUIColorsv1';
import FlatUIColorsDutch from './FlatUIColorsDutch';
import FlatUIColorsAmerican from './FlatUIColorsAmerican';
import FlatUIColorsAussie from './FlatUIColorsAussie';
import FlatUIColorsBritish from './FlatUIColorsBritish';
import FlatUIColorsSpanish from './FlatUIColorsSpanish';
import FlatUIColorsIndian from './FlatUIColorsIndian';
import FlatUIColorsFrench from './FlatUIColorsFrench';

function App() {
  const [palettes, setPalettes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('palette.json')
      .then(response => response.json())
      .then(data => setPalettes(data))
      .catch(error => console.error('Error fetching palettes:', error));
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="route-animation" timeout={500}>
        <Routes location={location}>
          <Route path="/" element={<Home palettes={palettes} />} />
          <Route path="/material-ui-colors" element={<MaterialUIColors />} />
          <Route path="/flat-ui-colors-v1" element={<FlatUIColorsv1 />} /> 
          <Route path="/flat-ui-colors-dutch" element={<FlatUIColorsDutch />} />
          <Route path="/flat-ui-colors-american" element={<FlatUIColorsAmerican />} />
          <Route path="/flat-ui-colors-aussie" element={<FlatUIColorsAussie />} />
          <Route path="/flat-ui-colors-british" element={<FlatUIColorsBritish />} />
          <Route path="/flat-ui-colors-spanish" element={<FlatUIColorsSpanish />} />
          <Route path="/flat-ui-colors-indian" element={<FlatUIColorsIndian />} />
          <Route path="/flat-ui-colors-french" element={<FlatUIColorsFrench />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function Home({ palettes }) {
  return (
    <div className="palettes">
      {chunkArray(palettes, 3).map((paletteGroup, groupIndex) => (
        <div key={groupIndex} className="palette-group">
          {paletteGroup.map((palette, index) => (
            <Link
              key={index}
              to={
                palette.paletteName === 'Material UI Colors'
                  ? '/material-ui-colors'
                  : palette.paletteName === 'Flat UI Colors v1'
                  ? '/flat-ui-colors-v1'
                  : palette.paletteName === 'Flat UI Colors Dutch'
                  ? '/flat-ui-colors-dutch'
                  : palette.paletteName === 'Flat UI Colors American'
                  ? '/flat-ui-colors-american'
                  : palette.paletteName === 'Flat UI Colors Aussie'
                  ? '/flat-ui-colors-aussie'
                  : palette.paletteName === 'Flat UI Colors British'
                  ? '/flat-ui-colors-british'
                  : palette.paletteName === 'Flat UI Colors Spanish'
                  ? '/flat-ui-colors-spanish'
                  : palette.paletteName === 'Flat UI Colors Indian'
                  ? '/flat-ui-colors-indian'
                  : palette.paletteName === 'Flat UI Colors French'
                  ? '/flat-ui-colors-french'
                  : `/${palette.paletteName}`
              }
            >
              <div className="palette">
                <h2>{palette.paletteName}</h2>
                <div className="colors">
                  {chunkArray(palette.colors, 4).map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className="color-group">
                      {chunk.map((color, colorIndex) => (
                        <div key={colorIndex} className="color" style={{ backgroundColor: color.color }} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);

export default App;
