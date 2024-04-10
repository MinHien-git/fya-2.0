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
