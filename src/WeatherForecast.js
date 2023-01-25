import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="weatherForecats-day">
            Wed
            <div />
            <WeatherIcon code="01d" size={36} />
            <div className="weatherForecast-temp">
              <span className="weatherForecast-temp-min">4° | </span>
              <strong className="weatherForecast-temp-max">12°</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
