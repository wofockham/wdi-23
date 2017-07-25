/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

let celsiusTemperature = 22;
let fahrenheitTemperature = celsiusTemperature * 1.8 + 32;
let message = celsiusTemperature + "°C is " + fahrenheitTemperature+ "°F";
console.log( message );

celsiusTemperature = (fahrenheitTemperature - 32) / 1.8;
message = fahrenheitTemperature + "°F is " + celsiusTemperature + "°C";
console.log( message );
