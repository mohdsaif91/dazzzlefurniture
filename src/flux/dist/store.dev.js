"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = require("events");

var _dispatcher = _interopRequireDefault(require("./dispatcher"));

var _constants = _interopRequireDefault(require("./constants"));

var _sidebarNavItems = _interopRequireDefault(require("../data/sidebar-nav-items"));

var _adminSidebadNavItems = _interopRequireDefault(require("../data/admin-sidebad-nav-items"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _store = {
  menuVisible: false,
  navItems: (0, _sidebarNavItems.default)(),
  adminNavItem: (0, _adminSidebadNavItems.default)()
};

var Store =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Store, _EventEmitter);

  function Store() {
    var _this;

    _classCallCheck(this, Store);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Store).call(this));
    _this.registerToActions = _this.registerToActions.bind(_assertThisInitialized(_this));
    _this.toggleSidebar = _this.toggleSidebar.bind(_assertThisInitialized(_this));

    _dispatcher.default.register(_this.registerToActions.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(Store, [{
    key: "registerToActions",
    value: function registerToActions(_ref) {
      var actionType = _ref.actionType,
          payload = _ref.payload;

      switch (actionType) {
        case _constants.default.TOGGLE_SIDEBAR:
          this.toggleSidebar();
          break;

        default:
      }
    }
  }, {
    key: "toggleSidebar",
    value: function toggleSidebar() {
      _store.menuVisible = !_store.menuVisible;
      this.emit(_constants.default.CHANGE);
    }
  }, {
    key: "getMenuState",
    value: function getMenuState() {
      return _store.menuVisible;
    }
  }, {
    key: "getSidebarItems",
    value: function getSidebarItems() {
      return _store.navItems;
    }
  }, {
    key: "getAdminNavItems",
    value: function getAdminNavItems() {
      return _store.adminNavItem;
    }
  }, {
    key: "addChangeListener",
    value: function addChangeListener(callback) {
      this.on(_constants.default.CHANGE, callback);
    }
  }, {
    key: "removeChangeListener",
    value: function removeChangeListener(callback) {
      this.removeListener(_constants.default.CHANGE, callback);
    }
  }]);

  return Store;
}(_events.EventEmitter);

var _default = new Store();

exports.default = _default;