function displayWeather(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temp-value");
  let temperature = Math.round(response.data.temperature.current);

  let cityTitle = document.querySelector("#current-city");
  cityTitle.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function searchCity(city) {
  let apiKey = "357affaact442eeoc3f4199173062fb9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function submitCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");

  searchCity(cityInputElement.value);
}

let searchFormElement = document.querySelector("#weather-search-form");
searchFormElement.addEventListener("submit", submitCity);

searchCity("Quebec");
