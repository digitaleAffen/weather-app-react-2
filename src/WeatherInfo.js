import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-5 city">
          <h2 id="greetings">
            <i className="fa-solid fa-calendar-day"></i> Today in
          </h2>
          <h1>{props.data.city}</h1>
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={72} />
          </div>
        </div>

        <div className="col-4">
          <div className="today-temperature">
            <WeatherTemperature celsius={props.data.temperature} />

            <ul>
              <li id="feels-like"></li>
            </ul>
          </div>
        </div>

        <div className="col-3">
          <ul>
            <li>
              <CurrentDate date={props.data.date} />
            </li>

            <br />
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>

        <h3>{props.data.suggestion}</h3>
      </div>
    </div>
  );
}
