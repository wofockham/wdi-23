// Returns a Promise.
const wait = function (duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
};

// wait(2000).then(function () {
//   console.log('2 seconds have passed');
// });


// let p1 = wait(2000), p2 = wait(15000), p3 = wait(3000);
// let p4 = Promise.all( [p1, p2, p3] );
// p4.then(function () {
//   console.log('all promises are fulfilled');
// });
