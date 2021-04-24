import React from "react";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import SignIn from "./auth/SignIn";
import AdminHome from "./adminComponents/AdminHome";
import AddProduct from "./adminComponents/AddProduct";
import AddCategory from "./adminComponents/AddCategory";
import Categories from "./components/Pages/Categories";

export default [
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: BlogPosts
  },
  { path: "/signIn", layout: DefaultLayout, component: SignIn },
  { path: "/adminHome/admin", layout: DefaultLayout, component: AdminHome },
  { path: "/addProduct/admin", layout: DefaultLayout, component: AddProduct },
  { path: "/addCategory/admin", layout: DefaultLayout, component: AddCategory },
  { path: "/categories", layout: DefaultLayout, component: Categories }
];
