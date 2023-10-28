import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loading from "./util/Loading";
import Header from "./Components/Header/Header";
import AdminSideBar from "./AdminPages/AdminSideBar/AdminSideBar";

import style from "./global.module.scss";
import PrivateRoute from "./util/PrivateRoute";

const LoginPage = React.lazy(() => import("./AdminPages/Login/Login"));
const AdminHome = React.lazy(() => import("./AdminPages/Home/AdminHome"));
const AdminCategory = React.lazy(() =>
  import("./AdminPages/Category/AdminCategory")
);
const AdminPeoduct = React.lazy(() =>
  import("./AdminPages/Product/AdminProduct")
);

function App() {
  const location = useLocation();

  console.log(location.pathname);
  return (
    <div className={style.mainApp}>
      <Header />
      <div className={style.pageContainer}>
        {location.pathname.includes("admin") && <AdminSideBar />}
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loading />}>
                <LoginPage />
              </Suspense>
            }
          />
          {/* start admin routes */}
          <Route path="/adminHome" element={<PrivateRoute />}>
            <Route
              path="/adminHome"
              element={
                <Suspense fallback={<Loading />}>
                  <AdminHome />
                </Suspense>
              }
            />
          </Route>
          <Route path="/adminProduct" element={<PrivateRoute />}>
            <Route
              path="/adminProduct"
              element={
                <Suspense fallback={<Loading />}>
                  <AdminPeoduct />
                </Suspense>
              }
            />
          </Route>
          <Route path="/adminCategory" element={<PrivateRoute />}>
            <Route
              path="/adminCategory"
              element={
                <Suspense fallback={<Loading />}>
                  <AdminCategory />
                </Suspense>
              }
            />
          </Route>
          {/* end admin routes */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
