import axios from "axios";
import dotenv from "dotenv";
import { Movie } from "../models/MovieModel";
dotenv.config();

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.TMDB_TOKEN}`;

function formatMovie(movie: any): Movie {
  const cleanedMovies = {
    id: movie.id,
    title: movie.title,
    releaseDate: movie.releaseDate,
    posterPath: movie.posterPath,
    isAdult: movie.isAdult,
  };

  return cleanedMovies;
}

export class MovieService {
  async getPopular(): Promise<Movie[]> {
    const res = await axios.get(`${process.env.TMDB_BASE_URL}/movie/popular`);
    const results = res.data.results;
    return results.map(formatMovie);
  }
}
