import { MovieService } from "../services/moviesService";
import { Movie } from "../models/MovieModel";

export class MovieController {
  movieService: MovieService = new MovieService();

  async getPopular(req: Request, res: Response): Promise<Movie[]> {
    const popularMovies = await this.movieService.getPopular();
    res.json(popularMovies);
  }

  async getById(req: Request, res: Response): Promise<Movie> {
    const movie: Movie = await this.movieService.getByID("id");
    res.json(movie);
  }

  async addToFavorite(req: Request, res: Response) {
    const favorite = this.movieService.addToFavorite();
    res.json(favorite);
  }
}
