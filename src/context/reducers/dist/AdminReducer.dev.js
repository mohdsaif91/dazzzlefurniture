"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adminActions = require("../actions/adminActions");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(state, action) {
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
      return _objectSpread({}, state, {
        category: action.data
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

    case _adminActions.adminActions.ADD_CATEGORY_SUCESS:
      return _objectSpread({}, state, {
        error: false,
        category: [].concat(_toConsumableArray(state.category.category), [action.data])
      });

    case _adminActions.adminActions.ADD_CATEGORY_UNSUCESS:
      return _objectSpread({}, state, {
        error: true,
        category: action.data
      });

    case _adminActions.adminActions.DELETE_UNSUCESSFULL:
    default:
      return state;
  }
};

exports.default = _default;