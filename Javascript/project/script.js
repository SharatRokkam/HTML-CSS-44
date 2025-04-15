const apiKey = "c9cc81972027746b6585cb802d5768bd";
const weatherContent = document.querySelector(".weather-content");
const loader = document.querySelector(".loader");
const errorMessage = document.querySelector(".error-message");
const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector(".search-icon");

// Initialize with default city
getWeatherData("Multan");

// Search functionality
searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = searchBar.value.trim();
    if (city) {
      getWeatherData(city);
    }
  }
});

searchIcon.addEventListener("click", () => {
  const city = searchBar.value.trim();
  if (city) {
    getWeatherData(city);
  }
});

// Fetch weather data
function getWeatherData(city) {
  showLoader();

  // Current weather data
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      // Get forecast data
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Forecast data not available");
          }
          return response.json();
        })
        .then((forecastData) => {
          updateUI(data, forecastData);
          hideLoader();
        });
    })
    .catch((error) => {
      console.error("Error:", error);
      showError();
      hideLoader();
    });
}

function updateUI(currentData, forecastData) {
  errorMessage.style.display = "none";
  weatherContent.style.display = "block";

  // Update location and date
  document.querySelector(".location").textContent = currentData.name;

  const now = new Date();
  const dateString = formatDate(now);
  document.querySelector(".date").textContent = dateString;

  // Update greeting and time
  document.querySelector(".greeting").textContent = getGreeting(now);
  document.querySelector(".time").textContent = formatTime(now);

  // Update current weather
  const tempRounded = Math.round(currentData.main.temp);
  document.querySelector(".temperature").textContent = tempRounded + "°";
  document.querySelector(".right-temp").textContent = tempRounded + "°";

  const windSpeed = (currentData.wind.speed * 2.237).toFixed(1) + " mph"; // Convert m/s to mph
  document.querySelector(".wind").textContent = windSpeed;

  const humidity = currentData.main.humidity + " %";
  document.querySelector(".humidity").textContent = humidity;

  document.querySelector(".feels-like").textContent = `Feels like ${Math.round(
    currentData.main.feels_like
  )}°`;

  const weatherCondition = currentData.weather[0].main;
  document.querySelector(".weather-condition").textContent = weatherCondition;
  document.querySelector(".right-condition").textContent = weatherCondition;

  // Update hourly forecast
  updateHourlyForecast(forecastData);

  // Update weekly forecast
  updateWeeklyForecast(forecastData);
}

function updateHourlyForecast(forecastData) {
  const hourlyItems = document.querySelectorAll(".hourly-item");
  const hourlyData = forecastData.list.slice(0, 6); // Get next 6 hours

  hourlyData.forEach((item, index) => {
    const time = new Date(item.dt * 1000);
    const hour = time.getHours();
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;

    hourlyItems[index].querySelector(
      ".hour"
    ).textContent = `${formattedHour} ${ampm}`;
    hourlyItems[index].querySelector(".hour-temp").textContent = `${Math.round(
      item.main.temp
    )}°`;
    hourlyItems[index].querySelector(".hour-condition").textContent =
      item.weather[0].main;
  });
}

function updateWeeklyForecast(forecastData) {
  const forecastDays = document.querySelectorAll(".forecast-day");
  const dailyData = getDailyForecast(forecastData.list);

  // Today's forecast is already shown as the first item
  // Update the rest of the days
  for (let i = 1; i < forecastDays.length && i - 1 < dailyData.length; i++) {
    const day = new Date(dailyData[i - 1].dt * 1000);
    forecastDays[i].querySelector(".day-name").textContent = formatDay(day);
    forecastDays[i].querySelector(".day-temp").textContent = `${Math.round(
      dailyData[i - 1].main.temp
    )}°`;
    forecastDays[i].querySelector(".day-condition").textContent =
      dailyData[i - 1].weather[0].main;
  }
}

function getDailyForecast(forecastList) {
  const dailyData = [];
  const today = new Date().getDate();

  for (let i = 0; i < forecastList.length; i++) {
    const date = new Date(forecastList[i].dt * 1000);
    if (date.getDate() !== today && date.getHours() === 12) {
      dailyData.push(forecastList[i]);
      if (dailyData.length === 5) break; // Get 5 days
    }
  }

  return dailyData;
}

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

function formatTime(date) {
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  return `${formattedHours}:${minutes} ${ampm}`;
}

function formatDay(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function getGreeting(date) {
  const hours = date.getHours();
  if (hours < 12) {
    return "Good Morning";
  } else if (hours < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function showLoader() {
  weatherContent.style.display = "none";
  errorMessage.style.display = "none";
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function showError() {
  weatherContent.style.display = "none";
  errorMessage.style.display = "block";
}

// Update time every minute
setInterval(() => {
  const now = new Date();
  document.querySelector(".time").textContent = formatTime(now);
  document.querySelector(".greeting").textContent = getGreeting(now);
}, 60000);
