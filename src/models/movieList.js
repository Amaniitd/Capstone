

export class MovieList extends Array {
    constructor() {
        super();
    }
    sortByRating() {
        const movies = this;
        movies = movies.sort((a, b) => {
            return b.rating - a.rating;
        });
        return movies;
    }
    filterByRating(rating = 1) {
        const movies = this;
        movies = movies.filter(movie => {
            return movie.rating >= rating;
        });
        return movies;
    }
}