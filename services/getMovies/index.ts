import api from "../api";
import { IMoviesResponse } from "./types";

export const getMovies = async (): Promise<IMoviesResponse> => {
  const {data} = await api.get<IMoviesResponse>('/movies');

  return data;
}