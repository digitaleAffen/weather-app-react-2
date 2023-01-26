import React from "react";
import "./Weather.css";

export default function CurrentDate(props) {
  // Current Day
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  // Current Hour
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  //Current Minutes
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      <span className="day">{day},</span>
      <br />
      {hours}:{minutes} h
    </div>
  );
}
