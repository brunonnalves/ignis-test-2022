export interface IMovies {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface IMoviesResponse {
  results: [IMovies];
}