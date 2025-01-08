import api from "src/configs/api";

const getAllPost = () => api.get("post").then((res) => res || false);

export { getAllPost };
