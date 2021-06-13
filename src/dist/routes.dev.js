"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _layouts = require("./layouts");

var _BlogOverview = _interopRequireDefault(require("./views/BlogOverview"));

var _UserProfileLite = _interopRequireDefault(require("./views/UserProfileLite"));

var _AddNewPost = _interopRequireDefault(require("./views/AddNewPost"));

var _Errors = _interopRequireDefault(require("./views/Errors"));

var _ComponentsOverview = _interopRequireDefault(require("./views/ComponentsOverview"));

var _Tables = _interopRequireDefault(require("./views/Tables"));

var _BlogPosts = _interopRequireDefault(require("./views/BlogPosts"));

var _SignIn = _interopRequireDefault(require("./auth/SignIn"));

var _AdminHome = _interopRequireDefault(require("./adminComponents/AdminHome"));

var _AddProduct = _interopRequireDefault(require("./adminComponents/AddProduct"));

var _AddCategory = _interopRequireDefault(require("./adminComponents/AddCategory"));

var _Categories = _interopRequireDefault(require("./components/Pages/Categories"));

var _Products = _interopRequireDefault(require("./components/Pages/Products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Layout Types
// Route Views
var _default = [{
  path: "/blog-overview",
  layout: _layouts.DefaultLayout,
  component: _BlogOverview.default
}, {
  path: "/user-profile-lite",
  layout: _layouts.DefaultLayout,
  component: _UserProfileLite.default
}, {
  path: "/add-new-post",
  layout: _layouts.DefaultLayout,
  component: _AddNewPost.default
}, {
  path: "/errors",
  layout: _layouts.DefaultLayout,
  component: _Errors.default
}, {
  path: "/components-overview",
  layout: _layouts.DefaultLayout,
  component: _ComponentsOverview.default
}, {
  path: "/tables",
  layout: _layouts.DefaultLayout,
  component: _Tables.default
}, {
  path: "/",
  exact: true,
  layout: _layouts.DefaultLayout,
  component: _BlogPosts.default
}, {
  path: "/signIn",
  layout: _layouts.DefaultLayout,
  component: _SignIn.default
}, {
  path: "/adminHome/admin",
  layout: _layouts.DefaultLayout,
  component: _AdminHome.default
}, {
  path: "/addProduct/admin",
  layout: _layouts.DefaultLayout,
  component: _AddProduct.default
}, {
  path: "/addCategory/admin",
  layout: _layouts.DefaultLayout,
  component: _AddCategory.default
}, {
  path: "/categories",
  layout: _layouts.DefaultLayout,
  component: _Categories.default
}, {
  pathc: "/products",
  layout: _layouts.DefaultLayout,
  component: _Products.default
}];
exports.default = _default;