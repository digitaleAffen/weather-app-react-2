import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{" "}
          <a href="#" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(farenheit())}</span>
        <span className="units">
          <a
            href="#"
            onClick={showCelsius}
            id="celsius-link"
            // className="active"
          >
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
