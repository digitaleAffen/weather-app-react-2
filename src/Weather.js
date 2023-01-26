import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import logo from "./logo.svg";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      suggestion: "Remember to take your umbrella!",
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "47197b56a0c0163cd5fa08701bd89102";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    // todo
    return (
      <div className="Today">
        <div className="Container project">
          <div className="card">
            <form onSubmit={handleSubmit} className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a City..."
                    id="city-input"
                    className="form-control"
                    autoComplete="on"
                    onChange={updateCity}
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
            <WeatherInfo data={weatherData} />
          </div>{" "}
          <h2 className="week">
            <i className="fa-solid fa-calendar-days"></i> Get ready for the Week
          </h2>
          <div className="card">
            <WeatherForecast coordinates={weatherData.coordinates} />
          </div>
          <footer>
            Coded by
            <strong> Gio Lamadrid </strong>
            <a
              href="https://github.com/digitaleAffen/weather-app-react-2"
              target="_blank"
              rel="noreferrer"
            >
              open-sourse on GitHub
            </a>
            <img src={logo} className="App-logo" alt="logo" width="40px" />
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading data...";
  }
}
