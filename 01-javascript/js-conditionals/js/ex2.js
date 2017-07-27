/*

The World Translator

Write a function named helloWorld that:

takes 1 argument, a language code (e.g. "es", "de", "en")
returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
Call that function for each of the supported languages and log the result to make sure it works.

*/

const helloWorld = function (code) {
  if ("es" === code) {
    return "Hola mundo";
  } else if ("de" === code) {
    return "Hallo Welt";
  } else {
    return "Hello World";
  }
}

const greeting1 = helloWorld('es');
console.log( greeting1 );

const greeting2 = helloWorld('de');
console.log( greeting2 );

const greeting3 = helloWorld('en');
console.log( greeting3 );

let greeting4 = helloWorld('ru');
console.log( greeting4 );
