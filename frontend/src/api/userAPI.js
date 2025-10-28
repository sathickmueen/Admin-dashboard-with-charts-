import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/users" });

export const getUsers = () => API.get("/");
export const createUser = (user) => API.post("/", user);
export const updateUser = (id, user) => API.put(`/${id}`, user);
export const deleteUser = (id) => API.delete(`/${id}`);
