import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import Cookies from "js-cookie";
const API_URL = `http://localhost:4000` || process.env.URL;

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = Cookies.get("at");
  console.log(token);

  if (token) {
    console.log(config);
    config.headers!["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = async (
  error: AxiosError
): Promise<AxiosError | void> => {
  if (error.response) {
    const rft = Cookies.get("rft");
    console.log(rft);
    // Access Token was expired
    if (error.response.status === 403) {
      const rft = Cookies.get("rft");
      console.log(rft);
      try {
        const rs = await axios.post(`${API_URL}/token`, {
          token: rft,
        });
        console.log(rs);
        const { accesstoken } = rs.data;

        Cookies.set("at", accesstoken, {
          secure: true,
        });
        // Cookies.set("rft", refreshToken, {
        //   expires: 31,
        //   secure: true,
        // });

        return;
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
  }
  return Promise.reject(error);
};

export const setupInterceptorsTo = (
  axiosInstance: AxiosInstance
): AxiosInstance => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};
