/*
The Age Calculator

Forgot how old you are? Calculate it!

Write a function named calculateAge that:

takes 2 arguments: birth year, current year.
calculates the 2 possible ages based on those years.
outputs the result to the screen like so: "You are either NN or NN"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

*/

const calculateAge = function (birthYear) {
  const currentYear = (new Date()).getFullYear();
  const age1 = currentYear - birthYear;
  const age2 = age1 - 1;

  const message = "They are either " + age2 + " or " + age1;

  console.log(message);
}

calculateAge(2000);
calculateAge(1984);
calculateAge(1855);
