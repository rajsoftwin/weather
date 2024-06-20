// src/WeatherDisplay.js
import React from 'react';

function WeatherDisplay({ data }) {
  return (
    <div className="weather-display">
      <h2>{data.name}</h2>
      <div className="weather-info">
        <p>Temperature: {data.main.temp}°C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
        <p>Description: {data.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="weather icon"
        />
      </div>
    </div>
  );
}

export default WeatherDisplay;
