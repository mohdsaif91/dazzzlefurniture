import React, { createContext, useContext, useReducer } from "react";

import AdminReducer from "../reducers/AdminReducer";
import {
  AuthLogin,
  AddCategory,
  getCountCategory,
  updateCategory,
  deleteCategoryById
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
  addCategoryUnSucess
} from "../actions/adminActions";

import { startLoading, stopLoading } from "../actions/LoadingAction";
import { LoadingContex } from "./LoadingState";

const initialState = {
  adminAccess: { message: "", login: false },
  category: {},
  showLoading: false
};

//create createContext
export const AdminContext = createContext(initialState);

//Provider Component
export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  const { startLoadingMeth, stopLoadingMeth } = useContext(LoadingContex);
  //Actions
  const adminLogin = async data => {
    dispatch(startLoading());
    await AuthLogin(data)
      .then(res => {
        if (res.status === 200) {
          dispatch(adminLoginAction());
          dispatch(stopLoading("adminLogin"));
        }
      })
      .catch(error => {
        dispatch(loginFailAction());
      });
  };

  const refreshLogin = () => {
    dispatch(adminLoginAction());
  };

  const adminLogOut = () => {
    dispatch(adminLogoutAction());
  };

  const addMethodCategory = async data => {
    startLoadingMeth();
    // dispatch(startLoading());
    await AddCategory(data)
      .then(res => {
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
      .catch(error => dispatch(addCategoryUnSucess(error)));
  };

  const getCategoryCount = async () => {
    startLoadingMeth();
    // dispatch(startLoading());
    await getCountCategory()
      .then(res => {
        stopLoadingMeth();
        // dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(getCategoryCountAction(res.data));
        }
      })
      .catch(err => {
        dispatch(getCategoryCountFail(err));
      });
  };

  const updateEditCategory = async updatedData => {
    dispatch(startLoading());
    await updateCategory(updatedData)
      .then(res => {
        dispatch(stopLoading());
        // getCategoryCount();
      })
      .catch(error => console.log(error));
  };

  const deleteCategory = async (id, imageName) => {
    dispatch(startLoading());
    await deleteCategoryById(id, imageName)
      .then(res => {
        dispatch(stopLoading());
        if (res.status === 200) {
          dispatch(deleteSucessfull(res.data));
        } else {
          throw res;
        }
      })
      .catch(err => {});
  };

  // const startLoadingMeth = () => {
  //   dispatch(startLoading());
  // };

  // const stopLoadingMeth = () => {
  //   dispatch(stopLoading());
  // };

  return (
    <AdminContext.Provider
      value={{
        adminAccess: state.adminAccess,
        category: state.category,
        showLoading: state.showLoading,
        adminLogin,
        adminLogOut,
        refreshLogin,
        addMethodCategory,
        getCategoryCount,
        updateEditCategory,
        deleteCategory
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
