/*
The Geometrizer

Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

const radius = 55;

const circumference = radius * 2 * Math.PI;
const message1 = "The circumference is " + circumference;
console.log(message1);

const area = radius * radius * Math.PI;
const message2 = "The area is " + area;
console.log(message2);
