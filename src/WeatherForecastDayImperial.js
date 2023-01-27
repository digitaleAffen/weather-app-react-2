import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDayMetric(props) {
  // Forecast Temp Fahrenheit
  function minTempImperial() {
    let temperatureImperial = Math.round(
      (props.forecastData.temp.min * 9) / 5 + 32
    );
    return `${temperatureImperial}°`;
  }

  function maxTempImperial() {
    let temperatureImperial = Math.round(
      (props.forecastData.temp.max * 9) / 5 + 32
    );
    return `${temperatureImperial}°`;
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
        <span className="weatherForecast-temp-min">{minTempImperial()} | </span>
        <strong className="weatherForecast-temp-max">
          {maxTempImperial()}{" "}
        </strong>
      </div>
    </div>
  );
}
