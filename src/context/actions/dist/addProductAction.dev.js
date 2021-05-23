"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductSucessfull = getProductSucessfull;
exports.deleteProduct = deleteProduct;
exports.addProductSucess = addProductSucess;
exports.productAction = void 0;
var productAction = {
  ADD_PRODUCT: "ADD_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  GET_PRODUCT_SUCESSFULL: "GET_PRODUCT_SUCESSFULL",
  PRODUCT_FAILED: "PRODUCT_FAILED"
};
exports.productAction = productAction;

function getProductSucessfull(data) {
  return {
    type: productAction.GET_PRODUCT_SUCESSFULL,
    data: data
  };
}

function deleteProduct(data) {
  return {
    type: productAction.DELETE_PRODUCT,
    data: data
  };
}

function addProductSucess(data) {
  return {
    type: productAction.ADD_PRODUCT,
    data: data
  };
}