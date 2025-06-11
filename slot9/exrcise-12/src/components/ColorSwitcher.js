import React, { useState } from "react";

function ColorSwitcher() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <h3>Color Switcher</h3>
      <select onChange={(e) => setColor(e.target.value)} value={color}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        className="color-box"
        style={{
          backgroundColor: color,
        }}
      >
        Background: {color}
      </div>
    </div>
  );
}

export default ColorSwitcher;
