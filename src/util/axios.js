import Axios from "axios";
import { ErrorHandler } from "./Errorhandler";

export const onAuthenticated = async (payload, formData = false) => {
  const axiosApi = Axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: "https://dazzlefurnitureserver.onrender.com/",
    headers: {
      "Content-type": formData ? "multipart/form-data" : "application/json",
    },
  });
  const res = await axiosApi(payload.url, {
    method: payload.method,
    data: payload.data,
  });
  return res;
};
