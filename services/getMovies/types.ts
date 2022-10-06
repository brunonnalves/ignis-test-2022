export interface IMovies {
  popularity: number;
  title: string;
  overview: string;
  poster_path: string;
}

export interface IMoviesResponse {
  results: [IMovies];
}