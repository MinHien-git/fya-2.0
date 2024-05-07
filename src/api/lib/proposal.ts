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
