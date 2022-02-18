import React, { useState } from "react";
import axios from "axios";
import UpdateWeatherIcon from "./UpdateWeatherIcon.js";

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
    console.log(response);
    setLoaded(true);
    setForecast(response.data.daily);
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
        <div className="col-2">
          <span className="forecast-day">
            {getForecastLabel(forecast[0].dt)}
          </span>
          <div className="row">
            <div className="card-body">
              <p className="card-text subtext">
                <span id="forecast-emoji">
                  <UpdateWeatherIcon
                    data={forecast[0].weather[0].description}
                  />
                </span>
                <br />
                <span id="forecast-desc">
                  {forecast[0].weather[0].description}
                </span>
                <br />
                <span id="forecast-temp-max">
                  {Math.round(forecast[0].temp.max)}°F
                </span>
                {"  "} |
                <span id="forecast-temp-min">
                  {" "}
                  {Math.round(forecast[0].temp.min)}°F
                </span>
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  } else {
    searchForecast();
    return "Is this working? Guess not...";
  }
}

export default WeatherForecast;
