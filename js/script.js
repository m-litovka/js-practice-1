//nothing to see here

const numberOfFilms = prompt("How many films have you seen?");

console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movieName = prompt("What's a movie you've seen recently?", "Movie name");
let movieRating = prompt("How much do you rate it out of 10? (Decimals allowed):", "(7.2 ex.)");
personalMovieDB.movies[movieName] = movieRating;

movieName = prompt("What's a movie you've seen recently?", "Movie name");
movieRating = prompt("How much do you rate it out of 10? (Decimals allowed):", "(7.2 ex.)");
personalMovieDB.movies[movieName] = movieRating;


console.log(personalMovieDB.movies);