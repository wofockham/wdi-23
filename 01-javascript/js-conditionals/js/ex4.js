/*

The Pluralizer

Write a function named pluralize that:

takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
Bonus: Make it handle a few collective nouns like "sheep" and "geese".

*/

const pluralize = function (noun, number) {
  const part = number + ' ' + noun;
  if (number === 1) {
    return part;
  } else {
    return part + 's';
  }
}

console.log( pluralize('dog', 1) );
console.log( pluralize('cat', 2) );
console.log( pluralize('sheep', 0) );
