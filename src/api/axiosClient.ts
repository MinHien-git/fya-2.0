// import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: `http://localhost:4000` || process.env.URL,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

import axios from "axios";
import Cookies from "js-cookie";

const API_URL = `http://localhost:4000` || process.env.URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("at");

  if (token) {
    console.log(config);
    config.headers!["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
