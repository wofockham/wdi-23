/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

const calculateSupply = function (currentAge, amountPerDay) {
  const maximumAge = 55;
  const amountPerYear = amountPerDay * 365.25; // Days per year including leaps.
  const yearsRemaining = maximumAge - currentAge;
  const totalRequired = Math.ceil( amountPerYear * yearsRemaining );

  const message = "You will need " + totalRequired + " to last you until the ripe old age of " + maximumAge;

  console.log( message );
}

calculateSupply(27, 4.5);
calculateSupply(50, 3);
calculateSupply(70, 3);
