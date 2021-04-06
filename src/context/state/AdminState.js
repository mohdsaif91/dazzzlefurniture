import React, { createContext, useReducer } from "react";
import AdminReducer from "../reducers/AdminReducer";

const initialState = {
  adminAccess: false
};

//create createContext
export const AdminContext = createContext(initialState);

//Provider Component
export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);

  //Actions
  const adminLogin = () => {
    dispatch({
      type: "ADMIN_LOGIN",
      data: true
    });
  };

  const adminLogOut = () => {
    dispatch({
      type: "ADMIN_LOGOUT",
      data: false
    });
  };

  return (
    <AdminContext.Provider
      value={{ adminAccess: state.adminAccess, adminLogin, adminLogOut }}
    >
      {children}
    </AdminContext.Provider>
  );
};
