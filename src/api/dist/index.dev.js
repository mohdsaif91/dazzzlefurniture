"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getCountCategory = exports.AddCategory = exports.AuthLogin = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const url = "https://dazzlefurniture.herokuapp.com";
var url = "http://localhost:5000"; //Admin

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