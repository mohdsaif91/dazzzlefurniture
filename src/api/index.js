import Axios from "axios";

const url = "https://dazzlefurniture.herokuapp.com";
// const url = "http://localhost:5000";

//Admin
export const AuthLogin = (data) => Axios.post(`${url}/v1/login`, data);
export const SignupAPI = (data) => Axios.post(`${url}/v1/signUp`, data);

//category
export const AddCategory = (data) => Axios.post(`${url}/v1/category/add`, data);
export const getCountCategory = () => Axios.get(`${url}/v1/category`);
export const updateCategory = (updatedData) =>
  Axios.patch(`${url}/v1/category/updateCategory`, updatedData);
export const deleteCategoryById = (id, imageName, categoryName) =>
  Axios.delete(`${url}/v1/category/delete/${id}/${imageName}/${categoryName}`);

//product
export const addProductApi = (data) =>
  Axios.post(`${url}/v1/product/add`, data);
export const getProductApi = (category) =>
  Axios.get(`${url}/v1/product/${category}`);
export const deleteProductApi = (id, imageName) =>
  Axios.delete(`${url}/v1/product/${id}/${imageName}`);
export const updateProductApi = (data) =>
  Axios.patch(`${url}/v1/product`, data);
export const getProductLatestIdApi = () => Axios.get(`${url}/v1/product/Id`);
export const getRandomProductAPI = () => Axios.get(`${url}/v1/randomProducts`);
export const addHotProductAPI = (id) =>
  Axios.post(`${url}/v1/hotProduct/add`, id);
export const getProductByIdAPI = (id) =>
  Axios.get(`${url}/v1/product/getProductById/${id}`);
