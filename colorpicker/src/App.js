import React, { useState } from 'react';
import './App.css';

function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showColorList, setShowColorList] = useState(false);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <button onClick={handleButtonClick}>Pick a color</button>
      {showColorList && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              onClick={() => handleColorClick(color)}
              style={{ backgroundColor: color }}
            ></li>
          ))}
        </ul>
      )}
      {selectedColor && (
        <p>Selected Color: <span style={{ backgroundColor: selectedColor }}>{selectedColor}</span></p>
      )}
    </div>
  );
}

function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;

