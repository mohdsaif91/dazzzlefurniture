import { loadingAction } from "./LoadingAction";

export const productAction = {
  ADD_PRODUCT_SUCESS: "ADD_PRODUCT_SUCESS",
  ADD_PRODUCT_FAIL: "ADD_PRODUCT_FAIL",
  DELETE_PRODUCT_SUCESSFULL: "DELETE_PRODUCT_SUCESSFULL",
  DELETE_PRODUCT_UNSUCESSFULL: "DELETE_PRODUCT_UNSUCESSFULL",
  UPDATE_PRODUCT_SUCESSFULL: "UPDATE_PRODUCT_SUCESSFULL",
  UPDATE_PRODUCT_UNSUCESSFULL: "UPDATE_PRODUCT_UNSUCESSFULL",
  GET_PRODUCT_SUCESSFULL: "GET_PRODUCT_SUCESSFULL",
  GET_PRODUCT_UNSUCESSFULL: "GET_PRODUCT_UNSUCESSFULL",
  PRODUCT_FAILED: "PRODUCT_FAILED",
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING"
};

export function getProductSucessfull(data) {
  return {
    type: productAction.GET_PRODUCT_SUCESSFULL,
    data
  };
}
export function getProductUnSucessfull(data) {
  return {
    type: productAction.GET_PRODUCT_UNSUCESSFULL,
    data
  };
}

export function updateProductSucess(data) {
  return {
    type: productAction.UPDATE_PRODUCT_SUCESSFULL,
    data
  };
}

export function updateProductUnSucess(data) {
  return {
    type: productAction.UPDATE_PRODUCT_UNSUCESSFULL,
    data
  };
}

export function addProductSucess(data) {
  return {
    type: productAction.ADD_PRODUCT_SUCESS,
    data
  };
}

export function addProductFail(data) {
  return {
    type: productAction.ADD_PRODUCT_FAIL,
    data
  };
}

export function deleteSucessfullProduct(data) {
  return {
    type: productAction.DELETE_PRODUCT_SUCESSFULL,
    error: false,
    data
  };
}

export function deleteUnsucessfull(err) {
  return {
    type: productAction.DELETE_PRODUCT_UNSUCESSFULL,
    error: true,
    err
  };
}
export function startLoading() {
  return {
    type: loadingAction.START_LOADING,
    data: true
  };
}

export function stopLoading() {
  return {
    type: loadingAction.STOP_LOADING,
    data: false
  };
}
