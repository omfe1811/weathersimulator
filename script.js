const conditionArray = ["Clear", "Rain", "Snow", "Fog", "Thunderstorm"];
let currentWeather = {
  temperature: Math.floor(Math.random() * 51) - 10, //▪ Temperature: A number between -10°C and 40°C.
  condition: conditionArray[Math.floor(Math.random() * conditionArray.length)], //▪ Condition: One of the following: "Clear," "Rain," or "Snow."
  cloudCoverage: Math.floor(Math.random() * 101), //▪ Cloudiness: A percentage (e.g., 20%, 50%, etc.).
}; //create a weather object

console.log(currentWeather);
/* 2. Automatic Updates:
o Find a way to change the weather conditions automatically every 3 minutes.
o Think about how to repeatedly call a function without using any manual triggers
(like a button). */
function updateWeather() {
  //update weather object
  {
    currentWeather.temperature = Math.floor(Math.random() * 51) - 10; //new temperature
    currentWeather.condition =
      conditionArray[Math.floor(Math.random() * conditionArray.length)]; //new condition
    currentWeather.cloudCoverage = Math.floor(Math.random() * 101);
    console.log(currentWeather); //new cloud coverage
  }
}

setInterval(updateWeather, 18000); //calling random weather function every 3 minutes
