import {httpMethods} from "../enum/httpMethods"
import { endpoints } from "../enum/restEndpoints"
import { Movie } from "../models/movie";
import { MovieList } from "../models/movieList";



export class omdbApi {
    static getMovies() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(
                httpMethods.get,
                endpoints.omdb,
                true
            );
            xhr.onload = function () {
                try {
                    const data = JSON.parse(xhr.response);
                    const movies = new MovieList();
                    data.forEach(raw_movie => {
                        var movie = new Movie();
                        movie.load(raw_movie);
                        movies.push(movie);
                    });
                    resolve();
                } catch (ex) {
                    console.log(ex);
                    reject();
                }
            };
            xhr.send();
        });
    
    }
}