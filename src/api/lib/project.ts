import api from "../axiosClient";

export function PostProject(data) {
  return api.post("/project", data);
}

export function GetClientProjectDetail(id: string) {
  return api.get<any>(`/project/${id}/detail`);
}
