import { loadingAction } from "./LoadingAction";

export const adminActions = {
  ADD_HOT_PRODUCT_SUCCESS: "ADD_HOT_PRODUCT_SUCCESS",
  ADD_HOT_PRODUCT_FAIL: "ADD_HOT_PRODUCT_FAIL",
  ADMIN_LOGIN: "ADMIN_LOGIN",
  ADMIN_LOGOUT: "ADMIN_LOGOUT",
  DELETE_SUCESSFULL: "DELETE_SUCESSFULL",
  DELETE_UNSUCESSFULL: "DELETE_UNSUCESSFULL",
  GET_CATEGORY_COUNT: "GET_CATEGORY_COUNT",
  GET_CATEGORY_COUNT_FAIL: "GET_CATEGORY_COUNT_FAIL",
  GET_ADMIN_PRODUCT_SUCCESS: "GET_ADMIN_PRODUCT_SUCCESS",
  GET_ADMIN_PRODUCT_FAIL: "GET_ADMIN_PRODUCT_FAIL",
  LOGIN_FAIL: "LOGIN_FAIL",
  ADD_CATEGORY_SUCESS: "ADD_CATEGORY_SUCESS",
  ADD_CATEGORY_UNSUCESS: "ADD_CATEGORY_UNSUCESS",
  UPDATED_CATEGORY_SUCESS: "UPDATED_CATEGORY_SUCESS",
  UPDATED_CATEGORY_UNSUCESS: "UPDATED_CATEGORY_UNSUCESS",
  SEND_ENQUERY_SUCCESS: "SEND_ENQUERY_SUCCESS",
  SEND_ENQUERY_UNSUCCESS: "SEND_ENQUERY_UNSUCCESS",
  SEND_BUSNIESS_INFO_SUCCESS: "SEND_BUSNIESS_INFO_SUCCESS",
  SEND_BUSNIESS_INFO_UNSUCCESS: "SEND_BUSNIESS_INFO_UNSUCCESS",
  GET_BUSNIESS_INFO_SUCCESS: "GET_BUSNIESS_INFO_SUCCESS",
  GET_BUSNIESS_INFO_UNSUCCESS: "GET_BUSNIESS_INFO_UNSUCCESS",
};

export function getBusniessInfoSuccess(data) {
  return {
    type: adminActions.GET_BUSNIESS_INFO_SUCCESS,
    data,
  };
}

export function getBusniessInfoUnSuccess() {
  return {
    type: adminActions.GET_BUSNIESS_INFO_UNSUCCESS,
  };
}

export function sendBusniessInfoSuccess(data) {
  return {
    type: adminActions.SEND_BUSNIESS_INFO_SUCCESS,
    data,
  };
}

export function sendBusniessInfoUnSuccess() {
  return {
    type: adminActions.SEND_BUSNIESS_INFO_UNSUCCESS,
  };
}
export function sendEnquerySucces() {
  return {
    type: adminActions.SEND_ENQUERY_SUCCESS,
    data: "Email Send !",
  };
}

export function sendEnqueryUnSuccess() {
  return {
    type: adminActions.SEND_ENQUERY_UNSUCCESS,
    data: "Email send Unsuccessfull",
  };
}

export function addhotProductSuccess(data) {
  return {
    type: adminActions.ADD_HOT_PRODUCT_SUCCESS,
    data,
  };
}

export function addhotProductFail(data) {
  return {
    type: adminActions.ADD_HOT_PRODUCT_FAIL,
    data,
  };
}

export function getAdminProductFail(data) {
  return {
    type: adminActions.GET_ADMIN_PRODUCT_FAIL,
    data,
  };
}

export function getAdminProductSuccess(data) {
  return {
    type: adminActions.GET_ADMIN_PRODUCT_SUCCESS,
    data,
  };
}

export function adminLoginAction() {
  return {
    type: adminActions.ADMIN_LOGIN,
    data: { message: "loginSucessfull", login: true },
  };
}

export function getCategoryCountAction(data) {
  return {
    type: adminActions.GET_CATEGORY_COUNT,
    data,
  };
}

export function getCategoryCountFail(err) {
  return {
    type: adminActions.GET_CATEGORY_COUNT_FAIL,
    data: {
      sucessfull: false,
      message: err,
    },
  };
}

export function adminLogoutAction() {
  return {
    type: adminActions.ADMIN_LOGOUT,
    data: false,
  };
}

export function loginFailAction() {
  return {
    type: adminActions.LOGIN_FAIL,
    data: {
      message: "loginFailed",
      login: false,
    },
  };
}

export function deleteSucessfull(data) {
  return {
    type: adminActions.DELETE_SUCESSFULL,
    data,
  };
}

export function deleteUnSucessfull(error) {
  return {
    type: adminActions.DELETE_UNSUCESSFULL,
    data: error,
  };
}

export function addCategorySucess(data) {
  return {
    type: adminActions.ADD_CATEGORY_SUCESS,
    data,
  };
}

export function addCategoryUnSucess(data) {
  return {
    type: adminActions.ADD_CATEGORY_UNSUCESS,
    data,
  };
}

export function updateCategorySucess(data) {
  return {
    type: adminActions.UPDATED_CATEGORY_SUCESS,
    data,
  };
}

export function updateCategoryUnSucess(data) {
  return {
    type: adminActions.UPDATED_CATEGORY_UNSUCESS,
    data,
  };
}
