"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminLoginAction = adminLoginAction;
exports.getCategoryCountAction = getCategoryCountAction;
exports.getCategoryCountFail = getCategoryCountFail;
exports.adminLogoutAction = adminLogoutAction;
exports.loginFailAction = loginFailAction;
exports.deleteSucessfull = deleteSucessfull;
exports.deleteUnSucessfull = deleteUnSucessfull;
exports.addCategorySucess = addCategorySucess;
exports.addCategoryUnSucess = addCategoryUnSucess;
exports.updateCategorySucess = updateCategorySucess;
exports.updateCategoryUnSucess = updateCategoryUnSucess;
exports.adminActions = void 0;

var _LoadingAction = require("./LoadingAction");

var adminActions = {
  ADMIN_LOGIN: "ADMIN_LOGIN",
  ADMIN_LOGOUT: "ADMIN_LOGOUT",
  DELETE_SUCESSFULL: "DELETE_SUCESSFULL",
  DELETE_UNSUCESSFULL: "DELETE_UNSUCESSFULL",
  GET_CATEGORY_COUNT: "GET_CATEGORY_COUNT",
  GET_CATEGORY_COUNT_FAIL: "GET_CATEGORY_COUNT_FAIL",
  LOGIN_FAIL: "LOGIN_FAIL",
  ADD_CATEGORY_SUCESS: "ADD_CATEGORY_SUCESS",
  ADD_CATEGORY_UNSUCESS: "ADD_CATEGORY_UNSUCESS",
  UPDATED_CATEGORY_SUCESS: "UPDATED_CATEGORY_SUCESS",
  UPDATED_CATEGORY_UNSUCESS: "UPDATED_CATEGORY_UNSUCESS"
};
exports.adminActions = adminActions;

function adminLoginAction() {
  return {
    type: adminActions.ADMIN_LOGIN,
    data: {
      message: "loginSucessfull",
      login: true
    }
  };
}

function getCategoryCountAction(data) {
  return {
    type: adminActions.GET_CATEGORY_COUNT,
    data: data
  };
}

function getCategoryCountFail(err) {
  return {
    type: adminActions.GET_CATEGORY_COUNT_FAIL,
    data: {
      sucessfull: false,
      message: err
    }
  };
}

function adminLogoutAction() {
  return {
    type: adminActions.ADMIN_LOGOUT,
    data: false
  };
}

function loginFailAction() {
  return {
    type: adminActions.LOGIN_FAIL,
    data: {
      message: "loginFailed",
      login: false
    }
  };
}

function deleteSucessfull(data) {
  return {
    type: adminActions.DELETE_SUCESSFULL,
    data: data
  };
}

function deleteUnSucessfull(error) {
  return {
    type: adminActions.DELETE_UNSUCESSFULL,
    data: error
  };
}

function addCategorySucess(data) {
  return {
    type: adminActions.ADD_CATEGORY_SUCESS,
    data: data
  };
}

function addCategoryUnSucess(data) {
  return {
    type: adminActions.ADD_CATEGORY_UNSUCESS,
    data: data
  };
}

function updateCategorySucess(data) {
  return {
    type: adminActions.UPDATED_CATEGORY_SUCESS,
    data: data
  };
}

function updateCategoryUnSucess(data) {
  return {
    type: adminActions.UPDATED_CATEGORY_UNSUCESS,
    data: data
  };
}