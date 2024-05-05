import api from "../axiosClient";

export function GetNewProject() {
  return api.get<any>(`/admin/projects/new`);
}
