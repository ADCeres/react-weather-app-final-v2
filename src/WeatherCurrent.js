import React from "react";
import UpdateSunTimes from "./UpdateSunTimes.js";
import UpdateWeatherIcon from "./UpdateWeatherIcon.js";

function WeatherCurrent(props) {
  return (
    <div>
      {" "}
      <h1 id="selected-city">{props.weather.city}</h1>
      <div className="row">
        <div className="col-1">
          <button className="converter" id="celsius">
            C
          </button>
          <button className="converter" id="fahrenheit">
            F
          </button>
        </div>

        <div className="col-3">
          <span id="cur-temp">{Math.round(props.weather.temperature)}°F</span>
          <br />
          <span className="sub-details">
            <span id="cur-temp-max">
              Feels: {Math.round(props.weather.feel)}°F
            </span>
            <span id="cur-temp-feel"></span>
          </span>
          <br />
          <span className="sub-details">
            <strong>
              <span className="cur-emoji-desc">
                {props.weather.description}
              </span>
            </strong>
          </span>
        </div>

        <div className="col-3">
          <br />
          <span id="cur-emoji">
            <UpdateWeatherIcon data={props.weather.description} />
          </span>
          <div className="row">
            <span id="cur-emoji-desc"></span>
          </div>
        </div>

        <div className="col-2">
          <div className="row categories">Wind:</div>
          <div className="row categories">Humidity:</div>
          <div className="row categories">Sunrise:</div>
          <div className="row categories">Sunset:</div>
        </div>

        <div className="col-3">
          <div className="row cat-results">
            <span id="wind">{Math.round(props.weather.wind)}mph</span>
          </div>
          <div className="row cat-results">
            <span id="humidity">{Math.round(props.weather.humidity)}%</span>
          </div>
          <div className="row cat-results">
            <span id="sunrise">
              <UpdateSunTimes data={props.weather.sunrise} />
            </span>
          </div>
          <div className="row cat-results">
            <span id="sunset">
              {" "}
              <UpdateSunTimes data={props.weather.sunset} />
            </span>
          </div>
        </div>
      </div>
      <hr className="hrNew" />
    </div>
  );
}

export default WeatherCurrent;
