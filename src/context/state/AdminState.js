import React, { createContext, useReducer } from "react";
import AdminReducer from "../reducers/AdminReducer";
import {
  AuthLogin,
  AddCategory,
  getCountCategory,
  updateCategory
} from "../../api";

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
    await AuthLogin(data)
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: "ADMIN_LOGIN",
            data: { message: "loginSucessfull", login: true }
          });
        }
      })
      .catch(error => {
        dispatch({
          type: "LOGIN_FAIL",
          data: {
            message: "loginFailed",
            login: false
          }
        });
      });
  };

  const refreshLogin = () => {
    dispatch({
      type: "ADMIN_LOGIN",
      data: { message: "loginSucessfull", login: true }
    });
  };
  const ab = "";

  const adminLogOut = () => {
    dispatch({
      type: "ADMIN_LOGOUT",
      data: false
    });
  };
  const addMethodCategory = async data => {
    dispatch({
      type: "START_LOADING",
      data: true
    });
    await AddCategory(data)
      .then(res => {
        console.log(res);
        if (res.status === 201) {
          getCountCategory()
            .then(res => {
              if (res.status === 200) {
                dispatch({
                  type: "GET_CATEGORY_COUNT",
                  data: res.data
                });
                dispatch({
                  type: "STOP_LOADING",
                  data: false
                });
              }
            })
            .catch(err => {
              dispatch({
                type: "GET_CATEGORY_COUNT_FAIL",
                data: {
                  sucessfull: false,
                  message: err
                }
              });
            });
        }
      })
      .catch(error => console.log(error));
  };
  const getCategoryCount = async () => {
    await getCountCategory()
      .then(res => {
        if (res.status === 200) {
          dispatch({
            type: "GET_CATEGORY_COUNT",
            data: res.data
          });
        }
      })
      .catch(err => {
        dispatch({
          type: "GET_CATEGORY_COUNT_FAIL",
          data: {
            sucessfull: false,
            message: err
          }
        });
      });
  };

  const updateEditCategory = async updatedData => {
    await updateCategory(updatedData)
      .then(res => {})
      .catch(error => console.log(error));
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
        updateEditCategory
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
