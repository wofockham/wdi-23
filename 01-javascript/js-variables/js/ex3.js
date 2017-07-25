/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

const currentAge = 33;
const maximumAge = 55;

const amountPerDay = 4; // hotdogs

const amountPerYear = amountPerDay * 365.25; // Days per year including leaps.
const yearsRemaining = maximumAge - currentAge;
const totalRequired = amountPerYear * yearsRemaining;

const message = "You will need " + totalRequired + " to last you until the ripe old age of " + maximumAge;

console.log( message );
