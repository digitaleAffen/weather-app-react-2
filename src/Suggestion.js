export default function WeatherMessage(props) {
  let celsius = props.celsius;
  //   console.log(celsius);

  if (celsius > 30) {
    return "OMG It's warm 🥵 Remember to use sunscreen.";
  } else if (celsius < 29 && celsius > 17) {
    return "Beatiful day 🤠 Most people consider this temperature ideal.";
  } else if (celsius < 16 && celsius > 4) {
    return "Cool 😊 With a light jacket or sweater you will be fine.";
  } else if (celsius < 16 && celsius > 4) {
    return "It's chilly 🤔 Jacket or sweater is recommended.";
  } else if (celsius < 3 && celsius > -3) {
    return "It's cold in here 🥶 Remember to wear a coat and a hat. Also consider pack your gloves and a scarf.";
  } else if (celsius < -4 && celsius > -12) {
    return "Brr 🥶 It's freezing in here. Coat, hat, gloves and a scarf are appropriate.";
  } else if (celsius < -13) {
    return "Brr 🥶 Caution advised. Limited outdoor activity recommended. Wear winter clothing that covers as much of the body as possible.";
  } else {
    return "Have a nice day! 😊";
  }
}
