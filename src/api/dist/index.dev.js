"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductLatestIdApi = exports.updateProductApi = exports.deleteProductApi = exports.getProductApi = exports.addProductApi = exports.deleteCategoryById = exports.updateCategory = exports.getCountCategory = exports.AddCategory = exports.AuthLogin = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = "https://dazzlefurniture.herokuapp.com"; // const url = "http://localhost:5000";
//Admin

var AuthLogin = function AuthLogin(data) {
  return _axios.default.post("".concat(url, "/v1/login"), data);
}; //category


exports.AuthLogin = AuthLogin;

var AddCategory = function AddCategory(data) {
  return _axios.default.post("".concat(url, "/v1/category/add"), data);
};

exports.AddCategory = AddCategory;

var getCountCategory = function getCountCategory() {
  return _axios.default.get("".concat(url, "/v1/category"));
};

exports.getCountCategory = getCountCategory;

var updateCategory = function updateCategory(updatedData) {
  return _axios.default.patch("".concat(url, "/v1/category/updateCategory"), updatedData);
};

exports.updateCategory = updateCategory;

var deleteCategoryById = function deleteCategoryById(id, imageName, categoryName) {
  return _axios.default.delete("".concat(url, "/v1/category/delete/").concat(id, "/").concat(imageName, "/").concat(categoryName));
}; //product


exports.deleteCategoryById = deleteCategoryById;

var addProductApi = function addProductApi(data) {
  return _axios.default.post("".concat(url, "/v1/product/add"), data);
};

exports.addProductApi = addProductApi;

var getProductApi = function getProductApi(category) {
  return _axios.default.get("".concat(url, "/v1/product/").concat(category));
};

exports.getProductApi = getProductApi;

var deleteProductApi = function deleteProductApi(id, imageName) {
  return _axios.default.delete("".concat(url, "/v1/product/").concat(id, "/").concat(imageName));
};

exports.deleteProductApi = deleteProductApi;

var updateProductApi = function updateProductApi(data) {
  return _axios.default.patch("".concat(url, "/v1/product"), data);
};

exports.updateProductApi = updateProductApi;

var getProductLatestIdApi = function getProductLatestIdApi() {
  return _axios.default.get("".concat(url, "/v1/product/Id"));
};

exports.getProductLatestIdApi = getProductLatestIdApi;