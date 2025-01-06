const conditionArray = ["Clear", "Rain", "Snow", "Fog", "Thunderstorm"];
let currentWeather = {
  //create a weather object
  temperature: Math.floor(Math.random() * 51) - 10, //▪ Temperature: A number between -10°C and 40°C.
  condition: conditionArray[Math.floor(Math.random() * conditionArray.length)], //▪ Condition: One of the following: "Clear," "Rain," or "Snow."
  cloudCoverage: Math.floor(Math.random() * 101), //▪ Cloudiness: A percentage (e.g., 20%, 50%, etc.).
};

console.log(currentWeather);
function updateHTML() {
  document.getElementById(
    "temperature"
  ).innerText = `Temperature: ${currentWeather.temperature}°C`;
  document.getElementById(
    "condition"
  ).innerText = `Condition: ${currentWeather.condition}`;
  document.getElementById(
    "cloud-coverage"
  ).innerText = `Cloud Coverage: ${currentWeather.cloudCoverage}%`;
}

function updateWeather() {
  //update weather object
  {
    currentWeather.temperature = Math.floor(Math.random() * 51) - 10; //new temperature
    currentWeather.condition =
      conditionArray[Math.floor(Math.random() * conditionArray.length)]; //new condition
    currentWeather.cloudCoverage = Math.floor(Math.random() * 101);
    if (
      currentWeather.condition === "Snow" &&
      currentWeather.temperature <= -10
    ) {
      document.getElementById(
        "weather-animation"
      ).innerText = `Do not go outside!`;
    }
    const mainContainer = document.getElementById("main-container"); // Grab reference to main container

    // Remove any previously added weather classes
    mainContainer.classList.remove(
      "clear",
      "rain",
      "snow",
      "fog",
      "thunderstorm"
    );

    // Add class based on current weather condition
    if (currentWeather.condition === "Clear") {
      mainContainer.classList.add("clear");
    } else if (currentWeather.condition === "Rain") {
      mainContainer.classList.add("rain");
    } else if (currentWeather.condition === "Snow") {
      mainContainer.classList.add("snow");
    } else if (currentWeather.condition === "Fog") {
      mainContainer.classList.add("fog");
    } else if (currentWeather.condition === "Thunderstorm") {
      mainContainer.classList.add("thunderstorm");
    }
  }
  updateHTML();
}
updateWeather();
setInterval(updateWeather, 180000); //calling and displaying random weather every 3 minutes
