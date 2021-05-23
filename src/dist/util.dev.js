"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFormData = void 0;

var getFormData = function getFormData(data) {
  var formData = new FormData();
  Object.keys(data).forEach(function (key) {
    formData.append(key, data[key]);
  });
  return formData;
};

exports.getFormData = getFormData;