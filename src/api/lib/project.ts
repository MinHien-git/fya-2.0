import api from "../axiosClient";

export function PostProject(data) {
  return api.post("/project", data);
}
