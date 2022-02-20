import React from "react";
import axios from "axios";
import UpdateWeatherIcon from "./UpdateWeatherIcon.js";

function WeatherCard(props) {
  console.log(props);

  function getForecastLabel(props) {
    let date = new Date(props * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  return (
    <div className="row">
      {" "}
      <span className="forecast-day">{getForecastLabel(props.data.dt)}</span>
      <div className="card-body">
        <p className="card-text subtext">
          <span id="forecast-emoji">
            <UpdateWeatherIcon data={props.data.weather[0].description} />
          </span>
          <br />
          <span id="forecast-desc">{props.data.weather[0].description}</span>
          <br />
          <span id="forecast-temp-max">
            {Math.round(props.data.temp.max)}°F
          </span>
          {"  "} |
          <span id="forecast-temp-min">
            {" "}
            {Math.round(props.data.temp.min)}°F
          </span>
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
