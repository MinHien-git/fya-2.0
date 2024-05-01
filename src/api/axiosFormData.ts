import axios from "axios";
import { setupInterceptorsTo } from "./interceptors";
const API_URL = `http://localhost:4000` || process.env.URL;

const apiForm = setupInterceptorsTo(
  axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    withCredentials: true,
  })
);

export default apiForm;
