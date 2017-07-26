/*

Javascript offers three keywords for identifying/naming data:

const
let
var

They differ in their scope, which determines which identifiers are
accessible at different points in the program.

As a general rule, try to declare your identifiers with a const first.
If you find you need to alter it, switch to a let.
If you find you need to access the identifier outside a block, switch to a var.

*/

/////////////////////////////////////////////////////////////////////
// A var outside of a function has global scope.
/////////////////////////////////////////////////////////////////////
var message = "Hello"; // Global scope

const showMessage = function () {
  // a var in the global scope is accessible within functions.
  console.log( message );
};

showMessage();

/////////////////////////////////////////////////////////////////////
// A var within a function has local or function scope.
/////////////////////////////////////////////////////////////////////
const showLocalMessage = function () {
  // This var is not accessible outside this function.
  var otherMessage = "Goodbye"; // Local/function scope
  console.log( otherMessage );
}

showLocalMessage();
// console.log( otherMessage ); otherMessage is inaccessible: out of scope

/////////////////////////////////////////////////////////////////////
// A var within a block has global scope.
/////////////////////////////////////////////////////////////////////
// let - local block scope
if (7 === 7) {
  var food = 'hotdogs'; // this will be accessible outside the block too
  console.log('within the block:', food);
}

console.log('outside the block:', food); // Still accessible

/////////////////////////////////////////////////////////////////////
// A let within a block has block scope.
/////////////////////////////////////////////////////////////////////
if (12 === 12) {
  let secretPassword = 'swordfish'; // Block scope
  console.log('within the block:', secretPassword);
}

//console.log('outside the block:', secretPassword); // Inaccessible here.

/////////////////////////////////////////////////////////////////////
// A const follows the same scope rules as a let: block scope
/////////////////////////////////////////////////////////////////////
if (5 === 5) {
  const secretPassword = 'swordfish'; // Const also has block scope
  console.log('within the block:', secretPassword);
}

//console.log('outside the block:', secretPassword); // Inaccessible here.
