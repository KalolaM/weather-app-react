import React, { useState } from "react";
import axios from "axios";

function App() {
  //const url ="api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=166b61f0bdfc53fb96fc96826179648c";

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>30°C</h1>
          </div>
          <div className="description">Clouds</div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>35°C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>10km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
