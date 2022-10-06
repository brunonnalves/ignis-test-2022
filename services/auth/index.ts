import api from "../api";
import { ILoginResponse } from "./types";

export const login = async (body: {
  email: string;
  password: string;
}): Promise<ILoginResponse> => {
  const {data} = await api.post<ILoginResponse>('/login', body);

  return data;
}