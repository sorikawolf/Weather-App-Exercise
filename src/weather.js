function submitCity(event) {
  event.preventDefault();
  let cityTitle = document.querySelector("#current-city");
  let cityInputElement = document.querySelector("#city-input");
  cityTitle.innerHTML = cityInputElement.value;
}

let searchFormElement = document.querySelector("#weather-search-form");
searchFormElement.addEventListener("submit", submitCity);
