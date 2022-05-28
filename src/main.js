

import { omdbApi } from "./api/omdbApi";

function fetchMoviesFromOMDB() {
    var promise = omdbApi.getMovies();
    promise.then(
        (movies) => {
            console.log(movies);
        },
        () => {
            console.log("error");
        }
    );

}

fetchMoviesFromOMDB();