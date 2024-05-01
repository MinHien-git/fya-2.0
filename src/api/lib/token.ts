import api from "../axiosClient";

export function PostRefreshToken(data): any {
  return api.post<Object>("/token", data);
}
