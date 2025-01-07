import api from "src/configs/api";
const getProfile = () => api.get("user/whoami").then((res) => res || false);

const getPosts = () => api.get("post/my").then((res) => res || false);

const deletePost = (id) => api.delete(`post/delete/${id}`)

export { getProfile, getPosts, deletePost };
