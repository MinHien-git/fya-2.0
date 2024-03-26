import api from "../axiosClient";

export function PostProject(data: ISignInData) {
  return api.post("/project", data);
}
