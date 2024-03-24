import api from "../axiosClient";

export interface ISignInData {
  email: string;
  password: string;
}

export interface ISignUpData {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}
export function Signin(data: ISignInData) {
  return api.post("/signin", JSON.stringify(data));
}

export function Signup(data: ISignUpData) {
  return api.post("/signup", JSON.stringify(data));
}

export function Signout(data: string) {
  return api.delete(`/logout/${data}`);
}
