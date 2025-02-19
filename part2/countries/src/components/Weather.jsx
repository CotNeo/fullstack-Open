/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import weatherService from "../services/weatherService";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (capital) {
      weatherService.getWeather(capital).then(setWeather);
    }
  }, [capital]);

  return weather ? (
    <div className="weather">
      <h3>Weather in {capital}</h3>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Wind: {weather.wind.speed} m/s</p>
      <img 
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
        alt={weather.weather[0].description}
      />
    </div>
  ) : (
    <p>Loading weather data...</p>
  );
};

export default Weather;


