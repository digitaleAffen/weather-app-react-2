import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function minTemp() {
    let temperature = Math.round(props.forecastTemp.temp.min);
    return `${temperature}°`;
  }

  function maxTemp() {
    let temperature = Math.round(props.forecastTemp.temp.max);
    return `${temperature}°`;
  }

  function forecastDay() {
    let date = new Date(props.forecastTemp.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weatherForecats-day">{forecastDay()}</div>
      <WeatherIcon code={props.forecastTemp.weather[0].icon} size={36} />
      <div className="weatherForecast-temp">
        <span className="weatherForecast-temp-min">{minTemp()} | </span>
        <strong className="weatherForecast-temp-max">{maxTemp()} </strong>
      </div>
    </div>
  );
}
