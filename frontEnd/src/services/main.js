import api from "src/configs/api";

const getAllPost = () => api.get("").then((res) => res || false);

export { getAllPost };
