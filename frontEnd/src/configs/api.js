import axios from "axios";
import cookiesUtils from "src/utils/cookie";

const { getCookie } = cookiesUtils;

const api = axios.create({
  baseURL: "http://localhost:3400/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;
