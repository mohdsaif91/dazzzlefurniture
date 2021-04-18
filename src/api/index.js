import Axios from "axios";

const url = "https://dazzlefurniture.herokuapp.com";
// const url = "http://localhost:5000";

//Admin
export const AuthLogin = data => Axios.post(`${url}/v1/login`, data);

//category
export const AddCategory = data => Axios.post(`${url}/v1/category/add`, data);
export const getCountCategory = () => Axios.get(`${url}/v1/category`);
export const updateCategory = updatedData =>
  Axios.patch(`${url}/v1/category/updateCategory`, updatedData);
