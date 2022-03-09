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
  STOP_LOADING: "STOP_LOADING",
  GOT_PRODUCT_ID_SUCESSFULL: "GOT_PRODUCT_ID_SUCESSFULL",
  GOT_PRODUCT_ID_UN_SUCESSFULL: "GOT_PRODUCT_ID_UN_SUCESSFULL",
  GET_BY_PRODUCT_ID_SUCCESSFUL: "GET_BY_PRODUCT_ID_SUCCESSFUL",
  GET_BY_PRODUCT_ID_UNSUCCESSFUL: "GET_BY_PRODUCT_ID_UNSUCCESSFUL",
  GET_RANDOM_PRODUCT_SUCCESS: "GET_RANDOM_PRODUCT_SUCCESS",
  GET_RANDOM_PRODUCT_UNSUCCESS: "GET_RANDOM_PRODUCT_UNSUCCESS",
  RESET_SINGLE_PRODUCT: "RESET_SINGLE_PRODUCT",
};

export function reSetSingleProduct() {
  return {
    type: productAction.RESET_SINGLE_PRODUCT,
  };
}

export function getProductByIdSuccessful(data) {
  return {
    type: productAction.GET_BY_PRODUCT_ID_SUCCESSFUL,
    data,
  };
}

export function getProductByIdUnSuccessful(data) {
  return {
    type: productAction.GET_BY_PRODUCT_ID_UNSUCCESSFUL,
    data,
  };
}

export function gotRandomProductSucessfull(data) {
  return {
    type: productAction.GET_RANDOM_PRODUCT_SUCCESS,
    data,
  };
}

export function gotRandomProductUnSucessfull(data) {
  return {
    type: productAction.GET_PRODUCT_UNSUCESSFULL,
    data,
  };
}

export function gotProductIdSucessfull(data) {
  return {
    type: productAction.GOT_PRODUCT_ID_SUCESSFULL,
    data,
  };
}

export function gotProductIdUnSucessfull(data) {
  return {
    type: productAction.GOT_PRODUCT_ID_UN_SUCESSFULL,
    data,
  };
}

export function getProductSucessfull(data) {
  return {
    type: productAction.GET_PRODUCT_SUCESSFULL,
    data,
  };
}
export function getProductUnSucessfull(data) {
  return {
    type: productAction.GET_PRODUCT_UNSUCESSFULL,
    data,
  };
}

export function updateProductSucess(data) {
  return {
    type: productAction.UPDATE_PRODUCT_SUCESSFULL,
    data,
  };
}

export function updateProductUnSucess(data) {
  return {
    type: productAction.UPDATE_PRODUCT_UNSUCESSFULL,
    data,
  };
}

export function addProductSucess(data) {
  return {
    type: productAction.ADD_PRODUCT_SUCESS,
    data,
  };
}

export function addProductFail(data) {
  return {
    type: productAction.ADD_PRODUCT_FAIL,
    data,
  };
}

export function deleteSucessfullProduct(data) {
  return {
    type: productAction.DELETE_PRODUCT_SUCESSFULL,
    error: false,
    data,
  };
}

export function deleteUnsucessfull(err) {
  return {
    type: productAction.DELETE_PRODUCT_UNSUCESSFULL,
    error: true,
    err,
  };
}
export function startLoading() {
  return {
    type: loadingAction.START_LOADING,
    data: true,
  };
}

export function stopLoading() {
  return {
    type: loadingAction.STOP_LOADING,
    data: false,
  };
}
