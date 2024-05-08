import api from "../axiosClient";

export function postFeedback(project_id, page_id, data) {
  return api.post(`/feedback/user/${project_id}/page/${page_id}`, data);
}
