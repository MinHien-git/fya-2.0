import axios from "axios";
const API_URL = `http://localhost:4000` || process.env.URL;

const baseAPI = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default baseAPI;
