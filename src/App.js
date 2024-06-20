import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import WeatherDisplay from './component/weather.js';
import searchbar from './component/searchbar.js';

// import { useState } from 'react';

function App() {
  // console.log("raja");

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.APIKEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('Location find failed');
    }
  };

}


  function showWeatherData(){

  }

export default App;