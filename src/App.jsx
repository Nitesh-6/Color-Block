import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/288760fc-f055-4bf7-bcb1-bda5157bfef3")
      .then((response) => {
        setColors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleBlockClick = (index) => {
    const clickedColor = colors[index];
    document.body.style.backgroundColor = clickedColor;
    setColors((prevState) => prevState.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      {colors &&
        colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleBlockClick(index)}
            className="block"
            style={{ backgroundColor: color }}
          />
        ))}
      {!colors.length && <p>No colors found.</p>}
    </div>
  );
}
