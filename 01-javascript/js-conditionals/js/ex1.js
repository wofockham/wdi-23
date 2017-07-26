/*

What number's bigger?

Write a function named greaterNum that:

takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

*/

const greaterNum = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

let test1 = greaterNum(15, 35);
console.log('The greater number of 15 and 35 is ' + test1);

let test2 = greaterNum(150, 12);
console.log('The greater number of 150 and 12 is ' + test2);
