import React from "react";
import logo from "./logo.svg";
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
            <WeatherIcon code={props.data.icon} />
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

      <h2 className="week">
        <i className="fa-solid fa-calendar-days"></i> Get ready for the Week
      </h2>

      <div className="weather-forecast d-block" id="forecast"></div>

      <div className="weather-forecast d-none" id="forecast-farenheit"></div>
      {/* </div> */}

      <footer>
        Coded by
        <strong> Gio Lamadrid </strong>
        <a
          href="https://github.com/digitaleAffen/weather-app-react-2"
          target="_blank"
        >
          open-sourse on GitHub
        </a>
        <img src={logo} className="App-logo" alt="logo" width="40px" />
      </footer>
    </div>
  );
}
