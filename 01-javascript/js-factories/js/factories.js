const catFactory = function (n, a, fc) {
  return {
    name: n,
    age: a,
    furColor: fc,
    likes: ['milk'],
    miaow: function () {
      console.log('Miaow!!!')
    },
    greeting: function () {
      console.log('Hello my name is ' + this.name);
    }
  }
};

let cuteCats = [
    catFactory('Angel', 18, 'grey'),
    catFactory('Evil', 14, 'red'),
    catFactory('Meh', 12, 'white'),
    catFactory('Casey Jones', 0, 'tabby')
];


for (let i = 0; i < cuteCats.length; i++) {
  console.log( `${ cuteCats[i].name } is ${ cuteCats[i].age } years old and has ${ cuteCats[i].furColor }` );
}

////////////////////////////////////////////////////////////////////////////////
// Bizarro World: Prototypal Inheritance
////////////////////////////////////////////////////////////////////////////////
// let Cat = function (n, a, fc) { // constructor
//   // `this` is an object representing a new Cat
//   this.name = n;
//   this.age = a;
//   this.furColor = fc;
// }
//
// Cat.prototype.miaow = function () {
//   console.log('Miaow');
// }
