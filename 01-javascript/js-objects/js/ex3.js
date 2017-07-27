/*
The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

let movie = {
  title: 'O Brother, Where Art Thou',
  duration: 107,
  stars: ['George Clooney', 'John Turturro', 'John Goodman', 'Gillian Welch']
};

let movieInfo = function (m) {
  let info = `${ m.title } lasts for ${ m.duration } minutes. Stars: ${ m.stars.join(', ') }.`;
  console.log( info );
};

movieInfo( movie );
