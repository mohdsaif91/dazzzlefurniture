import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const adminAccess = localStorage.getItem("access");
  return adminAccess === "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
