// Sorted array of numbers
const numbers = [5, 7, 11, 15, 19, 27, 34, 39, 44, 45, 46, 51, 58, 59];

const binarySearch = (needle, haystack) => {
  let start = 0;
  let end = haystack.length - 1;

  // Loop until there are no elements left to consider
  while (start <= end) {
    // You are not expected to understand this:
    let mid = Math.round( start + (end - start) / 2 );

    if (haystack[mid] > needle) {
      // Disregard the right hand side
      end = mid - 1;
    } else if (haystack[mid] < needle) {
      // Disregard the left hand side
      start = mid + 1;
    } else {
      // We found our needle
      return mid; // This is the index of the needle in the haystack.
    }
  }

  return false; // needle not found.

  return;
};

for (let i = 5; i < 100; i++) {
  let foundIndex = binarySearch(i, numbers);
  if (foundIndex !== false) {
    console.log(`found ${i} at ${foundIndex}`);
  }
}
console.log( numbers );
