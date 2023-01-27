import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Suggestion from "./Suggestion";

export default function WeatherInfo(props) {
  // console.log(props.data);
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
              <li>Real Feel: {Math.round(props.data.feels)}°</li>
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
            <li>
              <i class="fa-solid fa-droplet"></i> Humidity:{" "}
              {props.data.humidity}%
            </li>
            <li>
              <i class="fa-solid fa-wind"></i> Wind: {props.data.wind}km/h
            </li>
          </ul>
        </div>

        <h3>
          <Suggestion celsius={props.data.temperature} />
        </h3>
      </div>
    </div>
  );
}
