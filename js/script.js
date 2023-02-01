//nothing to see here

const numberOfFilms = prompt("How many films have you seen?");

console.log(numberOfFilms);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let movieName = prompt("What's a movie you've seen recently?", "");
  let movieRating = prompt(
    "How much do you rate it out of 10? (Decimals allowed):",
    ""
  );
  if (
    movieName != null &&
    movieRating != null &&
    movieName != "" &&
    movieRating != "" &&
    movieName.length < 50
  ) {
    personalMovieDB.movies[movieName] = movieRating;
    console.log("Done");
  }else { 
   console.log("Error");
   i--;
  }
}

if(personalMovieDB.count < 10){ console.log("Boring!")}else{console.log("Dude, get off the couch!")}
console.log(personalMovieDB.movies);
