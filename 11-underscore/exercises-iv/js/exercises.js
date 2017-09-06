const objectToMap = {
  start:  100,
  middle: 853,
  end:    912
};

// Multiply each value in objectToMap by a random number and return an object with the changed values
const randomised = _(objectToMap).mapObject(function (v) {
  return v * _.random(1, 15);
});
console.log( 'randomised', randomised );

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
console.table( _(objectToMap).pairs() );

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
console.log( _(objectToMap).invert() );

// Remove the "start" key from objectToMap in two different ways
console.log( _(objectToMap).omit('start') );
console.log( _(objectToMap).pick('middle', 'end') );
