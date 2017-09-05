console.log('A: hotdogs');

// Callback
$(document).ready(function () {
  console.log('B: ready');
});

console.log('C: butterflies');

//////////////////////////////////////////////////////////////////////
// Timers ////////////////////////////////////////////////////////////

setInterval(function () {
  console.log('Some time has passed...', Math.random());
}, 3000);

const hello = function () {
  console.log('Hello world');
};

setTimeout(hello, 10000);

//////////////////////////////////////////////////////////////////////
// Event handlers ////////////////////////////////////////////////////

$(document).ready(function () {
  $('button').on('click', function () {
    window.location = 'http://yahoo.com/';
  });
});

//////////////////////////////////////////////////////////////////////
// Custom function that uses a callback //////////////////////////////
const bros = ['Groucho', 'Harpo', 'Chico'];

// const each = function (array, cb) {
//   for (var i = 0; i < array.length; i++) {
//     cb( array[i] );
//   }
// }

[1, 2, 4, 5, 6, 7, 8, true].forEach(function (n) {
  console.log(n);
});

# bros.each do |b|
#   puts b
# end

bros.forEach(function (brother) {
  console.log(brother.toUpperCase());
});
