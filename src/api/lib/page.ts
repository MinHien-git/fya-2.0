import api from "../axiosClient";

export function PostCreatePage(data) {
  return api.post("/page", data);
}

export function GetPages() {
  return api.get<any>("/page");
}
export function GetPage(id) {
  return api.get<any>(`/page/${id}`);
}

export function GetManagePage(id) {
  return api.get<any>(`/management/page/${id}`);
}

export function PutAboutPage(id, data) {
  return api.put<any>(`/page/about/update/${id}`, data);
}

export function GetPageAward(pageId) {
  return api.get<any>(`/page/awards/${pageId}`);
}

export function PutPageAward(awardId, data) {
  return api.put<any>(`/page/award/${awardId}/update`, data);
}

export function postPageAward(pageId, data) {
  return api.post<any>(`/page/award/${pageId}`, data);
}
