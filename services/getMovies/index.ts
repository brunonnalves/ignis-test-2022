import api from "../api";
import { IMoviesResponse } from "./types";

export const getMovies = async (page: number): Promise<IMoviesResponse> => {
  const {data} = await api.get<IMoviesResponse>(`/movies?page=${page}`);

  return data;
}

export const searchMovies = async (search: string): Promise<IMoviesResponse> => {
  const {data} = await api.get<IMoviesResponse>(`/movies?query=${search}`);

  return data;
}