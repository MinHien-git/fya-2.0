import api from "../axiosClient";
import baseAPI from "../axiosUser";

export function PostCreatePage(data) {
  return api.post("/page", data);
}

export function GetPages() {
  return baseAPI.get<any>("user/pages");
}

export function GetPage(id) {
  return baseAPI.get<any>(`/page/${id}`);
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

export function DeletePageAward(awardId) {
  return api.delete<any>(`/page/award/${awardId}/delete`);
}

export function GetPageService(pageId) {
  return api.get<any>(`/page/services/${pageId}`);
}

export function PutPageService(serviceId, data) {
  return api.put<any>(`/page/service/${serviceId}/update`, data);
}

export function postPageService(pageId, data) {
  return api.post<any>(`/page/service/${pageId}`, data);
}

export function DeletePageService(serviceId: string) {
  return api.delete<any>(`/page/service/${serviceId}/delete`);
}

export function GetService(serviceId: string) {
  return api.get<any>(`/page/service/${serviceId}`);
}

export function GetPageAddress(pageId) {
  return api.get<any>(`/page/addresses/${pageId}`);
}

export function PutPageAddress(addressId, data) {
  return api.put<any>(`/page/address/${addressId}/update`, data);
}

export function postPageAddress(addressId, data) {
  return api.post<any>(`/page/address/${addressId}`, data);
}

export function DeletePageAddress(addressId) {
  return api.delete<any>(`/page/address/${addressId}/delete`);
}

export function GetCompany(pageId: string) {
  return api.get<any>(`/page/${pageId}/company`);
}

export function PostCompanyTeamCover(pageId: string, data) {
  return api.post<any>(`/page/${pageId}/company/team_cover`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function PostCompanyStory(pageId: string, data) {
  return api.post<any>(`/page/${pageId}/company/story`, data);
}

export function PostCompanyCover(pageId: string, data) {
  return api.post<any>(`/page/${pageId}/company/cover`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function PostCompanyLogo(pageId: string, data) {
  return api.post<any>(`/page/${pageId}/company/logo`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function GetPagePortfoilio(pageId) {
  return api.get<any>(`/page/${pageId}/portfolio`);
}

export function PutPagePortfoilio(portfolioId, data) {
  return api.put<any>(`/page/portfolio/${portfolioId}/update`, data);
}

export function PostPagePortfoilio(pageId, data) {
  return api.post<any>(`/page/portfolio/${pageId}`, data);
}
export function PostPagePortfoilioImage(portfolioId, data) {
  return api.post<any>(`/page/portfolio/${portfolioId}/image`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
export function DeletePagePortfoilio(portfolioId: string) {
  return api.delete<any>(`/page/portfolio/${portfolioId}/delete`);
}

export function GetPortfoilio(portfolioId: string) {
  return api.get<any>(`/page/portfolio/${portfolioId}`);
}

export function AddSavePage(pageId) {
  return api.post<any>(`/user/save/${pageId}`);
}
export function GetSavePage() {
  return api.get<any>(`/user/save/`);
}

export function RemoveSavePage(pageId: string) {
  return api.put<any>(`/user/save/${pageId}/delete`);
}
