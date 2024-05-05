import api from "../axiosClient";

export function requestRefreshToken(data): any {
  return api.post("/token", data);
}
