import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

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
      imgLink: "http://openweathermap.org/img/wn/04d@2x.png",
      suggestion: "Remember to take your umbrella!",
    });
  }

  function search() {
    const apiKey = "a43564c91a6c605aeb564c9ed02e3858";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
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
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading data...";
  }
}
