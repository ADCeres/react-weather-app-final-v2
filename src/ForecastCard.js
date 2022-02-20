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
    <div className="col-2">
      <span className="forecast-day">{getForecastLabel(props.data[0].dt)}</span>
      <div className="row">
        <div className="card-body">
          <p className="card-text subtext">
            <span id="forecast-emoji">
              <UpdateWeatherIcon data={props.data[0].weather[0].description} />
            </span>
            <br />
            <span id="forecast-desc">
              {props.data[0].weather[0].description}
            </span>
            <br />
            <span id="forecast-temp-max">
              {Math.round(props.data[0].temp.max)}°F
            </span>
            {"  "} |
            <span id="forecast-temp-min">
              {" "}
              {Math.round(props.data[0].temp.min)}°F
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
