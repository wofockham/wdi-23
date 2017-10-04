// Promises are an alternative to callbacks

const fs = require('fs'); // The Node.js standard library for file systems.

// This is asynchronous: you have to pass in a single callback function
// and it needs to handle both success and failure:
// fs.readFile('example.txt', 'utf-8', function (err, content) {
//   if (err) {
//     throw err; // Immediately abandon program.
//   }
//   console.log(content); // Success: print out the content.
// });

// Let's wrap the fs.readFile function from above to use a Promise.
// This is a more modern style, now that Promises are part of ES6.
const readFile = function (filename) {
  // We return our promise which wraps our asynchronous task.
  return new Promise(function (resolve ,reject) {
    // This Promise function has to call: resolve() and reject()
    // These are provided to your function by the Promise.
    fs.readFile(filename, 'utf-8', function (err, content) {
      if (err) {
        reject(err); // This will run your .catch() callback.
        return;
      }

      resolve(content); // This will run your .then() callback(s).
    });
  });
};

// Now we can write nice shallow code and attach multiple callbacks
// We can also separate the error and success handling.
readFile('example.txt').then(function (content) {
  console.log(content.toUpperCase());
}).catch(function (err) {
  console.log('there was an error', err);
});
