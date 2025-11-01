export function formatMovie(movie: any): Movie {
  const cleanedMovies = {
    id: movie.id,
    title: movie.title,
    releaseDate: movie.releaseDate,
    posterPath: movie.posterPath,
    isAdult: movie.isAdult,
  };

  return cleanedMovies;
}
