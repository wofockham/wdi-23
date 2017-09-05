////////////////////////////////////////////////////////////////////////////////
// Collections
//   Iteration
const bros = ["Groucho", "Harpo", "Chico"];

_(bros).forEach(function (b) {
  console.log( b );
});

const groucho = {
  name: 'Groucho',
  instrument: 'guitar',
  vice: 'cigars'
};

_(groucho).forEach(function (value, key) { // Note: value comes before key
  console.log( `${key} is ${value}.` );
});

// Map / Reduce
const squares = _([1, 2, 3]).map(function (n) {
  return n * n; // n squared
});
console.log( squares );

const sum = _([1, 2, 3]).reduce(function (memo, n) {
  // console.log( memo, n );
  return memo + n;
});
console.log( sum );

// Collections (like ActiveRecord)
const brothers = [
  {name: 'Groucho', instrument: 'guitar', vice: 'cigars', age: 44},
  {name: 'Harpo', instrument: 'harp', vice: 'mutism', age: 42},
  {name: 'Chico', instrument: 'piano', vice: 'infidelity', age: 39}
];

// const guitarist = _(brothers).where({instrument: 'guitar'}); // Returns array
const guitarist = _(brothers).findWhere({instrument: 'guitar'}); // Returns first match
console.log( guitarist );

const oldTimers = _(brothers).filter(function (b) {
  return b.age >= 40;
});
console.log( oldTimers );
