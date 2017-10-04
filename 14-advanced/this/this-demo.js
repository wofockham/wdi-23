const groucho = {
  name: 'Groucho Julius Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.name;
  }
};

const harpo = {
  name: 'Harpo Marx',
  greeting: function () {
    return 'Good evening, my name is ' + this.name;
  }
};

// .bind ///////////////////////////////////////////////////////////////////////
// This lets you permanantly associate a particular object as the `this` within
// the function, REGARDLESS of where/how you call the function.

const grouchoGreeter = groucho.greeting.bind(groucho);
grouchoGreeter(); // `this` in the fn will refer to `groucho`

// .apply //////////////////////////////////////////////////////////////////////
// This lets us pass an array argument into a function which expects multiple
// separate parameters.
const numbers = [134, 34, 3, 4, -1001, 0, 12, 100000];
// Math.max( numbers ); // Doesn't work because .max expects separate parameters.
// ES5:
Math.max.apply(null, numbers); // Flattening out the numbers array into separate params.
// ES6: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
Math.max( ...numbers ); // Spread operator (splatting in JS).
