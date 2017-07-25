/*
The Temperature Converter

It's hot out! Let's make a converter.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
*/


const celsiusToFahrenheit = function (celsiusTemperature) {
  const fahrenheitTemperature = celsiusTemperature * 1.8 + 32;
  const message = celsiusTemperature + "°C is " + fahrenheitTemperature+ "°F";
  console.log( message );
}

celsiusToFahrenheit(22);

const fahrenheitToCelsius = function (fahrenheitTemperature) {
  const celsiusTemperature = (fahrenheitTemperature - 32) / 1.8;
  const message = fahrenheitTemperature + "°F is " + celsiusTemperature + "°C";
  console.log( message );
}

fahrenheitToCelsius(71.6);
