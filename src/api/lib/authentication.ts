import api from "../axiosClient";
import baseAPI from "../axiosUser";

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
  return baseAPI.post("/signin", JSON.stringify({ ...data }));
}

export function Signup(data: ISignUpData) {
  return baseAPI.post("/signup", JSON.stringify(data));
}

export function Signout(data: string) {
  return baseAPI.delete(`/logout/${data}`);
}

export function getUserInformation() {
  return api.get("/getUserInformation");
}
