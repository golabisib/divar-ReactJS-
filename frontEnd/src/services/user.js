import api from "src/configs/api";
import cookiesUtils from "src/utils/cookie";

const { getCookie } = cookiesUtils;

const token = getCookie("accessToken");

const getProfile = () => api.get("user/whoami", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { getProfile };
