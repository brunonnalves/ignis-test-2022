export interface IUser {
  id: number;
  email: string;
  name: string;
}

export interface IAccessToken {
  token: string;
}

export interface ILoginResponse {
  accessToken: IAccessToken;
  user: IUser;
}