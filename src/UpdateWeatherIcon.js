function UpdateWeatherIcon(props) {
  switch (props.data) {
    case "clouds":
      return "☁️";
      break;
    case "few clouds":
      return "☁️";
      break;
    case "broken clouds":
      return "☁️";
      break;
    case "overcast clouds":
      return "☁️";
      break;
    case "scattered clouds":
      return "☁️";
      break;
    case "rain":
      return "🌧";
      break;
    case "light rain":
      return "🌧";
      break;
    case "sunny":
      return "☀️";
      break;
    case "snow":
      return "❄️";
      break;
    case "storm":
      return "⛈";
      break;
    case "tornado":
      return "🌪";
      break;
    case "hail":
      return "🌨";
      break;
    case "fog":
      return "🌫";
      break;
    case "mist":
      return "🌫";
      break;
    case "extreme":
      return "❗";
      break;
    case "windy":
      return "💨";
      break;
    case "clear":
      return "☀️";
      break;
    case "clear sky":
      return "☀️";
      break;
    default:
      return "❗";
      break;
  }
}

export default UpdateWeatherIcon;
