export interface IMovies {
  id: number
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  backdrop_path: string;
}

export interface IMoviesResponse {
  results: [IMovies];
}