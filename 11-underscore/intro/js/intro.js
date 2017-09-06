////////////////////////////////////////////////////////////////////////////////
// Collections - Easy Iteration
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


////////////////////////////////////////////////////////////////////////////////
// Collections - Map / Reduce
const squares = _([1, 2, 3]).map(function (n) {
  return n * n; // n squared
});
console.log( squares );

const sum = _([1, 2, 3]).reduce(function (memo, n) {
  return memo + n;
});
console.log( sum );


////////////////////////////////////////////////////////////////////////////////
// Collections - Search through arrays of objects (ActiveRecord inspired)
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


////////////////////////////////////////////////////////////////////////////////
// Collections - Sorting and grouping
const sortedBrothers = _(brothers).sortBy('age');
console.log( sortedBrothers );

const scores = [1.2, 1.9, 2.4, 2.7, 1.1, 4.3];
const groupedScores = _(scores).groupBy(function (n) {
  return Math.floor( n );
})
console.log( groupedScores );


////////////////////////////////////////////////////////////////////////////////
// Collections - Predicate methods
const data = [1, 2, 3, 4, 5];
const allEven = _(data).every(function (n) {
  return n % 2 === 0; // Is n even?
});
console.log( allEven );

const someEven = _(data).some(function (n) {
  return n % 2 === 0; // Is n even?
});
console.log( someEven );


////////////////////////////////////////////////////////////////////////////////
// Arrays - Find specific data
console.log( _(data).contains(3) ); // => true (goodbye -1)

console.log( _(brothers).pluck('vice') );

console.log( _(brothers).max('age') ); // Returns an object
console.log( _(brothers).min('age') ); // Returns an object


////////////////////////////////////////////////////////////////////////////////
// Arrays - Random elements
// const data = [1, 2, 3, 4, 5];
_(data).shuffle();
_(data).sample();
_(data).sample(2);


////////////////////////////////////////////////////////////////////////////////
// Arrays - Counting elements
const countedData = _(data).countBy(function (n) {
  return n % 2 === 0 ? 'even' : 'odd';
});
console.log( countedData );

////////////////////////////////////////////////////////////////////////////////
// Arrays - Access
// const data = [1, 2, 3, 4, 5];
_(data).first();
_(data).last();

console.log( _(data).initial(3) ); // AKA .take
console.log( _(data).rest(2) ); // AKA .drop

////////////////////////////////////////////////////////////////////////////////
// Arrays - Cleaning
console.log( _([0, 1, false, 2, '', 3]).compact() );
console.log( _([1, [2], [3, [4]]]).flatten() );

////////////////////////////////////////////////////////////////////////////////
// Arrays - Arithmetic
console.log( _([1, 2, 1, 0, 3, 1, 4]).without(0, 1) );
console.log( _.union([1, 2, 3], [101, 2, 1, 10], [2, 1], [7]) ); // All unique elements.
console.log( _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]) ); // All common elements.
console.log( _([1, 2, 3, 4, 5]).difference([5, 2, 10]) ); // Subtract the second from the first.

////////////////////////////////////////////////////////////////////////////////
// zip/unzip/object
console.log( _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]) );
console.log( _.unzip( [["moe",30,true],["larry",40,false],["curly",50,false]] ) );
// Turn an array of keys and an array of values into a single object of key value pairs.
console.log( _.object( ['moe', 'larry', 'curly'], [30, 40, 50] ));

// ['groucho', 'harpo', 'chico'].indexOf( 'harpo' )
_(['groucho', 'harpo', 'chico']).indexOf( 'harpo' );
_(['groucho', 'harpo', 'chico', 'harpo', 'chico', 'harpo']).lastIndexOf( 'harpo' );

////////////////////////////////////////////////////////////////////////////////
// Ranges
_.range(10); // Starts from 0
_.range(1, 11); // Upper and lower bounds
_.range(0, 30, 5); // 5 is the step
_.range(0, -10, -1); // Count backwards if desired

////////////////////////////////////////////////////////////////////////////////
// Object Transformations
const data2 = { name: 'John', location: 'San Franciso' };
console.log( _(data2).keys() );

const sales = { monday: 100, tuesday: 200 };
const betterSales = _(sales).mapObject(function (value, key) {
  return value * 2;
});
console.log( betterSales );

console.log( _(data2).pairs() );
console.log( _(sales).invert() );

////////////////////////////////////////////////////////////////////////////////
// Object Access
const data3 = { name: 'John', location: 'San Franciso', description: 'Very nice thanks' };
console.log( _(data3).pick( 'name', 'location' ) );
console.log( _(data3).omit( 'description' ) );
console.log( _(data3).defaults( {name: 'Unknown', weight: 0} ) );
console.log( _(data3).has( 'name' ) );

////////////////////////////////////////////////////////////////////////////////
// Object Equality
console.log( _.isEqual( {name: 'John'}, {name: 'John'} ) );
