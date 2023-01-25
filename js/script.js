//nothing to see here

let numberOfFilms = prompt("How many films have you seen?");

console.log(numberOfFilms);

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};