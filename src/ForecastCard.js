import React from "react";
import UpdateWeatherIcon from "./UpdateWeatherIcon.js";

function ForecastCard(props) {
  return (
    <div className="col-2">
      <span className="forecast-day">
        {getForecastLabel(props.data.forecast[0].dt)}
      </span>
      <div className="row">
        <div className="card-body">
          <p className="card-text subtext">
            <span id="forecast-emoji">
              <UpdateWeatherIcon
                data={props.data.forecast[0].weather[0].description}
              />
            </span>
            <br />
            <span id="forecast-desc">
              {props.data.forecast[0].weather[0].description}
            </span>
            <br />
            <span id="forecast-temp-max">
              {Math.round(props.data.forecast[0].temp.max)}°F
            </span>
            {"  "} |
            <span id="forecast-temp-min">
              {" "}
              {Math.round(props.data.forecast[0].temp.min)}°F
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
