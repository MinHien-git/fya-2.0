import api from "../axiosClient";

export function SendProposal(project_id: string, data) {
  return api.post<any>(`/proposal/${project_id}`, data);
}

export function GetProposal() {
  return api.get<any>(`/proposal`);
}

export function GetAgencyProposalDetail(proposal_id: string) {
  return api.get<any>(`/proposal/agency/${proposal_id}`);
}

export function AcceptProposal(proposal_id: string, project_id: string) {
  return api.patch<any>(`/proposal/agency/${proposal_id}/accept/${project_id}`);
}

export function RejectProposal(proposal_id: string) {
  return api.put<any>(`/proposal/agency/${proposal_id}/reject`);
}
export function GetUserOngoingProject() {
  return api.get<any>(`/proposal/user/onGoing`);
}
export function GetUserCompletedProposal() {
  return api.get<any>(`/proposal/user/completed`);
}
