import React, { useState } from "react";
import axios from "axios";
import UpdateWeatherIcon from "./UpdateWeatherIcon.js";
import ForecastCard from "./ForecastCard.js";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  let lon = props.weather.longitude;
  let lat = props.weather.latitude;

  function getForecastLabel(props) {
    let date = new Date(props * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function getForecastData(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(forecast);
  }

  function searchForecast() {
    let apiKey = `a20670b64f2243817bd352afb3a3d0b5`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts&units=imperial&appid=${apiKey}`;
    axios.get(apiUrl).then(getForecastData);
  }

  if (loaded) {
    return (
      <div>
        <h2>6 Day Forecast</h2>
        <div className="row">
          <div className="col-2">
            <ForecastCard data={forecast[0]} />
          </div>
          <div className="col-2">
            <ForecastCard data={forecast[1]} />
          </div>
          <div className="col-2">
            <ForecastCard data={forecast[2]} />
          </div>
          <div className="col-2">
            <ForecastCard data={forecast[3]} />
          </div>
          <div className="col-2">
            <ForecastCard data={forecast[4]} />
          </div>
          <div className="col-2">
            <ForecastCard data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    searchForecast();
    return "Loading Weather Information...";
  }
}

export default WeatherForecast;
