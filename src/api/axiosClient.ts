// import axios from "axios";

// const axiosClient = axios.create({
//   baseURL: `http://localhost:4000` || process.env.URL,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

import axios from "axios";
import { setupInterceptorsTo } from "./interceptors";
const API_URL = `http://localhost:4000` || process.env.URL;

const api = setupInterceptorsTo(
  axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  })
);

export default api;
