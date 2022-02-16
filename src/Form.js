import React, { useState } from "react";
import axios from "axios";
import WeatherCurrent from "./WeatherCurrent.js";
import LastRequest from "./LastRequest.js";

function Form(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState({ ready: false });

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeatherData(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      feel: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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

  if (weatherData.ready) {
    return (
      <div>
        <LastRequest />
        <form>
          <input
            type="text"
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
        <div class="footer">
          Coded by Alyson Felton
          <br />
          <a href="https://github.com/ADCeres/final-project-weather-app">
            https://github.com/ADCeres/final-project-weather-app
          </a>
          <br />
          *Sunrise/Sunset times are returned relative to end-user timestamp, not
          look-up city.
          <br />
          *Celcius and Fahrenheit converters are not operational yet.
        </div>
      </div>
    );
  } else {
    searchWeather();
    return "Sure wonder why this isn't working...!!";
  }
}

export default Form;
