import React, { createContext, useContext, useReducer } from "react";

import AdminReducer from "../reducers/AdminReducer";
import {
  AuthLogin,
  AddCategory,
  getCountCategory,
  updateCategory,
  deleteCategoryById,
  getProductApi,
  addHotProductAPI,
} from "../../api";
import {
  adminLoginAction,
  getCategoryCountAction,
  getCategoryCountFail,
  adminLogoutAction,
  loginFailAction,
  deleteSucessfull,
  deleteUnSucessfull,
  addCategorySucess,
  addCategoryUnSucess,
  updateCategorySucess,
  updateCategoryUnSucess,
  getAdminProductFail,
  getAdminProductSuccess,
  addhotProductSuccess,
  addhotProductFail,
} from "../actions/adminActions";

import { startLoading, stopLoading } from "../actions/LoadingAction";
import { LoadingContex } from "./LoadingState";

const loginData = sessionStorage.getItem("loginData");

const initialState = {
  adminAccess: loginData
    ? JSON.parse(loginData)
    : { message: "", login: false },
  category: {},
  showLoading: false,
};

//create createContext
export const AdminContext = createContext(initialState);

//Provider Component
export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  const { startLoadingMeth, stopLoadingMeth } = useContext(LoadingContex);
  //Actions
  const adminLogin = async (data) => {
    dispatch(startLoading());
    await AuthLogin(data)
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem("adminAccess", true);
          dispatch(adminLoginAction());
          sessionStorage.setItem(
            "loginData",
            JSON.stringify({ message: "loginSucessfull", login: true })
          );
          dispatch(stopLoading("adminLogin"));
        }
      })
      .catch((error) => {
        dispatch(loginFailAction());
      });
  };

  const refreshLogin = () => {
    sessionStorage.setItem("adminAccess", true);
    dispatch(adminLoginAction());
  };

  const adminLogOut = () => {
    sessionStorage.clear();
    dispatch(adminLogoutAction());
  };

  const addMethodCategory = async (data) => {
    startLoadingMeth();
    // dispatch(startLoading());
    await AddCategory(data)
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 201) {
          dispatch(addCategorySucess(res.data));
          // getCountCategory()
          //   .then(res => {
          //     dispatch(stopLoading());
          //     if (res.status === 201) {
          //       dispatch(getCategoryCountAction(res.data));
          //     }
          //   })
          //   .catch(err => {
          //     dispatch(getCategoryCountFail(err));
          //   });
        } else {
          dispatch(addCategoryUnSucess(res.data));
        }
      })
      .catch((error) => dispatch(addCategoryUnSucess(error)));
  };

  const getCategoryCount = async () => {
    startLoadingMeth();
    await getCountCategory()
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 200) {
          dispatch(getCategoryCountAction(res.data));
        }
      })
      .catch((err) => {
        dispatch(getCategoryCountFail(err));
      });
  };

  const updateEditCategory = async (updatedData) => {
    startLoadingMeth();
    await updateCategory(updatedData)
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 201) {
          dispatch(updateCategorySucess(res.data));
        } else {
          dispatch(updateCategoryUnSucess(res.data));
        }
      })
      .catch((error) => dispatch(updateCategoryUnSucess(error)));
  };

  const deleteCategory = async (id, imageName, categoryName, imageId) => {
    startLoadingMeth();
    await deleteCategoryById(id, imageName, categoryName, imageId)
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 200) {
          dispatch(deleteSucessfull(res.data));
        } else {
          throw res;
        }
      })
      .catch((err) => {
        dispatch(deleteUnSucessfull(err));
      });
  };

  const getAdminProduct = async (categoryName) => {
    startLoadingMeth();
    await getProductApi(categoryName)
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 200) {
          dispatch(getAdminProductSuccess(res.data));
        } else {
          dispatch(getAdminProductFail());
        }
      })
      .catch((err) => {
        stopLoadingMeth();
        dispatch(getAdminProductFail(err));
      });
  };

  const addHotProduct = async (id) => {
    startLoadingMeth();
    await addHotProductAPI(id)
      .then((res) => {
        stopLoadingMeth();
        if (res.status === 200) {
          dispatch(addhotProductSuccess(res.data));
        } else {
          dispatch(addhotProductFail());
        }
      })
      .catch((err) => {
        stopLoadingMeth();
        dispatch(addhotProductFail(err));
      });
  };

  return (
    <AdminContext.Provider
      value={{
        adminAccess: state.adminAccess,
        adminProduct: state.adminProduct,
        category: state.category,
        showLoading: state.showLoading,
        categoryCount: state.categoryCount,
        productCount: state.productCount,
        addHotProduct,
        adminLogin,
        adminLogOut,
        refreshLogin,
        addMethodCategory,
        getAdminProduct,
        getCategoryCount,
        updateEditCategory,
        deleteCategory,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
