"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(state, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        state: state
      };

    default:
      break;
  }
};

exports.default = _default;