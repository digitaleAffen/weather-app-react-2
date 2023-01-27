import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDayMetric(props) {
  // Forecast Temperature Celsius
  function minTempMetric() {
    let temperatureMetric = Math.round(props.forecastData.temp.min);
    return `${temperatureMetric}°`;
  }

  function maxTempMetric() {
    let temperatureMetric = Math.round(props.forecastData.temp.max);
    return `${temperatureMetric}°`;
  }

  function forecastDay() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weatherForecats-day">{forecastDay()}</div>
      <WeatherIcon code={props.forecastData.weather[0].icon} size={36} />
      <div className="weatherForecast-temp">
        <span className="weatherForecast-temp-min">{minTempMetric()} | </span>
        <strong className="weatherForecast-temp-max">{maxTempMetric()} </strong>
      </div>
    </div>
  );
}
