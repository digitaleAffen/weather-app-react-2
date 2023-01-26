import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  // para cambiar los datos del forecast una vez se busca una nueva ciudad, en React se utiliza UseEffect
  useEffect(
    () => {
      setLoaded(false);
      // {set loaded false}
    },
    [props.coordinates]
    //[if the coordinates change]
  );

  //goal: {set loaded false} => [if the coordinates change]
  // [if the coordinates change] [input]: this is an array of variables, that I will tell to react to trigger the {other} code if this one change.
  // {set loaded false}

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
    console.log(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay forecastData={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "73a00877081bd43422bdee0f3022beb5";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
