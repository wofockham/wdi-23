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

// Sorting and grouping ////////////////////////////////////////////////////////
const sortedBrothers = _(brothers).sortBy('age');
console.log( sortedBrothers );

const scores = [1.2, 1.9, 2.4, 2.7, 1.1, 4.3];
const groupedScores = _(scores).groupBy(function (n) {
  return Math.floor( n );
})
console.log( groupedScores );

// Predicate methods ///////////////////////////////////////////////////////////
const data = [1, 2, 3, 4, 5];
const allEven = _(data).every(function (n) {
  return n % 2 === 0; // Is n even?
});
console.log( allEven );

const someEven = _(data).some(function (n) {
  return n % 2 === 0; // Is n even?
});
console.log( someEven );

console.log( _(data).contains(3) ); // => true (goodbye -1)

console.log( _(brothers).pluck('vice') );

console.log( _(brothers).max('age') ); // Returns an object
console.log( _(brothers).min('age') ); // Returns an object

// Fun collection helpers //////////////////////////////////////////////////////
// const data = [1, 2, 3, 4, 5];
_(data).shuffle();
_(data).sample();
_(data).sample(2);

const countedData = _(data).countBy(function (n) {
  return n % 2 === 0 ? 'even' : 'odd';
});
console.log( countedData );
