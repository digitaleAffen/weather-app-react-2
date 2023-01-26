import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "a43564c91a6c605aeb564c9ed02e3858";
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

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
