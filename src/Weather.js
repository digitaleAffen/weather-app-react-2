import React, { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      currentDay: "Thursday",
      currentHour: "20:20",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      imgLink: "http://openweathermap.org/img/wn/04d@2x.png",
      suggestion: "Remember to take your umbrella!",
    });
  }

  if (weatherData.ready) {
    // todo
    return (
      <div ClassName="Today">
        <div className="Container project">
          <div className="card">
            <form id="city-form" className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a City..."
                    id="city-input"
                    className="form-control"
                    autocomplete="on"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="search"
                    className="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>

            <div className="row">
              <div className="col-5 city">
                <h2 id="greetings">
                  <i className="fa-solid fa-calendar-day"></i> Today in
                </h2>
                <h1>{weatherData.city}</h1>

                <img
                  src={weatherData.imgLink}
                  alt="cloudy day"
                  width="100"
                  className="float-left"
                  id="icon"
                />
              </div>

              <div className="col-4">
                <div className="today-temperature">
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>

                  <span className="units">
                    <span href="#" id="celsius-link" className="active">
                      °C
                    </span>{" "}
                    |
                    <span href="#" id="fahrenheit-link">
                      °F
                    </span>
                  </span>
                  <ul>
                    <li id="feels-like"></li>
                  </ul>
                </div>
              </div>
              <div className="col-3">
                <ul>
                  <li className="day">{weatherData.currentDay}</li>
                  <li>{weatherData.currentHour}</li>

                  <br />
                  <li>{weatherData.description}</li>
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}km/h</li>
                </ul>
              </div>
            </div>
            <h3>{weatherData.suggestion}</h3>
          </div>
          <h2 className="week">
            <i className="fa-solid fa-calendar-days"></i> Get ready for the Week
          </h2>

          <div className="weather-forecast d-block" id="forecast"></div>

          <div
            className="weather-forecast d-none"
            id="forecast-farenheit"
          ></div>

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
      </div>
    );
  } else {
    const apiKey = "a43564c91a6c605aeb564c9ed02e3858";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);

    return "Loading data...";
  }
}
