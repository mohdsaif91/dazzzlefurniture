"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gotProductIdSucessfull = gotProductIdSucessfull;
exports.gotProductIdUnSucessfull = gotProductIdUnSucessfull;
exports.getProductSucessfull = getProductSucessfull;
exports.getProductUnSucessfull = getProductUnSucessfull;
exports.updateProductSucess = updateProductSucess;
exports.updateProductUnSucess = updateProductUnSucess;
exports.addProductSucess = addProductSucess;
exports.addProductFail = addProductFail;
exports.deleteSucessfullProduct = deleteSucessfullProduct;
exports.deleteUnsucessfull = deleteUnsucessfull;
exports.startLoading = startLoading;
exports.stopLoading = stopLoading;
exports.productAction = void 0;

var _LoadingAction = require("./LoadingAction");

var productAction = {
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
  GOT_PRODUCT_ID_UN_SUCESSFULL: "GOT_PRODUCT_ID_UN_SUCESSFULL"
};
exports.productAction = productAction;

function gotProductIdSucessfull(data) {
  return {
    type: productAction.GOT_PRODUCT_ID_SUCESSFULL,
    data: data
  };
}

function gotProductIdUnSucessfull(data) {
  return {
    type: productAction.GOT_PRODUCT_ID_UN_SUCESSFULL,
    data: data
  };
}

function getProductSucessfull(data) {
  return {
    type: productAction.GET_PRODUCT_SUCESSFULL,
    data: data
  };
}

function getProductUnSucessfull(data) {
  return {
    type: productAction.GET_PRODUCT_UNSUCESSFULL,
    data: data
  };
}

function updateProductSucess(data) {
  return {
    type: productAction.UPDATE_PRODUCT_SUCESSFULL,
    data: data
  };
}

function updateProductUnSucess(data) {
  return {
    type: productAction.UPDATE_PRODUCT_UNSUCESSFULL,
    data: data
  };
}

function addProductSucess(data) {
  return {
    type: productAction.ADD_PRODUCT_SUCESS,
    data: data
  };
}

function addProductFail(data) {
  return {
    type: productAction.ADD_PRODUCT_FAIL,
    data: data
  };
}

function deleteSucessfullProduct(data) {
  return {
    type: productAction.DELETE_PRODUCT_SUCESSFULL,
    error: false,
    data: data
  };
}

function deleteUnsucessfull(err) {
  return {
    type: productAction.DELETE_PRODUCT_UNSUCESSFULL,
    error: true,
    err: err
  };
}

function startLoading() {
  return {
    type: _LoadingAction.loadingAction.START_LOADING,
    data: true
  };
}

function stopLoading() {
  return {
    type: _LoadingAction.loadingAction.STOP_LOADING,
    data: false
  };
}