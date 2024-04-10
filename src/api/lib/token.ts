import api from "../axiosClient";

export function PostToken(data): any {
  return api.post<Object>("/token", data);
}

export function PostRefreshToken(data): any {
  return api.post<Object>("/refreshtoken", data);
}
