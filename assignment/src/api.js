import axios from "axios";

const API_URL = "http://localhost:3001/products";
const USERS_URL = "http://localhost:3001/users";

export const getProducts = () => axios.get(API_URL);
export const getProductById = (id) => axios.get(`${API_URL}/${id}`);
export const createProduct = (product) => axios.post(API_URL, product);
export const updateProduct = (id, product) =>
  axios.put(`${API_URL}/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${API_URL}/${id}`);

export const getUsers = () => axios.get(USERS_URL);
export const getUserByUsername = (username) =>
  axios.get(`${USERS_URL}?username=${username}`);
export const checkLogin = (username, password) =>
  axios.get(`${USERS_URL}?username=${username}&password=${password}`);
