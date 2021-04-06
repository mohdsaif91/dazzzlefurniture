"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  return [{
    title: "Home",
    htmlBefore: '<i class="material-icons">home</i>',
    to: "/adminHome"
  }, {
    title: "Add Category",
    htmlBefore: '<i class="material-icons">category</i>',
    to: "/addCategory"
  }, {
    title: "Add Product",
    htmlBefore: '<i class="material-icons">note_add</i>',
    to: "/addProduct"
  }];
}