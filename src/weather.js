function displayWeather(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temp-value");
  let temperature = Math.round(response.data.temperature.current);

  let cityTitle = document.querySelector("#current-city");
  cityTitle.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;

  let descriptionElement = document.querySelector("#weather-description");
  let description = response.data.condition.description;
  descriptionElement.innerHTML = `${description}`;

  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  humidityElement.innerHTML = `<strong>${humidity}%</strong>`;

  let windElement = document.querySelector("#wind-speed");
  let windSpeed = response.data.wind.speed;
  windElement.innerHTML = `<strong>${windSpeed} km/hr</strong>`;

  let iconElement = document.querySelector("#temp-icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" alt="Weather Icon" />`;

  getForecast(response.data.city);
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

let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayElement = document.querySelector("#current-day");
dayElement.innerHTML = `${days[date.getDay()]}`;

let timeElement = document.querySelector("#time");
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
timeElement.innerHTML = `${hours}:${minutes}`;

function getForecast(city) {
  let apiKey = "357affaact442eeoc3f4199173062fb9";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);

  let forecastDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let forecastHtml = "";

  forecastDays.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="forecast-date">
            <div class="forecast-day">${day}</div>
            <div class="forecast-icon">❄</div>
            <div class="forecast-temp">
              <div class="high">11°</div>
              <div class="low">5°</div>
            </div>
          </div>`;
  });
  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}

searchCity("Quebec");
