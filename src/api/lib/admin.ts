import api from "../axiosClient";

export function GetNewProject() {
  return api.get<any>(`/admin/projects/new`);
}

export function GetUsers() {
  return api.get<any>(`/admin/users`)
}

export function GetAgencyPage() {
  return api.get<any>(`/admin/agencyPage`)
}

export function GetProjectsData() {
  return api.get<any>(`/admin/projectsData`)
}

export function GetBriefingsSent() {
  return api.get<any>(`/admin/briefingsSent`)
}

export function GetBriefingsAccepted() {
  return api.get<any>(`/admin/briefingsAccepted`)
}

export function GetProposalsAccepted() {
  return api.get<any>(`/admin/proposalsAccepted`)
}

export function GetProposalsSent() {
  return api.get<any>(`/admin/proposalsSent`)
}

export function GetCompletedProjects() {
  return api.get<any>(`/admin/CompletedProjects`)
}

export function GetData() {
 return api.get<any>(`/admin/data`)
}