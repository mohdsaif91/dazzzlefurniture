"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLoading = startLoading;
exports.stopLoading = stopLoading;
exports.loadingAction = void 0;
var loadingAction = {
  START_LOADING: "START_LOADING",
  STOP_LOADING: "STOP_LOADING"
};
exports.loadingAction = loadingAction;

function startLoading() {
  return {
    type: loadingAction.START_LOADING,
    data: true
  };
}

function stopLoading() {
  return {
    type: loadingAction.STOP_LOADING,
    data: false
  };
}