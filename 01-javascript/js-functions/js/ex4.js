/*
The Geometrizer

Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

const calcCircumference = function (radius) {
  const circumference = radius * 2 * Math.PI;
  const message = "The circumference is " + circumference;
  console.log(message);
}

calcCircumference(55);

const calcArea = function (radius) {
  const area = radius * radius * Math.PI;
  const message = "The area is " + area;
  console.log(message);
}

calcArea(55);
