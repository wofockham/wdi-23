const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
const bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
const uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

const arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101
const fives = _.range(30, 101, 5);
console.log( 'fives', fives );

// Turn bumpyArr into one flat array (no nested arrays)
const flatArr = _(bumpyArr).flatten();
console.log( 'flattened', flatArr );

// Remove all of the falsey elements in the uncompactedArr
const compactedArr = _(uncompactedArr).compact();
console.log( 'compacted', compactedArr );

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
const uniques = _.unique([ 1, 25, 100 ], [ 1, 14, 25 ], [24, Infinity, -0]);
console.log( 'uniques', uniques );

// Find the index of the first element in numbers that is over 7 and is even
const index = _(numbers).findIndex(function (n) {
  return (n > 7) && (n % 2 === 0);
});
console.log( 'first even number greater than 7:', numbers[index] );

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
console.log('arrObject:', _.object(arrToTransform[0], arrToTransform[1]));
