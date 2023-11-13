import React, { Suspense, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Loading from "./util/Loading";
import Header from "./Components/Header/Header";
import AdminSideBar from "./AdminPages/AdminSideBar/AdminSideBar";
import MobileSideBar from "./Components/MobileSideBar/MobileSideBar";
import ContactSideBarCompo from "./Components/ContactSideBar/ContactSideBarCompo";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./util/PrivateRoute";

import style from "./global.module.scss";

const LoginPage = React.lazy(() => import("./Pages/Login/Login"));
const AdminHome = React.lazy(() => import("./AdminPages/Home/AdminHome"));
const AdminCategory = React.lazy(() =>
  import("./AdminPages/Category/AdminCategory")
);
const AdminPeoduct = React.lazy(() =>
  import("./AdminPages/Product/AdminProduct")
);
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Shop = React.lazy(() => import("./Pages/Shop/Shop"));

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [contactSideBar, setContaSideBar] = useState(false);

  const location = useLocation();

  return (
    <div className={style.mainApp}>
      <Header
        openFlag={openSideBar}
        onOpen={(flag) => setOpenSideBar(flag)}
        openContactBar={contactSideBar}
        onOpenContact={(flag) => setContaSideBar(flag)}
      />
      {openSideBar && (
        <MobileSideBar
          onClose={(flag) => setOpenSideBar(flag)}
          openFlag={openSideBar}
        />
      )}
      {contactSideBar && (
        <ContactSideBarCompo closeContactBar={() => setContaSideBar(false)} />
      )}
      <div
        className={
          location.pathname.includes("admin")
            ? style.adminPageContainer
            : style.pageContainer
        }
      >
        {location.pathname.includes("admin") && window.screen.width > 440 && (
          <AdminSideBar />
        )}
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loading />}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/shop"
            element={
              <Suspense>
                <Shop />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense>
                <About />
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
      {!location.pathname.includes("admin") && <Footer />}
    </div>
  );
}

export default App;
