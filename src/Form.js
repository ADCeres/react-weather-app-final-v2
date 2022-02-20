import React, { useState } from "react";
import axios from "axios";
import WeatherCurrent from "./WeatherCurrent.js";
import WeatherForecast from "./WeatherForecast.js";
import LastRequest from "./LastRequest.js";

function Form(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  console.log(weatherData);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeatherData(response) {
    setWeatherData({
      loaded: true,
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      temperature: response.data.main.temp,
      feel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
    });
  }

  function searchWeather() {
    let apiKey = `a20670b64f2243817bd352afb3a3d0b5`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(getWeatherData);
  }

  function handleQuery(response) {
    response.preventDefault();
    searchWeather();
  }

  if (weatherData.loaded) {
    return (
      <div>
        <LastRequest />
        <form>
          <input
            type="search"
            placeholder="Enter Name of City Here"
            id="entry-line"
            autoFocus="on"
            autoComplete="off"
            onChange={updateCity}
          />
          <input
            type="submit"
            value="Search"
            id="submit-button"
            onClick={handleQuery}
          />
        </form>
        <WeatherCurrent weather={weatherData} />
        <WeatherForecast weather={weatherData} />
        <div className="footer">
          Coded by Alyson Felton
          <br />
          <a href="https://github.com/ADCeres/react-weather-app-final-v2">
            https://github.com/ADCeres/react-weather-app-final-v2
          </a>
          <br />
          *Sunrise/Sunset times are returned relative to end-user timestamp, not
          look-up city.
        </div>
      </div>
    );
  } else {
    searchWeather();
    return "I sure wish this would stop repeating 4+ times!!";
  }
}

export default Form;
