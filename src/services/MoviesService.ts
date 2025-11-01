import axios from "axios";
import dotenv from "dotenv";
import { Movie } from "../models/MovieModel";
import { formatMovie } from "../utils";
dotenv.config();

axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.TMDB_TOKEN}`;

export class MovieService {
  async getPopular(): Promise<Movie[]> {
    const res = await axios.get(`${process.env.TMDB_BASE_URL}/movie/popular`);
    const results = res.data.results;
    return results.map(formatMovie);
  }

  async getByID(id: string): Promise<Movie> {
    const res = await axios.get(`${process.env.TMDB_BASE_URL}/movie/${id}`);
    const results = res.data.results;
    return results.map(formatMovie);
  }

  async addToFavorite() {
    const res = await axios.get(
      `${process.env.TMDB_BASE_URL}/movie/addToFavorite`
    );
    const data = res.data;
    return data;
  }
}
