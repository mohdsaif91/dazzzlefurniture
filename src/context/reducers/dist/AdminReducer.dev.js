"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adminActions = require("../actions/adminActions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(state, action) {
  console.log(action, "<>? ACTION");

  switch (action.type) {
    case _adminActions.adminActions.ADMIN_LOGIN:
      return _objectSpread({}, state, {
        adminAccess: action.data
      });

    case _adminActions.adminActions.ADMIN_LOGOUT:
      return _objectSpread({}, state, {
        adminAccess: action.data
      });

    case _adminActions.adminActions.LOGIN_FAIL:
      return _objectSpread({}, state, {
        adminAccess: action.data
      });

    case _adminActions.adminActions.GET_CATEGORY_COUNT:
      console.log(action.data, "?><");
      return _objectSpread({}, state, {
        category: action.data
      });

    case _adminActions.adminActions.START_LOADING:
      return _objectSpread({}, state, {
        showLoading: action.data
      });

    case _adminActions.adminActions.STOP_LOADING:
      return _objectSpread({}, state, {
        showLoading: action.data
      });

    case _adminActions.adminActions.DELETE_SUCESSFULL:
      var category = {
        category: state.category.category.filter(function (f) {
          return f._id !== action.data.id;
        })
      };
      return _objectSpread({}, state, {
        category: category
      });

    case _adminActions.adminActions.DELETE_UNSUCESSFULL:
    default:
      return state;
  }
};

exports.default = _default;