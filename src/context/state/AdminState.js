import React, { createContext, useReducer } from "react";

import AdminReducer from "../reducers/AdminReducer";
import {
  AuthLogin,
  AddCategory,
  getCountCategory,
  updateCategory,
  deleteCategoryById
} from "../../api";
import {
  startLoading,
  stopLoading,
  adminLoginAction,
  getCategoryCountAction,
  getCategoryCountFail,
  adminLogoutAction,
  loginFailAction,
  deleteSucessfull,
  deleteUnSucessfull
} from "../actions/adminActions";

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
    dispatch(startLoading());
    await AddCategory(data)
      .then(res => {
        if (res.status === 201) {
          getCountCategory()
            .then(res => {
              dispatch(stopLoading());
              if (res.status === 200) {
                dispatch(getCategoryCountAction(res.data));
              }
            })
            .catch(err => {
              dispatch(getCategoryCountFail(err));
            });
        }
      })
      .catch(error => console.log(error));
  };

  const getCategoryCount = async () => {
    dispatch(startLoading());
    await getCountCategory()
      .then(res => {
        dispatch(stopLoading());
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
        getCategoryCount();
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
