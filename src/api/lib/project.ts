import api from "../axiosClient";

export function PostProject(data) {
  return api.post("/project", data);
}

export function GetUserProjects() {
  return api.get<any>("/project/user");
}
export function GetUserProjectsDetail(projectId) {
  return api.get<any>(`/project/user/${projectId}/detail`);
}

export function GetClientProjectDetail(id: string) {
  return api.get<any>(`/project/${id}/detail`);
}
