const API_KEY = "3HR5DA4DZCGWQ9VYLSBUUANTV";
const QUERY_BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const localeInput = document.querySelector("#locale");
const goBtn = document.querySelector("#goBtn");
const weatherContainer = document.querySelector(".weather-container");
const cityDisp = document.querySelector(".city");
const countryDisp = document.querySelector(".country");
const tempDisp = document.querySelector(".temp");
const conditionsDisp = document.querySelector(".conditions");
const humidityDisp = document.querySelector(".humidity");
const descDisp = document.querySelector(".desc");
const tempType = document.querySelector("#temp-type");
let currData = {};

function processData(data) {
  let fullAdress = data.resolvedAddress.split(", ");
  let processedData = {
    city: fullAdress[0],
    country: fullAdress.at(-1),
    description: data.description,
    fahrenheit: data.currentConditions.temp,
    celcius: toCelsius(data.currentConditions.temp),
    conditions: data.currentConditions.conditions,
    humidity: data.currentConditions.humidity,
  };
  currData = processedData;
  return processedData;
}

function toCelsius(temp) {
  return Math.floor(((temp - 32) * 5) / 9);
}

async function getWeatherIn(location) {
  const apiUrl = `${QUERY_BASE_URL}${location}?key=${API_KEY} `;
  try {
    const resp = await fetch(apiUrl);
    const respJson = await resp.json();
    return processData(respJson);
  } catch (err) {
    handleError(err);
  }
}

function updateWeatherDiv(data) {
  cityDisp.innerHTML = data.city;
  countryDisp.innerHTML = data.country;
  conditionsDisp.innerHTML = data.conditions;
  descDisp.innerHTML = data.description;
  humidityDisp.innerHTML = `${data.humidity}% humidity`;
  switch (tempType.value) {
    case "C":
      tempDisp.innerHTML = `${data.celcius}°C`;
      break;
    case "F":
      tempDisp.innerHTML = `${data.fahrenheit}°F`;
      break;
  }
}

function handleError(err) {
  window.alert(err);
}

goBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!localeInput.value) {
    localeInput.setAttribute("class", "invalid");
    return;
  }
  localeInput.setAttribute("class", "");
  const location = localeInput.value.replaceAll(" ", "%20");
  getWeatherIn(location)
    .then((res) => updateWeatherDiv(res))
    .catch((err) => handleError(err));
});

tempType.addEventListener("change", () => updateWeatherDiv(currData));
